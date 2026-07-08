"use client";

import Navbar from "../components/Navbar";
import HeroElCubo from "./components/HeroElCubo";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
import Article5 from "./components/Article5";
import Article6 from "./components/Article6";
import Article7 from "./components/Article7";
import News from "../components/News";
import Footer from "../components/FooterReveal";

export default function ElCuboPage() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <HeroElCubo />
        <Article1 />
        <Article2 />
        <Article3 />
        <Article4 />
        <Article5 />
        <Article6 />
        <Article7 />
        <News />
      </div>
      <Footer />
    </>
  );
}
