'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import News from './News'
import Footer from './Footer'

export default function FooterReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const footerInnerRef = useRef<HTMLDivElement>(null)
  const [footerH, setFooterH] = useState(600)

  // Mide el alto real del footer después del primer render
  useEffect(() => {
    if (footerInnerRef.current) {
      setFooterH(footerInnerRef.current.offsetHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Sube solo hasta el alto natural del footer, no hasta el 100% del viewport
  const footerHeight = useTransform(scrollYProgress, [0, 1], [0, footerH])

  return (
    // Scroll distance = footerH px → la animación dura exactamente ese recorrido
    <div ref={containerRef} style={{ height: `calc(100vh + ${footerH}px)` }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* News fijo en el fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <News />
        </div>

        {/* Footer sube desde el bottom hasta su altura natural */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 overflow-hidden z-20"
          style={{ height: footerHeight }}
        >
          <div ref={footerInnerRef}>
            <Footer />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
