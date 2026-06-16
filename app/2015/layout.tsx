import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com/errores"),
  title: "Colección 2015 obras de Enrique Ciapara",
  description:
    "Explora 2015 con pintura universal con alma norteña semiabstracta y sintética que celebran el paisaje del Norte y la luz de Tarragona.",
  keywords:
    "pintor ciapara, Artista, Enrique Ciapara, Ciapara, Tijuana, Frontera San Diego Tijuana, Avenida revolución, Rotulos, artista visual baja californiano ciapara, artista abstracto mexicano enrique ciapara, artista del la frontera san diego tijuana Enrique Ciapara, enrique ciapara artista en tijuana",

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
