"use client";

import NavbarObras from "../../components/NavbarObras";
import Hero from "./components/HeroErrores";
import CarouselErrores from "./components/CarouselErrores";
import Quote1Errores from "./components/Quote1Errores";
import GalleryErrores from "./components/GalleryErrores";
import Quote2Errores from "./components/Quote2Errores";
import Footer from "../../components/FooterReveal";

export default function ErroresPage() {
  return (
    <>
      <NavbarObras />
      <Hero />
      <CarouselErrores />
      <Quote1Errores />
      <GalleryErrores />
      <Quote2Errores />
      <Footer />
    </>
  );
}
