import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Catàleg d'obres: «Errores» per Enrique Ciapara",
  description: `Un error, una falta o una obra de geni? Descobreix «Errores», l'obra enigmàtica d'Enrique Ciapara inspirada en Sandro Botticelli i Boccaccio.`,
  keywords:
    "pintor ciapara, Artista, Enrique Ciapara, Ciapara, Tijuana, Frontera San Diego-Tijuana, Enrique Ciapara artista visual de la Baixa Califòrnia, Enrique Ciapara artista abstracte mexicà",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/catalogo-de-errores",
    languages: {
      es: "https://enriqueciapara.com/catalogo-de-errores",
      en: "https://enriqueciapara.com/en/catalogo-de-errores",
      fr: "https://enriqueciapara.com/fr/catalogo-de-errores",
      ca: "https://enriqueciapara.com/ca/catalogo-de-errores",
      "x-default": "https://enriqueciapara.com/catalogo-de-errores",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/catalogo-de-errores",
    siteName: "Enrique Ciapara",
    title: "Catàleg d'obres: «Errores» per Enrique Ciapara",
    description:
      "Un error o una obra de geni? Descobreix «Errores», inspirat en Botticelli i Boccaccio.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Col·lecció Errores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catàleg d'obres: «Errores» per Enrique Ciapara",
    description:
      "Un error o una obra de geni? Descobreix «Errores», inspirat en Botticelli i Boccaccio.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function CaErroresLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
