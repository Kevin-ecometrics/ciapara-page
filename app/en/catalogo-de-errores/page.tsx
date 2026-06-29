"use client";

import Navbar from "../../components/Navbar";
import Hero from "./components/HeroErrores";
import GalleryErrores from "./components/GalleryErrores";
import Obras from "../../components/Obras";
import Footer from "../../components/FooterReveal";

export default function ErroresPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <Hero />
        <GalleryErrores />
        <Obras />
      </div>
      <Footer />
    </>
  );
}
