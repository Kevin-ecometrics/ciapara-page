"use client";

import Navbar from "../../components/Navbar";
import Hero from "./components/Hero2015";
import GalleryErrores from "./components/Gallery2015";
import Obras from "../../components/Obras";
import Footer from "../../components/FooterReveal";

export default function serie2015page() {
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
