"use client";

import Navbar from "../components/Navbar";
import HeroVanitas from "./components/HeroVanitas";
import GalleryVanitas from "./components/GalleryVanitas";
import Obras from "../components/Obras";
import Footer from "../components/FooterReveal";

export default function VanitasPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <HeroVanitas />
        <GalleryVanitas />
        <Obras />
      </div>
      <Footer />
    </>
  );
}
