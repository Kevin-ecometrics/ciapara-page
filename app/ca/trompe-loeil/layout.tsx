import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Trompe-l'oeil — Enrique Ciapara · CECUT 2013",
  description:
    "Descobreix l'exposició Trompe-l'oeil d'Enrique Ciapara al Centro Cultural Tijuana. Una obra que explora els límits entre realitat i il·lusió.",
  keywords:
    "Enrique Ciapara Trompe-l'oeil, CECUT, Centro Cultural Tijuana, exposició art contemporani, pintura Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/trompe-loeil",
    languages: {
      es: "https://enriqueciapara.com/trompe-loeil",
      en: "https://enriqueciapara.com/en/trompe-loeil",
      fr: "https://enriqueciapara.com/fr/trompe-loeil",
      ca: "https://enriqueciapara.com/ca/trompe-loeil",
      "x-default": "https://enriqueciapara.com/trompe-loeil",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/trompe-loeil",
    siteName: "Enrique Ciapara",
    title: "Trompe-l'oeil — Enrique Ciapara · CECUT 2013",
    description:
      "Descobreix l'exposició Trompe-l'oeil d'Enrique Ciapara al Centro Cultural Tijuana.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Trompe-l'oeil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trompe-l'oeil — Enrique Ciapara · CECUT 2013",
    description: "Descobreix l'exposició Trompe-l'oeil d'Enrique Ciapara al CECUT.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function CaTrompeLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
