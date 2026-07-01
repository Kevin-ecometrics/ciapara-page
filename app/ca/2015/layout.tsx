import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "2015 — Sèrie · Enrique Ciapara",
  description:
    "Descobreix la sèrie 2015 d'Enrique Ciapara, inspirada per la llum del Nord i els paisatges de Tarragona, on els objectes de cuina cobren vida.",
  keywords:
    "Enrique Ciapara 2015, sèrie pintura, Tarragona, objectes cuina, art abstracte Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/2015",
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
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/2015",
    siteName: "Enrique Ciapara",
    title: "2015 — Sèrie · Enrique Ciapara",
    description:
      "Descobreix la sèrie 2015 d'Enrique Ciapara, inspirada per la llum del Nord i els paisatges de Tarragona.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Sèrie 2015",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2015 — Sèrie · Enrique Ciapara",
    description: "Descobreix la sèrie 2015 d'Enrique Ciapara.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function Ca2015Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
