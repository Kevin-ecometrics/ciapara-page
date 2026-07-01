import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara | 35 Years of Work in Mexico",
  description:
    "His painting contains iconography that, at first glance, seems familiar. Discover his biography, exhibitions, and the most outstanding works of his career.",
  keywords:
    "Visual artist in Tijuana, Mexican plastic artist, Abstract artist, Abstract painter Tijuana, Contemporary art Tijuana, Art galleries in Tijuana, Mexican painter, Abstract artist, Plastic artist, Tijuana artist, Abstract artist in Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/en",
    languages: {
      es: "https://enriqueciapara.com",
      en: "https://enriqueciapara.com/en",
      fr: "https://enriqueciapara.com/fr",
      ca: "https://enriqueciapara.com/ca",
      "x-default": "https://enriqueciapara.com",
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
    alternateLocale: "es_MX",
    url: "https://enriqueciapara.com/en",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara | 35 Years of Work in Mexico",
    description:
      "His painting contains iconography that, at first glance, seems familiar. Discover his biography, exhibitions, and the most outstanding works of his career.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Visual artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara | 35 Years of Work in Mexico",
    description:
      "His painting contains iconography that, at first glance, seems familiar. Discover his biography, exhibitions, and the most outstanding works of his career.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enrique Ciapara",
  url: "https://enriqueciapara.com/en",
  image: "https://enriqueciapara.com/opengraph-image.png",
  jobTitle: "Visual artist",
  description:
    "His painting contains iconography that, at first glance, seems familiar. Discover his biography, exhibitions, and the most outstanding works of his career.",
  nationality: {
    "@type": "Country",
    name: "Mexico",
  },
  sameAs: ["https://www.instagram.com/enriqueciapara/"],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
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
