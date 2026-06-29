import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Serie 2015 de obras de Enrique Ciapara",
  description:
    "Explora la serie 2015 con pintura universal con alma norteña semiabstracta y sintética que celebra el paisaje del Norte y la luz de Tarragona.",
  keywords:
    "Colección 2015 Ciapara, Enrique Ciapara, pintor Tijuana, artista abstracto mexicano, síntesis mediterránea bajacaliforniana, artista visual baja californiano, frontera San Diego Tijuana, pintura contemporánea, avenida revolución Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/2015",
    languages: {
      es: "https://enriqueciapara.com/2015",
      en: "https://enriqueciapara.com/en/2015",
      "x-default": "https://enriqueciapara.com/2015",
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
    url: "https://enriqueciapara.com/2015",
    siteName: "Enrique Ciapara",
    title: "Serie 2015 de obras de Enrique Ciapara",
    description:
      "Explora la serie 2015 con pintura universal con alma norteña semiabstracta y sintética que celebra el paisaje del Norte y la luz de Tarragona.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Serie 2015",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serie 2015 de obras de Enrique Ciapara",
    description:
      "Pintura universal con alma norteña semiabstracta y sintética que celebra el paisaje del Norte y la luz de Tarragona.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function Layout2015({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
