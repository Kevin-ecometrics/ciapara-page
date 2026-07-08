"use client";

import Navbar from "../../components/Navbar";
import HeroElCubo from "./components/HeroElCubo";
import Content from "./components/Content";
import News from "../../components/News";
import Footer from "../../components/FooterReveal";

export default function ElCuboEnPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <HeroElCubo />
        <Content />
        <News />
      </div>
      <Footer />
    </>
  );
}
