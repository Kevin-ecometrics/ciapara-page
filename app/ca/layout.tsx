import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara | 35 anys de trajectòria a Mèxic",
  description:
    "La seva pintura tanca una iconografia que, a primera vista, ens és quotidiana. Descobreix la seva biografia, exposicions i les obres més destacades de la seva carrera.",
  keywords:
    "Artista plàstic a Tijuana, Artista plàstic mexicà, Artista abstracte, Pintor abstracte Tijuana, Art contemporani Tijuana, Galeries d'art a Tijuana, Pintor mexicà, Artista abstracte, Artista Tijuana, Artista abstracte a Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/ca",
    languages: {
      es: "https://enriqueciapara.com",
      en: "https://enriqueciapara.com/en",
      fr: "https://enriqueciapara.com/fr",
      ca: "https://enriqueciapara.com/ca",
      "x-default": "https://enriqueciapara.com",
    },
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_MX", "en_US", "fr_FR"],
    url: "https://enriqueciapara.com/ca",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara | 35 anys de trajectòria a Mèxic",
    description:
      "La seva pintura tanca una iconografia que, a primera vista, ens és quotidiana. Descobreix la seva biografia, exposicions i les obres més destacades de la seva carrera.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Artista plàstic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara | 35 anys de trajectòria a Mèxic",
    description:
      "La seva pintura tanca una iconografia que, a primera vista, ens és quotidiana. Descobreix la seva biografia, exposicions i les obres més destacades de la seva carrera.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enrique Ciapara",
  url: "https://enriqueciapara.com/ca",
  image: "https://enriqueciapara.com/opengraph-image.png",
  jobTitle: "Artista plàstic",
  description:
    "La seva pintura tanca una iconografia que, a primera vista, ens és quotidiana. Descobreix la seva biografia, exposicions i les obres més destacades de la seva carrera.",
  nationality: { "@type": "Country", name: "Mèxic" },
  sameAs: ["https://www.instagram.com/enriqueciapara/"],
};

export default function CaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
