import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Vanitas | Enrique Ciapara",
  description:
    "Vanitas, una col·lecció de gravats d'Enrique Ciapara que explora la malenconia de l'efímer, el fútil i el mortal a través de la vanitat.",
  keywords:
    "Vanitas, Enrique Ciapara, gravat, natura morta, art contemporani, Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/vanitas",
    languages: {
      es: "https://enriqueciapara.com/vanitas",
      en: "https://enriqueciapara.com/en/vanitas",
      fr: "https://enriqueciapara.com/fr/vanitas",
      ca: "https://enriqueciapara.com/ca/vanitas",
      "x-default": "https://enriqueciapara.com/vanitas",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/vanitas",
    siteName: "Enrique Ciapara",
    title: "Vanitas | Enrique Ciapara",
    description:
      "Vanitas, una col·lecció de gravats d'Enrique Ciapara que explora la malenconia de l'efímer, el fútil i el mortal a través de la vanitat.",
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
      "Vanitas, una col·lecció de gravats d'Enrique Ciapara que explora la malenconia de l'efímer, el fútil i el mortal a través de la vanitat.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function VanitasCaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
