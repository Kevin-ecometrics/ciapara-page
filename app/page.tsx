import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Obras";
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
        {/* El título, nav y el inicio de About (quote) ya se revelan juntos
            dentro del iris de Hero (ver HeroReveal). Cuando el sticky de Hero
            se despega, este About (la parte con scroll-track propio) continúa
            de forma inmediata, sin solape ni desfase. */}
        <About />
        <Collections />
        {/* <Works />
        <Letters />
        <Carousel /> */}
        <FooterReveal />
      </main>
    </>
  );
}
