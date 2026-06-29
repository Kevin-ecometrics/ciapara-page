import IntroAnimation from "../components/IntroAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Obras from "../components/Obras";
import News from "../components/News";
import FooterReveal from "../components/FooterReveal";
import Letters from "../components/Letters";

export default function HomeEn() {
  return (
    <>
      <div className="relative z-1 bg-[#F6F2EC]">
        <IntroAnimation />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Obras />
          <News />
        </main>
      </div>
      <FooterReveal />
    </>
  );
}
