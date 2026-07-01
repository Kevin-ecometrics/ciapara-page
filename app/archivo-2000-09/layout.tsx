import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara colección 2000-09",
  description:
    "En esta colección de más de nueve años, Enrique Ciapara se presenta como un hábil mediador entre lo que él quiere y lo que la pintura quiere. Descubre más.",
  keywords:
    "Enrique Ciapara 2000 2009, Ciapara colección blurb, pintor Tijuana, artista abstracto mexicano, Ciapara, frontera San Diego Tijuana, artista visual baja californiano, pintura contemporánea, trayectoria Ciapara",

  alternates: {
    canonical: "https://enriqueciapara.com/archivo-2000-09",
    languages: {
      es: "https://enriqueciapara.com/archivo-2000-09",
      en: "https://enriqueciapara.com/en/archivo-2000-09",
      fr: "https://enriqueciapara.com/fr/archivo-2000-09",
      ca: "https://enriqueciapara.com/ca/archivo-2000-09",
      "x-default": "https://enriqueciapara.com/archivo-2000-09",
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
    url: "https://enriqueciapara.com/archivo-2000-09",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara colección 2000-09",
    description:
      "En esta colección de más de nueve años, Enrique Ciapara se presenta como un hábil mediador entre lo que él quiere y lo que la pintura quiere. Descubre más.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Colección 2000–09",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara colección 2000-09",
    description:
      "Más de nueve años de obra donde Ciapara media entre lo que él quiere y lo que la pintura quiere.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function BlurbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
