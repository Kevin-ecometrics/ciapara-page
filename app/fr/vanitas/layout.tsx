import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Vanitas | Enrique Ciapara",
  description:
    "Vanitas, une collection de gravures d'Enrique Ciapara qui explore la mélancolie de l'éphémère, du futile et du mortel à travers la vanité.",
  keywords:
    "Vanitas, Enrique Ciapara, gravure, nature morte, art contemporain, Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/vanitas",
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
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/vanitas",
    siteName: "Enrique Ciapara",
    title: "Vanitas | Enrique Ciapara",
    description:
      "Vanitas, une collection de gravures d'Enrique Ciapara qui explore la mélancolie de l'éphémère, du futile et du mortel à travers la vanité.",
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
      "Vanitas, une collection de gravures d'Enrique Ciapara qui explore la mélancolie de l'éphémère, du futile et du mortel à travers la vanité.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function VanitasFrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
