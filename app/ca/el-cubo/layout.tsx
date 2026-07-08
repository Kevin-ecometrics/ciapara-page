import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara exposa a El Cubo | Enrique Ciapara",
  description:
    "Enrique Ciapara exposa la seva obra Trompe l'œil a El Cubo, Sala 3 del Centro Cultural Tijuana.",
  keywords:
    "Enrique Ciapara, El Cubo, CECUT, Tijuana, exposició, Trompe l'œil, premsa",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/el-cubo",
    languages: {
      es: "https://enriqueciapara.com/el-cubo",
      en: "https://enriqueciapara.com/en/el-cubo",
      fr: "https://enriqueciapara.com/fr/el-cubo",
      ca: "https://enriqueciapara.com/ca/el-cubo",
      "x-default": "https://enriqueciapara.com/el-cubo",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/el-cubo",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara exposa a El Cubo",
    description:
      "Enrique Ciapara exposa la seva obra Trompe l'œil a El Cubo, Sala 3 del Centro Cultural Tijuana.",
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
    title: "Enrique Ciapara exposa a El Cubo",
    description:
      "Enrique Ciapara exposa la seva obra Trompe l'œil a El Cubo, Sala 3 del Centro Cultural Tijuana.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function CaElCuboLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
