import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Colección 2000-2009 | Enrique Ciapara — Una década de obra",
  description:
    "En esta colección de más de nueve años, Enrique Ciapara se presenta como un hábil mediador entre lo que él quiere y lo que la pintura quiere. Descubre más.",
  keywords:
    "Enrique Ciapara 2000 2009, Ciapara colección blurb, pintor Tijuana, artista abstracto mexicano, Ciapara, frontera San Diego Tijuana, artista visual baja californiano, pintura contemporánea, trayectoria Ciapara",

  alternates: {
    canonical: "https://enriqueciapara.com/blurb",
    languages: {
      es: "https://enriqueciapara.com/blurb",
      en: "https://enriqueciapara.com/en/blurb",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
};

export default function BlurbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
