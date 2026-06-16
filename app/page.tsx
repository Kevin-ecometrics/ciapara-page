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
        {/* About sube desde abajo sobre el hero. El tope es el título+nav fijo (z-40).
            margin-top negativo hace que About empiece a asomarse durante los últimos
            100vh del hero. bg-[#F6F2EC] coincide con el iris para transición suave. */}
        <div className="relative z-30 bg-[#F6F2EC]" style={{ marginTop: "calc(-100vh + 300px)" }}>
          <About />
        </div>
        <Collections />
        {/* <Works />
        <Letters />
        <Carousel /> */}
        <FooterReveal />
      </main>
    </>
  );
}
