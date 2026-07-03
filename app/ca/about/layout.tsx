import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Descobreix la vida i la carrera d'Enrique Ciapara",
  description:
    "Vida, influències i exposicions d'un pintor destacat de l'art contemporani a la frontera Tijuana-San Diego. Explora el seu recorregut artístic aquí.",
  keywords:
    "Enrique Ciapara, Ciapara, Art Tijuana, Pintor Tijuana, Art fronterer, Gravat Tijuana, Art Baixa Califòrnia, Enrique Ciapara Trompe-l'œil CECUT, Ciapara artista contemporani, art mexicà contemporani",
  alternates: {
    canonical: "https://enriqueciapara.com/ca/about",
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
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca/about",
    siteName: "Enrique Ciapara",
    title: "Descobreix la vida i la carrera d'Enrique Ciapara",
    description:
      "Vida, influències i exposicions d'un pintor destacat de l'art contemporani a la frontera Tijuana-San Diego. Explora el seu recorregut artístic aquí.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Artista plàstic de Tijuana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descobreix la vida i la carrera d'Enrique Ciapara",
    description:
      "Vida, influències i exposicions d'un pintor destacat de l'art contemporani a la frontera Tijuana-San Diego.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function CaAboutLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
