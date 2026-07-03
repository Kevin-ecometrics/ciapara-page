import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Trompe-L'Œil | Exposición 2013 de Enrique Ciapara en CECUT",
  description:
    "Trompe-L'Œil, exposición individual de Enrique Ciapara presentada en la Sala 3 de El Cubo, Centro Cultural Tijuana, 2013. Curada por Fernando Delmar.",
  keywords:
    "Trompe-L'Œil, Enrique Ciapara, CECUT, El Cubo, Tijuana, exposición 2013, Fernando Delmar, pintura ilusionista, artista mexicano frontera",

  alternates: {
    canonical: "https://enriqueciapara.com/trompe-loeil",
    languages: {
      es: "https://enriqueciapara.com/trompe-loeil",
      en: "https://enriqueciapara.com/en/trompe-loeil",
      fr: "https://enriqueciapara.com/fr/trompe-loeil",
      ca: "https://enriqueciapara.com/ca/trompe-loeil",
      "x-default": "https://enriqueciapara.com/trompe-loeil",
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
    url: "https://enriqueciapara.com/trompe-loeil",
    siteName: "Enrique Ciapara",
    title: "Trompe-L'Œil | Exposición 2013 de Enrique Ciapara en CECUT",
    description:
      "Trompe-L'Œil, exposición individual de Enrique Ciapara presentada en la Sala 3 de El Cubo, Centro Cultural Tijuana, 2013. Curada por Fernando Delmar.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Trompe-L'Œil, CECUT 2013",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trompe-L'Œil | Exposición 2013 de Enrique Ciapara en CECUT",
    description:
      "Trompe-L'Œil, exposición individual de Enrique Ciapara en El Cubo, Centro Cultural Tijuana, 2013.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function TrompeLoeilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
