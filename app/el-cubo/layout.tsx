import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Expone Enrique Ciapara en El Cubo | Enrique Ciapara",
  description:
    "Enrique Ciapara expone su obra Trompe l'œil en El Cubo, Sala 3 del Centro Cultural Tijuana.",
  keywords:
    "Enrique Ciapara, El Cubo, CECUT, Tijuana, exposición, Trompe l'œil, prensa",
  alternates: {
    canonical: "https://enriqueciapara.com/el-cubo",
    languages: {
      es: "https://enriqueciapara.com/el-cubo",
      en: "https://enriqueciapara.com/en/el-cubo",
      fr: "https://enriqueciapara.com/fr/el-cubo",
      ca: "https://enriqueciapara.com/ca/el-cubo",
      "x-default": "https://enriqueciapara.com/el-cubo",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://enriqueciapara.com/el-cubo",
    siteName: "Enrique Ciapara",
    title: "Expone Enrique Ciapara en El Cubo",
    description:
      "Enrique Ciapara expone su obra Trompe l'œil en El Cubo, Sala 3 del Centro Cultural Tijuana.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — El Cubo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expone Enrique Ciapara en El Cubo",
    description:
      "Enrique Ciapara expone su obra Trompe l'œil en El Cubo, Sala 3 del Centro Cultural Tijuana.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function ElCuboLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
