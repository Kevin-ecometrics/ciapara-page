import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers/i18nProvider";

const interstate = localFont({
  variable: "--font-interstate",
  src: [
    {
      path: "../public/interstate/interstate-light-cond-58b64220b1490.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-light-italic-58b64147957e5.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/interstate/interstate-regular-comp-58b641cc0aca1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-regular-italic-58b641ecad88f.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/interstate/interstate-bold-cond-58b64162258ca.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-black-cond-58b642507872b.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Enrique Ciapara| artista plástico |35 años de trayectoria en México",
  description:
    "Su pintura encierra una iconografía que a primera vista nos es cotidiana. Conoce su biografía, exposiciones y las obras más destacadas de su carrera.",
  keywords:
    "Artista plástico en Tijuana, Artista plástico mexicano, Artista abstracto, Pintor abstrato Tijuana, Arte contemporáneo Tijuana, Galerías de arte en Tijuana, Pintor mexicano, Artista abstracto, Artista plastico,  Artista Tijuana, Artista abstracto en Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com",
    languages: {
      es: "https://enriqueciapara.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${interstate.variable} ${openSans.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
          <I18nProvider>{children}</I18nProvider>
        </body>
    </html>
  );
}
