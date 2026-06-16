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
        <div className="relative z-30 bg-[#F6F2EC]" style={{ marginTop: "calc(-100vh + 300px)" }}>
          <About />
        </div>
        <Collections />
        <FooterReveal />
      </main>
    </>
  );
}
