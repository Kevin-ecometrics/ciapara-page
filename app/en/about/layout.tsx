import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Discover the Life and Career of Enrique Ciapara",
  description:
    "Life, influences, and exhibitions of a leading painter of contemporary art on the Tijuana-San Diego border. Explore his artistic journey here.",
  keywords:
    "Enrique Ciapara, Ciapara, Art Tijuana, Tijuana painter, Border art, Printmaking Tijuana, Baja California art, Enrique Ciapara Trompe-l'oeil CECUT, Landscapes in Transit Museum Pedro Coronel Ciapara, Enrique Ciapara Errors exhibition 2019, Strange New World Museum of Contemporary Art San Diego Ciapara, contemporary art Tijuana San Diego border",
  alternates: {
    canonical: "https://enriqueciapara.com/en/about",
    languages: {
      es: "https://enriqueciapara.com/about",
      en: "https://enriqueciapara.com/en/about",
      fr: "https://enriqueciapara.com/fr/about",
      ca: "https://enriqueciapara.com/ca/about",
      "x-default": "https://enriqueciapara.com/about",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: "es_MX",
    url: "https://enriqueciapara.com/en/about",
    siteName: "Enrique Ciapara",
    title: "Discover the Life and Career of Enrique Ciapara",
    description:
      "Life, influences, and exhibitions of a leading painter of contemporary art on the Tijuana-San Diego border. Explore his artistic journey here.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Visual artist from Tijuana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover the Life and Career of Enrique Ciapara",
    description:
      "Life, influences, and exhibitions of a leading painter of contemporary art on the Tijuana-San Diego border.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function EnAboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
