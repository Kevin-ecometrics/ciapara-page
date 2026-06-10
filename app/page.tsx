import IntroAnimation from './Components/IntroAnimation'
import Navbar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Works from './Components/Works'
import Carousel from './Components/Carousel'
import FooterReveal from './Components/FooterReveal'
import Letters from './Components/Letters'

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
