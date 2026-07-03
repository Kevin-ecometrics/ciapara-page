import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Découvrez la vie et la carrière d'Enrique Ciapara",
  description:
    "Vie, influences et expositions d'un peintre majeur de l'art contemporain à la frontière Tijuana-San Diego. Explorez son parcours artistique ici.",
  keywords:
    "Enrique Ciapara, Ciapara, Art Tijuana, Peintre Tijuana, Art frontalier, Gravure Tijuana, Art Basse-Californie, Enrique Ciapara Trompe-l'œil CECUT, Ciapara artiste contemporain, art mexicain contemporain",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/about",
    languages: {
      es: "https://enriqueciapara.com/about",
      en: "https://enriqueciapara.com/en/about",
      fr: "https://enriqueciapara.com/fr/about",
      ca: "https://enriqueciapara.com/ca/about",
      "x-default": "https://enriqueciapara.com/about",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/about",
    siteName: "Enrique Ciapara",
    title: "Découvrez la vie et la carrière d'Enrique Ciapara",
    description:
      "Vie, influences et expositions d'un peintre majeur de l'art contemporain à la frontière Tijuana-San Diego. Explorez son parcours artistique ici.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Artiste plastique de Tijuana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Découvrez la vie et la carrière d'Enrique Ciapara",
    description:
      "Vie, influences et expositions d'un peintre majeur de l'art contemporain à la frontière Tijuana-San Diego.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function FrAboutLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
