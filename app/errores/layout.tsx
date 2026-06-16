import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com/errores"),
  title: "Colección de obras Errores por Enrique Ciapara",
  description:
    '¿Error, despropósito o un feliz acierto? Descubre "Errores", la enigmática obra de Enrique Ciapara inspirada en Sandro Botticelli y Boccaccio. ¡Conócela!',
  keywords:
    "pintor ciapara, Artista, Enrique Ciapara , Ciapara, Tijuana, Frontera San Diefo Tijuana, artista visual baja californiano ciapara, artista abstracto mexicano enrique ciapara, artista abstracto mexicano enrique ciapara, artista del la frontera san diego tijuana Enrique Ciapara, enrique ciapara artista en tijuana, ciapara avenida revolución 2024",

  alternates: {
    canonical: "https://enriqueciapara.com",
    languages: {
      es: "https://enriqueciapara.com",
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
