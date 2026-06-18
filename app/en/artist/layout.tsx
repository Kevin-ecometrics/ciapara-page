import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://enriqueciapara.com/en/artist",
    languages: {
      es: "https://enriqueciapara.com/artist",
      en: "https://enriqueciapara.com/en/artist",
      "x-default": "https://enriqueciapara.com/artist",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnArtistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
