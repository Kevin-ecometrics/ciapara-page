import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "2015 — Série · Enrique Ciapara",
  description:
    "Découvrez la série 2015 d'Enrique Ciapara, inspirée par la lumière du Nord et les paysages de Tarragone, où les objets de cuisine prennent vie.",
  keywords:
    "Enrique Ciapara 2015, série peinture, Tarragone, objets cuisine, art abstrait Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/2015",
    languages: {
      es: "https://enriqueciapara.com/2015",
      en: "https://enriqueciapara.com/en/2015",
      fr: "https://enriqueciapara.com/fr/2015",
      ca: "https://enriqueciapara.com/ca/2015",
      "x-default": "https://enriqueciapara.com/2015",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/2015",
    siteName: "Enrique Ciapara",
    title: "2015 — Série · Enrique Ciapara",
    description:
      "Découvrez la série 2015 d'Enrique Ciapara, inspirée par la lumière du Nord et les paysages de Tarragone.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Série 2015",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2015 — Série · Enrique Ciapara",
    description: "Découvrez la série 2015 d'Enrique Ciapara.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function Fr2015Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
