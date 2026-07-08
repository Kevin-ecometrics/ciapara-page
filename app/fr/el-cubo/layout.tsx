import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara expose à El Cubo | Enrique Ciapara",
  description:
    "Enrique Ciapara expose son œuvre Trompe l'œil à El Cubo, Sala 3 du Centro Cultural Tijuana.",
  keywords:
    "Enrique Ciapara, El Cubo, CECUT, Tijuana, exposition, Trompe l'œil, presse",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/el-cubo",
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
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/el-cubo",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara expose à El Cubo",
    description:
      "Enrique Ciapara expose son œuvre Trompe l'œil à El Cubo, Sala 3 du Centro Cultural Tijuana.",
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
    title: "Enrique Ciapara expose à El Cubo",
    description:
      "Enrique Ciapara expose son œuvre Trompe l'œil à El Cubo, Sala 3 du Centro Cultural Tijuana.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function FrElCuboLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
