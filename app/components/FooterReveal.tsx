'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import News from './News'
import Footer from './Footer'

export default function FooterReveal() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // News sube de 0 a -100% de su propia altura → se va por arriba
  const newsY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    /*
      200vh → 100vh de scroll real para completar la animación.
      Footer queda fijo detrás (z-0).
      News arranca encima (z-10) y se levanta conforme se scrollea.
    */
    <div ref={containerRef} className="relative" style={{ height: '200dvh' }}>

      {/* Footer: siempre visible detrás, sticky al top */}
      <div className="sticky top-0 overflow-hidden" style={{ zIndex: 0, height: '100dvh' }}>
        <Footer />
      </div>

      {/* News: encima del footer, sticky al top, se levanta al hacer scroll */}
      <motion.div
        className="sticky overflow-hidden"
        style={{ top: 0, zIndex: 10, marginTop: '-100vh', height: '100dvh', y: newsY }}
      >
        <News />
      </motion.div>

    </div>
  )
}
