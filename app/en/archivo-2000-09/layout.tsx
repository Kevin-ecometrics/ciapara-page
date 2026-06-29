import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Enrique Ciapara, 2000–09 Collection ",
  description:
    "In this collection spanning more than 10 years, the artist is presented as a skilled mediator between what he wants and what the painting wants. Learn more",
  keywords:
    "painter ciapara, Artist, Enrique Ciapara, Ciapara, Tijuana, San Diego-Tijuana Border, Revolution Avenue, Signs, Enrique Ciapara visual artist from Baja California, Enrique Ciapara Mexican abstract artist, Enrique Ciapara Mexican abstract artist, Enrique Ciapara artist from the San Diego-Tijuana border region, Enrique Ciapara artist in Tijuana",

  alternates: {
    canonical: "https://enriqueciapara.com/en/archivo-2000-09",
    languages: {
      es: "https://enriqueciapara.com/archivo-2000-09",
      en: "https://enriqueciapara.com/en/archivo-2000-09",
      "x-default": "https://enriqueciapara.com/archivo-2000-09",
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
    url: "https://enriqueciapara.com/en/archivo-2000-09",
    siteName: "Enrique Ciapara",
    title: "Enrique Ciapara, 2000–09 Collection",
    description:
      "In this collection spanning more than ten years, the artist is presented as a skilled mediator between what he wants and what the painting wants. Learn more.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — 2000–09 Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ciapara, 2000–09 Collection",
    description:
      "Over ten years of work where Ciapara mediates between what he wants and what the painting wants.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function BlurbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
