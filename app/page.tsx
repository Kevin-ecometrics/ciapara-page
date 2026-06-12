import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import Works from "./components/Works";
import Carousel from "./components/Carousel";
import FooterReveal from "./components/FooterReveal";
import Letters from "./components/Letters";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Works />
        <Letters />
        <Carousel />
        <FooterReveal />
      </main>
    </>
  );
}
