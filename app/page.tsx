import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Carousel from './components/Carousel'
import FooterReveal from './components/FooterReveal'
import Letters from './components/Letters'

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Letters />
        <Carousel />
        <FooterReveal />
      </main>
    </>
  )
}
