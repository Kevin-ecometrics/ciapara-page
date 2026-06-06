import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Carousel from './components/Carousel'
import FooterReveal from './components/FooterReveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Carousel />
        <FooterReveal />
      </main>
    </>
  )
}
