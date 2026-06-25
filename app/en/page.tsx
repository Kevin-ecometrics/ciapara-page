import IntroAnimation from "../components/IntroAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Obras from "../components/Obras";
import FooterReveal from "../components/FooterReveal";

export default function HomeEn() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Obras />
        <FooterReveal />
      </main>
    </>
  );
}
