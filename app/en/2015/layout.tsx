import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara's 2015 Series of Works",
  description:
    "Explore the 2015 series, featuring universal paintings with a semi-abstract, synthetic Northern spirit that celebrate the Northern landscape and the light of Tarragona.",
  keywords:
    "painter ciapara, Artist, Enrique Ciapara, Ciapara, Tijuana, San Diego-Tijuana Border, Revolution Avenue, Signs, Enrique Ciapara visual artist from Baja California, Enrique Ciapara Mexican abstract artist, Enrique Ciapara Mexican abstract artist, Enrique Ciapara artist from the San Diego-Tijuana border region, Enrique Ciapara artist in Tijuana ",

  alternates: {
    canonical: "https://enriqueciapara.com/en/2015",
    languages: {
      es: "https://enriqueciapara.com/2015",
      en: "https://enriqueciapara.com/en/2015",
      "x-default": "https://enriqueciapara.com/2015",
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
    url: "https://enriqueciapara.com/en/2015",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara's 2015 Series of Works",
    description:
      "Explore the 2015 series, featuring universal paintings with a semi-abstract, synthetic Northern spirit that celebrate the Northern landscape and the light of Tarragona.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — 2015 Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara's 2015 Series of Works",
    description:
      "Universal paintings with a semi-abstract Northern spirit, celebrating the Northern landscape and the light of Tarragona.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function Layout2015({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
