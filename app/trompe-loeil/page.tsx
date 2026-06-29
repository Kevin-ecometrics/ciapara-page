"use client";

import Navbar from "../components/Navbar";
import HeroTrompe from "./components/HeroTrompe";
import GalleryTrompe from "./components/GalleryTrompe";
import Obras from "../components/Obras";
import Footer from "../components/FooterReveal";

export default function TrompeLoeilPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <HeroTrompe />
        <GalleryTrompe />
        <Obras />
      </div>
      <Footer />
    </>
  );
}
