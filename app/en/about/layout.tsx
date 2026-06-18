import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://enriqueciapara.com/en/about",
    languages: {
      es: "https://enriqueciapara.com/about",
      en: "https://enriqueciapara.com/en/about",
      "x-default": "https://enriqueciapara.com/about",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnAboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
