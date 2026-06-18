import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Catálogo de Errores | Colección 2018-2019 de Enrique Ciapara",
  description:
    '¿Error, despropósito o feliz acierto? Descubre "Catálogo de Errores", la enigmática colección de Enrique Ciapara inspirada en Sandro Botticelli y Boccaccio.',
  keywords:
    "Catálogo de Errores, Enrique Ciapara, pintor Tijuana, artista abstracto mexicano, Ciapara, frontera San Diego Tijuana, artista visual baja californiano, colección 2018 2019, Botticelli Ciapara, pintura contemporánea Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/en/catalogo-de-errores",
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
};

export default function ErroresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
