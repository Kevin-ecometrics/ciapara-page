import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Trompe-l'œil — Enrique Ciapara · CECUT 2013",
  description:
    "Découvrez l'exposition Trompe-l'œil d'Enrique Ciapara au Centro Cultural Tijuana. Une œuvre qui explore les limites entre réalité et illusion.",
  keywords:
    "Enrique Ciapara Trompe-l'œil, CECUT, Centro Cultural Tijuana, exposition art contemporain, peinture Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/trompe-loeil",
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
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/trompe-loeil",
    siteName: "Enrique Ciapara",
    title: "Trompe-l'œil — Enrique Ciapara · CECUT 2013",
    description:
      "Découvrez l'exposition Trompe-l'œil d'Enrique Ciapara au Centro Cultural Tijuana.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Trompe-l'œil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trompe-l'œil — Enrique Ciapara · CECUT 2013",
    description: "Découvrez l'exposition Trompe-l'œil d'Enrique Ciapara au CECUT.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function FrTrompeLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
