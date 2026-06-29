"use client";

import Navbar from "../../components/Navbar";
import Hero from "./components/HeroArchivo00_09";
import GalleryArchivo00_09 from "./components/GalleryArchivo00_09";
import Obras from "../../components/Obras";
import Footer from "../../components/FooterReveal";

export default function ErroresPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <Hero />
        <GalleryArchivo00_09 />
        <Obras />
      </div>
      <Footer />
    </>
  );
}
