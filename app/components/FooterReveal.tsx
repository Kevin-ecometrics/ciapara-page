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
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* News ocupa el espacio restante — se reduce conforme el footer sube */}
        <div className="flex-1 overflow-hidden min-h-0">
          <News />
        </div>

        {/* Footer sube desde abajo sin tapar News */}
        <motion.div
          className="flex-shrink-0 overflow-hidden"
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
