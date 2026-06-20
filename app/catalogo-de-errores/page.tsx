"use client";

import IntroErrores from "./components/IntroErrores";
import NavbarObras from "../components/NavbarObras";
import Hero from "./components/HeroErrores";
import GalleryErrores from "./components/GalleryErrores";
import Footer from "../components/FooterReveal";

export default function ErroresPage() {
  return (
    <>
      <IntroErrores />
      <NavbarObras />
      <Hero />
      <GalleryErrores />
      <Footer />
    </>
  );
}
