import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Trompe-L'Œil | 2013 Exhibition by Enrique Ciapara at CECUT",
  description:
    "Trompe-L'Œil, solo exhibition by Enrique Ciapara presented at Sala 3 of El Cubo, Centro Cultural Tijuana, 2013. Curated by Fernando Delmar.",
  keywords:
    "Trompe-L'Œil, Enrique Ciapara, CECUT, El Cubo, Tijuana, 2013 exhibition, Fernando Delmar, illusionist painting, Mexican border artist",

  alternates: {
    canonical: "https://enriqueciapara.com/en/trompe-loeil",
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
    locale: "en_US",
    alternateLocale: "es_MX",
    url: "https://enriqueciapara.com/en/trompe-loeil",
    siteName: "Enrique Ciapara",
    title: "Trompe-L'Œil | 2013 Exhibition by Enrique Ciapara at CECUT",
    description:
      "Trompe-L'Œil, solo exhibition by Enrique Ciapara presented at Sala 3 of El Cubo, Centro Cultural Tijuana, 2013. Curated by Fernando Delmar.",
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
    title: "Trompe-L'Œil | 2013 Exhibition by Enrique Ciapara at CECUT",
    description:
      "Trompe-L'Œil, solo exhibition by Enrique Ciapara at El Cubo, Centro Cultural Tijuana, 2013. Curated by Fernando Delmar.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function TrompeLoeilEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
