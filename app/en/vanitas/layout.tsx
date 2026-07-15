import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Vanitas | Enrique Ciapara",
  description:
    "Vanitas, a collection of prints by Enrique Ciapara exploring the melancholy of the ephemeral, the futile, and the mortal through vanity.",
  keywords:
    "Vanitas, Enrique Ciapara, printmaking, engraving, still life, contemporary art, Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/en/vanitas",
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
    locale: "en_US",
    alternateLocale: ["es_MX", "fr_FR", "ca_ES"],
    url: "https://enriqueciapara.com/en/vanitas",
    siteName: "Enrique Ciapara",
    title: "Vanitas | Enrique Ciapara",
    description:
      "Vanitas, a collection of prints by Enrique Ciapara exploring the melancholy of the ephemeral, the futile, and the mortal through vanity.",
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
      "Vanitas, a collection of prints by Enrique Ciapara exploring the melancholy of the ephemeral, the futile, and the mortal through vanity.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function VanitasEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
