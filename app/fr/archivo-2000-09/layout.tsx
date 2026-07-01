import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Archive 2000-09 — Enrique Ciapara",
  description:
    "L'hédonisme de la peinture de Ciapara au sein d'un ordre social constitue un manifeste de résistance. Découvrez la collection complète 2000-2009.",
  keywords:
    "Enrique Ciapara archive 2000-09, collection peinture, art Tijuana, art contemporain mexicain",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/archivo-2000-09",
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
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/archivo-2000-09",
    siteName: "Enrique Ciapara",
    title: "Archive 2000-09 — Enrique Ciapara",
    description:
      "L'hédonisme de la peinture de Ciapara au sein d'un ordre social constitue un manifeste de résistance. Découvrez la collection complète 2000-2009.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Archive 2000-09",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive 2000-09 — Enrique Ciapara",
    description: "Découvrez la collection complète 2000-2009 d'Enrique Ciapara.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function FrArchivoLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
