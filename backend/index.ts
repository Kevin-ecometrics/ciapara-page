import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// En dev carga .env.local; en producción (cPanel) carga .env
dotenv.config({ path: ".env.local" });
dotenv.config(); // fallback a .env si una variable no fue definida arriba

// ─── DB pool ──────────────────────────────────────────────────────────────────
const pool = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "ciapara",
  waitForConnections: true,
  connectionLimit: 10,
});

// ─── Mailer ───────────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── R2 (Cloudflare) ──────────────────────────────────────────────────────────
const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.SECRET_ACCESS_KEY ?? "",
  },
});

const R2_BUCKET = "enrique-ciapara";
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL ?? "";

// ─── App ──────────────────────────────────────────────────────────────────────
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/api/health", async (_req: Request, res: Response) => {
  try {
    await pool.execute("SELECT 1");
    res.json({ status: "ok", db: "connected" });
  } catch {
    res.status(503).json({ status: "error", db: "unreachable" });
  }
});

// ─── Images (R2) ──────────────────────────────────────────────────────────────
app.get("/api/images", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const images: { key: string; url: string; size?: number; lastModified?: Date }[] = [];
    let continuationToken: string | undefined;

    do {
      const page = await r2.send(
        new ListObjectsV2Command({
          Bucket: R2_BUCKET,
          ContinuationToken: continuationToken,
        })
      );

      for (const obj of page.Contents ?? []) {
        if (!obj.Key || obj.Key.endsWith("/")) continue;
        const encodedKey = obj.Key.split("/").map(encodeURIComponent).join("/");
        images.push({
          key: obj.Key,
          url: `${R2_PUBLIC_URL}/${encodedKey}`,
          size: obj.Size,
          lastModified: obj.LastModified,
        });
      }

      continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined;
    } while (continuationToken);

    res.json({ images });
  } catch (err) {
    next(err);
  }
});

// ─── Contact ──────────────────────────────────────────────────────────────────
interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

app.post(
  "/api/contact",
  async (
    req: Request<Record<string, never>, unknown, ContactBody>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({ error: "name, email y message son requeridos." });
        return;
      }

      // Guardar en MySQL
      await pool.execute(
        "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
        [name, email, phone ?? null, message]
      );

      // Correo al administrador
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `Nuevo contacto de ${name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      // Confirmación al usuario
      await transporter.sendMail({
        from: `"Ciapara" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Recibimos tu mensaje",
        html: `
          <h2>Hola ${name},</h2>
          <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
          <br>
          <p>El equipo de Ciapara</p>
        `,
      });

      res.status(201).json({ success: true, message: "Mensaje enviado correctamente." });
    } catch (err) {
      next(err);
    }
  }
);

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor." });
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
