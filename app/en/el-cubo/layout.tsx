import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara Exhibits at El Cubo | Enrique Ciapara",
  description:
    "Enrique Ciapara exhibits his Trompe l'œil work at El Cubo, Sala 3 of Centro Cultural Tijuana.",
  keywords:
    "Enrique Ciapara, El Cubo, CECUT, Tijuana, exhibition, Trompe l'œil, press",
  alternates: {
    canonical: "https://enriqueciapara.com/en/el-cubo",
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
    locale: "en_US",
    alternateLocale: ["es_MX", "fr_FR", "ca_ES"],
    url: "https://enriqueciapara.com/en/el-cubo",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara Exhibits at El Cubo",
    description:
      "Enrique Ciapara exhibits his Trompe l'œil work at El Cubo, Sala 3 of Centro Cultural Tijuana.",
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
    title: "Enrique Ciapara Exhibits at El Cubo",
    description:
      "Enrique Ciapara exhibits his Trompe l'œil work at El Cubo, Sala 3 of Centro Cultural Tijuana.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function ElCuboEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
