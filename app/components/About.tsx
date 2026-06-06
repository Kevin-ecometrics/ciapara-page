'use client'

import { motion } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
}

const stats = [
  { num: '2001', label: 'Año de fundación' },
  { num: '25+', label: 'Años de oficio' },
  { num: 'TIJ', label: 'Tijuana, B.C.' },
  { num: 'TGN', label: 'Tarragona, ES' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 md:py-36 px-6 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: expo }}
              viewport={{ once: true, amount: 0.15 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1916] leading-[1.35]"
            >
              Al servicio de artistas, diseñadores y coleccionistas — donde la
              sensibilidad técnica y la mirada artística se encuentran.
            </motion.p>
          </div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.num}
                  variants={itemVariants}
                  className="stat-item border-t border-[#E4DFD8] pt-5"
                >
                  <p className="text-2xl font-semibold text-[#8B3A2A] mb-1 tracking-tight">
                    {s.num}
                  </p>
                  <p className="text-xs text-[#6B6660] tracking-[0.12em] uppercase">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: expo, delay: 0.15 }}
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4 text-sm text-[#6B6660] leading-relaxed"
            >
              <p>
                Enrique Ciapara es un pintor establecido en Tijuana, Baja California. Su obra
                transita entre lo abstracto y lo semi-abstracto, anclada en el paisaje norteño,
                la arquitectura espontánea de la ciudad fronteriza y los objetos cotidianos de
                la cocina.
              </p>
              <p>
                Ha vivido temporadas en Tarragona, Catalunya. Su taller de grabado lleva el
                nombre de <em>La Brigada</em>, en referencia a{' '}
                <em>La brigade de cuisine</em>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
