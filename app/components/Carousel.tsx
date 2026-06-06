'use client'

import { useEffect, useRef } from 'react'
import { motion, animate } from 'motion/react'

const institutions = [
  'CECUT · Tijuana',
  'Museo de Arte Baja California',
  'Centro Cultural Tijuana',
  'Galería La Caja Blanca',
  'Universidad Autónoma de B.C.',
  'Instituto de Arte de Sonora',
  'Casa de la Cultura · Mexicali',
  'Galería La Constelación',
  'Espacio Arte Contemporáneo',
  'Centro Cultural Monterrey',
  'Museo de Arte Moderno · CDMX',
  'Galería Paloma Negra',
  'Colección Orozdiaz',
  'Espacio Miró · Tarragona',
  'Casa Cultural Barcelona',
  "Fundació Espai d'Art",
  'Galería Casa de Arte',
  'Institut de Cultura · Tarragona',
]

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    const controls = animate(track, { x: [0, -totalWidth] }, {
      duration: 40,
      ease: 'linear',
      repeat: Infinity,
    })

    const wrapper = wrapperRef.current
    if (!wrapper) return

    const pause = () => controls.pause()
    const play = () => controls.play()
    wrapper.addEventListener('mouseenter', pause)
    wrapper.addEventListener('mouseleave', play)

    return () => {
      controls.stop()
      wrapper.removeEventListener('mouseenter', pause)
      wrapper.removeEventListener('mouseleave', play)
    }
  }, [])

  const items = [...institutions, ...institutions]

  return (
    <section className="py-20 bg-[#F6F2EC] overflow-hidden border-t border-b border-[#E4DFD8]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8B3A2A] mb-2">Presencia</p>
          <h2 className="text-2xl md:text-3xl font-light text-[#1A1916]">
            Colecciones e instituciones
          </h2>
        </motion.div>
      </div>

      <div ref={wrapperRef} className="relative cursor-default">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F6F2EC, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F6F2EC, transparent)' }}
        />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-0 whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {items.map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center shrink-0 px-10 py-4 border-r border-[#E4DFD8]"
              >
                <span className="text-xs tracking-[0.2em] uppercase text-[#6B6660]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
