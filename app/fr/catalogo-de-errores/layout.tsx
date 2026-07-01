import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Catalogue d'œuvres : « Errores » par Enrique Ciapara",
  description: `Une erreur, une faute ou un coup de génie ? Découvrez « Errores », l'œuvre énigmatique d'Enrique Ciapara inspirée de Sandro Botticelli et Boccaccio.`,
  keywords:
    "peintre ciapara, Artiste, Enrique Ciapara, Ciapara, Tijuana, Frontière San Diego-Tijuana, Enrique Ciapara artiste visuel de Basse-Californie, Enrique Ciapara artiste abstrait mexicain",
  alternates: {
    canonical: "https://enriqueciapara.com/fr/catalogo-de-errores",
    languages: {
      es: "https://enriqueciapara.com/catalogo-de-errores",
      en: "https://enriqueciapara.com/en/catalogo-de-errores",
      fr: "https://enriqueciapara.com/fr/catalogo-de-errores",
      ca: "https://enriqueciapara.com/ca/catalogo-de-errores",
      "x-default": "https://enriqueciapara.com/catalogo-de-errores",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr/catalogo-de-errores",
    siteName: "Enrique Ciapara",
    title: "Catalogue d'œuvres : « Errores » par Enrique Ciapara",
    description:
      "Une erreur, une faute ou un coup de génie ? Découvrez « Errores », l'œuvre énigmatique d'Enrique Ciapara inspirée de Botticelli et Boccaccio.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Collection Errores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalogue d'œuvres : « Errores » par Enrique Ciapara",
    description:
      "Une erreur ou un coup de génie ? Découvrez « Errores », inspiré de Botticelli et Boccaccio.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function FrErroresLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
