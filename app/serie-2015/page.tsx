"use client";

import Navbar from "../components/Navbar";
import Hero from "./components/Hero2015";
import GalleryErrores from "./components/Gallery2015";
import Obras from "../components/Obras";
import Footer from "../components/FooterReveal";

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
