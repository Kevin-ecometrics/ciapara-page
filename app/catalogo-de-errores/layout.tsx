import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Colección de obras Errores por Enrique Ciapara",
  description:
    '¿Error, despropósito o un feliz acierto? Descubre "Errores", la enigmática obra de Enrique Ciapara inspirada en Sandro Botticelli y Boccaccio.',
  keywords:
    "Catálogo de Errores, Enrique Ciapara, pintor Tijuana, artista abstracto mexicano, Ciapara, frontera San Diego Tijuana, artista visual baja californiano, colección 2018 2019, Botticelli Ciapara, pintura contemporánea Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/catalogo-de-errores",
    languages: {
      es: "https://enriqueciapara.com/catalogo-de-errores",
      en: "https://enriqueciapara.com/en/catalogo-de-errores",
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
    locale: "es_MX",
    url: "https://enriqueciapara.com/catalogo-de-errores",
    siteName: "Enrique Ciapara",
    title: "Colección de obras Errores por Enrique Ciapara",
    description:
      '¿Error, despropósito o un feliz acierto? Descubre "Errores", la enigmática obra de Enrique Ciapara inspirada en Sandro Botticelli y Boccaccio.',
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Catálogo de Errores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colección de obras Errores por Enrique Ciapara",
    description:
      '¿Error, despropósito o un feliz acierto? Descubre "Errores", la enigmática obra inspirada en Botticelli y Boccaccio.',
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
