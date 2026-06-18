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
      "x-default": "https://enriqueciapara.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
