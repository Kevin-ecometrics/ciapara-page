"use client";

import NavbarObras from "../../components/NavbarObras";
import Hero from "./components/Hero2015";
import CarouselErrores from "./components/Carousel2015";
import Quote1Errores from "./components/Quote1-2015";
import GalleryErrores from "./components/Gallery2015";
import Quote2Errores from "./components/Quote2-2015";
import Footer from "../../components/FooterReveal";

export default function serie2015page() {
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
