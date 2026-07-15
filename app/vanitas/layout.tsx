import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Vanitas | Enrique Ciapara",
  description:
    "Vanitas, colección de grabados de Enrique Ciapara que explora la melancolía de lo efímero, lo fútil y lo mortal a través de la vanidad.",
  keywords:
    "Vanitas, Enrique Ciapara, grabado, naturaleza muerta, arte contemporáneo, Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/vanitas",
    languages: {
      es: "https://enriqueciapara.com/vanitas",
      en: "https://enriqueciapara.com/en/vanitas",
      fr: "https://enriqueciapara.com/fr/vanitas",
      ca: "https://enriqueciapara.com/ca/vanitas",
      "x-default": "https://enriqueciapara.com/vanitas",
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
    alternateLocale: ["en_US", "fr_FR", "ca_ES"],
    url: "https://enriqueciapara.com/vanitas",
    siteName: "Enrique Ciapara",
    title: "Vanitas | Enrique Ciapara",
    description:
      "Vanitas, colección de grabados de Enrique Ciapara que explora la melancolía de lo efímero, lo fútil y lo mortal a través de la vanidad.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Vanitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanitas | Enrique Ciapara",
    description:
      "Vanitas, colección de grabados de Enrique Ciapara que explora la melancolía de lo efímero, lo fútil y lo mortal a través de la vanidad.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function VanitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
