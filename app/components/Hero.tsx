'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  // Un solo scrollYProgress sobre el contenedor alto (250vh)
  // offset 'end end' → progreso 0→1 sobre los 150vh de scroll disponibles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Parallax y efectos del hero (activos en la primera mitad del scroll)
  const bgY = useTransform(scrollYProgress, [0, 0.55], ['0%', '35%'])
  const bgScale = useTransform(scrollYProgress, [0, 0.55], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 0.38], ['0%', '-12%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0])

  // Overlay blanco: altura crece de 0% a 100% desde el bottom
  const whiteHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    // Contenedor de 250vh — da "recorrido" al scroll para que el sticky dure
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '250vh' }}
    >
      {/* Sticky viewport — se queda fijo mientras el scroll avanza */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#1a1412]">

        {/* ── Parallax background ── */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: bgY,
            scale: bgScale,
            transformOrigin: 'center bottom',
            background:
              'linear-gradient(150deg, #1a1412 0%, #2d1a0e 28%, #3d2215 52%, #1e1512 76%, #120e0c 100%)',
          }}
        >
          {/* Painterly glow overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 60% 50% at 25% 45%, #8B3A2A30 0%, transparent 70%),' +
                'radial-gradient(ellipse 40% 60% at 75% 55%, #4a2a1a24 0%, transparent 60%)',
            }}
          />
        </motion.div>


        {/* ── Text content ── */}
        <motion.div
          className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20"
          style={{ y: textY, opacity: textOpacity }}
        >
          {/* Label — clip reveal */}
          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
              className="text-xs tracking-[0.35em] uppercase text-white/45"
            >
              Estudio · Tijuana, B.C. · Est. 2001
            </motion.p>
          </div>

          {/* Heading — two lines with staggered clip reveal */}
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
              className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-white leading-[0.9]"
            >
              ENRIQUE
            </motion.span>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.65 }}
              className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-white leading-[0.9]"
            >
              CIAPARA
            </motion.span>
          </div>

          {/* Divider — expand from left */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.95 }}
            className="w-16 h-px bg-white/25 mb-8 origin-left"
          />

          {/* Subtitle — clip reveal */}
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: expo, delay: 1.05 }}
              className="text-base md:text-lg text-white/55 tracking-[0.12em] uppercase"
            >
              Pintor contemporáneo
            </motion.p>
          </div>

          {/* Description — clip reveal */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: expo, delay: 1.2 }}
              className="max-w-md text-sm text-white/40 leading-relaxed"
            >
              Arte que transita entre lo abstracto y lo figurativo, anclado en el paisaje
              fronterizo, la arquitectura espontánea de Tijuana y los objetos cotidianos de la
              cocina.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: expo, delay: 1.75 }}
            className="mt-20 flex items-center gap-4 text-white/25 text-xs tracking-[0.25em] uppercase"
          >
            <div className="w-10 h-px bg-white/25" />
            Desplazar
          </motion.div>
        </motion.div>

        {/* ── Overlay blanco anclado al bottom, crece hacia arriba ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-white z-20 pointer-events-none"
          style={{ height: whiteHeight }}
        />

      </div>
    </section>
  )
}
