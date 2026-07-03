import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Obras from "./components/Obras";
import Works from "./components/Works";
import Carousel from "./components/Carousel";
import FooterReveal from "./components/FooterReveal";
import Letters from "./components/Letters";
import News from "./components/News";

export default function Home() {
  return (
    <>
      {/* relative z-[1] apila el contenido encima del footer fijo (z-index:0). */}
      <div className="relative z-1 bg-[#F6F2EC]">
        <Navbar />
        <main>
          <Hero />
          {/* El título, nav y el inicio de About (quote) ya se revelan juntos
              dentro del iris de Hero (ver HeroReveal). Cuando el sticky de Hero
              se despega, este About (la parte con scroll-track propio) continúa
              de forma inmediata, sin solape ni desfase. */}
          <About />
          <Obras />
          <News />
        </main>
      </div>
      <FooterReveal />
    </>
  );
}
