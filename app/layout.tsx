import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Open_Sans} from "next/font/google";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const interstate = localFont({
  variable: "--font-interstate",
  src: [
    {
      path: "../public/interstate/interstate-light-cond-58b64220b1490.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-light-italic-58b64147957e5.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/interstate/interstate-regular-comp-58b641cc0aca1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-regular-italic-58b641ecad88f.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/interstate/interstate-bold-cond-58b64162258ca.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/interstate/interstate-black-cond-58b642507872b.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enrique Ciapara — La alegría de vivir",
  description: 'Descubre "La alegría de vivir", una obra del pintor Enrique Ciapara, artista de Tijuana, Baja California. Explora su inspiración, técnica y significado.',
  keywords: "Enrique Ciapara, La alegría de vivir, pintura mexicana, arte contemporáneo, pintor de Tijuana, Baja California, arte mexicano",
  alternates: {
    canonical: "https://ciapara-mvp.vercel.app/",
  },
  robots: {    index: true,
    follow: true,
  },
  authors: [ {name: "Enrique Ciapara"} ],
  publisher: "E-Commetrics",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${interstate.variable} ${openSans.className} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
