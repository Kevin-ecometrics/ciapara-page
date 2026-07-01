import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Collection of Works: “Errors” by Enrique Ciapara",
  description: `A mistake, a blunder, or a stroke of genius? Discover “Errores,” Enrique Ciapara's enigmatic work inspired by Sandro Botticelli and Boccaccio.`,
  keywords:
    "painter ciapara, Artist, Enrique Ciapara, Ciapara, Tijuana, San Diego-Tijuana Border, Enrique Ciapara visual artist from Baja California, Enrique Ciapara Mexican abstract artist, Enrique Ciapara Mexican abstract artist, Enrique Ciapara artist from the San Diego-Tijuana border region, Enrique Ciapara artist in Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/en/catalogo-de-errores",
    languages: {
      es: "https://enriqueciapara.com/catalogo-de-errores",
      en: "https://enriqueciapara.com/en/catalogo-de-errores",
      fr: "https://enriqueciapara.com/fr/catalogo-de-errores",
      ca: "https://enriqueciapara.com/ca/catalogo-de-errores",
      "x-default": "https://enriqueciapara.com/catalogo-de-errores",
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
    url: "https://enriqueciapara.com/en/catalogo-de-errores",
    siteName: "Enrique Ciapara",
    title: 'Collection of Works: "Errors" by Enrique Ciapara',
    description:
      'A mistake, a blunder, or a stroke of genius? Discover "Errores," Enrique Ciapara\'s enigmatic work inspired by Sandro Botticelli and Boccaccio.',
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Errores Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Collection of Works: "Errors" by Enrique Ciapara',
    description:
      'A mistake or a stroke of genius? Discover "Errores," inspired by Botticelli and Boccaccio.',
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function ErroresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
