import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://enriqueciapara.com"),
  title: "Descubre la semblanza y trayectoria de Enrique Ciapara",
  description:
    "Vida, influencias y exposiciones del pintor referente del arte contemporáneo en la frontera Tijuana-San Diego. Ver su evolución artística aquí.",
  keywords:
    "Enrique Ciapara, Ciapara, Arte Tijuana, Pintor tijuanense, Arte fronterizo, Grabado Tijuana, Arte Baja California, enrique ciapara exposicion trompe l oeil cecut, paisajes en transito museo pedro coronel ciapara, enrique ciapara errores exposicion 2019, obra negra centro cultural tijuana enrique ciapara, strange new world museum of contemporary art san diego ciapara, obras de enrique ciapara en el museo de arte contemporaneo de san diego, arte contemporaneo frontera tijuana san diego, generacion el nopal centenario tijuana arte",
  alternates: {
    canonical: "https://enriqueciapara.com/about",
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
  authors: [{ name: "Enrique Ciapara" }],
  publisher: "E-commetrics",
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: "https://enriqueciapara.com/about",
    siteName: "Enrique Ciapara",
    title: "Descubre la semblanza y trayectoria de Enrique Ciapara",
    description:
      "Vida, influencias y exposiciones del pintor referente del arte contemporáneo en la frontera Tijuana-San Diego. Ver su evolución artística aquí.",
    images: [
      {
        url: "https://enriqueciapara.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enrique Ciapara — Artista plástico tijuanense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descubre la semblanza y trayectoria de Enrique Ciapara",
    description:
      "Vida, influencias y exposiciones del pintor referente del arte contemporáneo en la frontera Tijuana-San Diego.",
    images: ["https://enriqueciapara.com/opengraph-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
