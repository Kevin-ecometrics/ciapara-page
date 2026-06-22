"use client";

import IntroSerie2015 from "./components/IntroSerie2015";
import NavbarObras from "../../components/NavbarObras";
import Hero from "./components/Hero2015";
import GalleryErrores from "./components/Gallery2015";
import Footer from "../../components/FooterReveal";

export default function serie2015page() {
  return (
    <>
      <IntroSerie2015 />
      <NavbarObras />
      <Hero />
      <GalleryErrores />
      <Footer />
    </>
  );
}
