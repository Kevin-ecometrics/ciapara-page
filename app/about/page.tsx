"use client";

import NavbarLight from "../components/NavbarLight";
import Hero from "./components/Hero";
import FirstYears from "./components/FirstYears";
import TextGallery from "./components/TextGallery";
import Carousel from "./components/Carousel";
import TextGallery2 from "./components/TextGallery2";
import TextCarousel from "./components/TextCarousel";
import TextGallery3 from "./components/TextGallery3";
import TextCarousel2 from "./components/TextCarousel2";
import CVEnriqueCiapara from "../components/CVEnriqueCiapara";
import FooterReveal from "../components/FooterReveal";

export default function About() {
  return (
    <>
      <NavbarLight />
      <Hero />
      <FirstYears />
      <TextGallery />
      <Carousel />
      <TextGallery2 />
      <TextCarousel />
      <TextGallery3 />
      <TextCarousel2 />
      <CVEnriqueCiapara />
      <FooterReveal />
    </>
  );
}
