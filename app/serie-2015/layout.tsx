import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara's 2015 Series of Works",
  description:
    "Explora la serie 2015 con pintura universal con alma norteña semiabstracta y sintética que celebra el paisaje del Norte y la luz de Tarragona.",
  keywords:
    "Colección 2015 Ciapara, Enrique Ciapara, pintor Tijuana, artista abstracto mexicano, síntesis mediterránea bajacaliforniana, artista visual baja californiano, frontera San Diego Tijuana, pintura contemporánea, avenida revolución Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/serie-2015",
    languages: {
      es: "https://enriqueciapara.com/serie-2015",
      en: "https://enriqueciapara.com/en/serie-2015",
      "x-default": "https://enriqueciapara.com/serie-2015",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
};

export default function Layout2015({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
