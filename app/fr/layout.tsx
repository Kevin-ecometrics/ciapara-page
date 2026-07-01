import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara | 35 ans de carrière au Mexique",
  description:
    "Sa peinture recèle une iconographie qui, à première vue, nous est familière. Découvrez sa biographie, ses expositions et les œuvres les plus remarquables de sa carrière.",
  keywords:
    "Artiste plastique à Tijuana, Artiste plastique mexicain, Artiste abstrait, Peintre abstrait Tijuana, Art contemporain Tijuana, Galeries d'art à Tijuana, Peintre mexicain, Artiste abstrait, Artiste Tijuana, Artiste abstrait à Tijuana",
  alternates: {
    canonical: "https://enriqueciapara.com/fr",
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
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US", "ca_ES"],
    url: "https://enriqueciapara.com/fr",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara | 35 ans de carrière au Mexique",
    description:
      "Sa peinture recèle une iconographie qui, à première vue, nous est familière. Découvrez sa biographie, ses expositions et les œuvres les plus remarquables de sa carrière.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Artiste plastique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara | 35 ans de carrière au Mexique",
    description:
      "Sa peinture recèle une iconographie qui, à première vue, nous est familière. Découvrez sa biographie, ses expositions et les œuvres les plus remarquables de sa carrière.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enrique Ciapara",
  url: "https://enriqueciapara.com/fr",
  image: "https://enriqueciapara.com/opengraph-image.png",
  jobTitle: "Artiste plastique",
  description:
    "Sa peinture recèle une iconographie qui, à première vue, nous est familière. Découvrez sa biographie, ses expositions et les œuvres les plus remarquables de sa carrière.",
  nationality: { "@type": "Country", name: "Mexique" },
  sameAs: ["https://www.instagram.com/enriqueciapara/"],
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
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
