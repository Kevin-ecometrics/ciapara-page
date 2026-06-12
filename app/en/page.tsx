import IntroAnimation from "../components/IntroAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import FooterReveal from "../components/FooterReveal";

export default function HomeEn() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <FooterReveal />
      </main>
    </>
  );
}
