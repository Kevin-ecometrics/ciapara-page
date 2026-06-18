import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Colección 2015 | Enrique Ciapara — Síntesis bajacaliforniana y mediterránea",
  description:
    "Explora la colección 2015 de Enrique Ciapara: pintura semiabstracta y sintética que celebra el paisaje del Norte, la luz de Tarragona y el alma de la frontera.",
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
