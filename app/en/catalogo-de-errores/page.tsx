"use client";

import Navbar from "../../components/Navbar";
import Hero from "./components/HeroErrores";
import GalleryErrores from "./components/GalleryErrores";
import Obras from "../../components/Obras";
import Footer from "../../components/FooterReveal";

export default function ErroresPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <GalleryErrores />
      <Obras />
      <Footer />
    </>
  );
}
