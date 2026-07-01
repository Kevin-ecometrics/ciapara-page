import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Arxiu 2000-09 — Enrique Ciapara",
  description:
    "L'hedonisme de la pintura de Ciapara enmig d'un ordre social constitueix un manifest de resistència. Coneix la col·lecció completa 2000-2009.",
  keywords:
    "Enrique Ciapara arxiu 2000-09, col·lecció pintura, art Tijuana, art contemporani mexicà",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/archivo-2000-09",
    languages: {
      es: "https://enriqueciapara.com/archivo-2000-09",
      en: "https://enriqueciapara.com/en/archivo-2000-09",
      fr: "https://enriqueciapara.com/fr/archivo-2000-09",
      ca: "https://enriqueciapara.com/ca/archivo-2000-09",
      "x-default": "https://enriqueciapara.com/archivo-2000-09",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/archivo-2000-09",
    siteName: "Enrique Ciapara",
    title: "Arxiu 2000-09 — Enrique Ciapara",
    description:
      "L'hedonisme de la pintura de Ciapara enmig d'un ordre social constitueix un manifest de resistència. Coneix la col·lecció completa 2000-2009.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Arxiu 2000-09",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arxiu 2000-09 — Enrique Ciapara",
    description: "Coneix la col·lecció completa 2000-2009 d'Enrique Ciapara.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function CaArchivoLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
