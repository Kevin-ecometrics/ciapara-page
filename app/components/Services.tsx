'use client'

import { motion } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const services = [
  {
    num: '01',
    title: 'Pintar',
    desc: 'Creación pictórica en óleo, acrílico y técnica mixta sobre distintos soportes. La imagen que emerge del gesto y la materia.',
  },
  {
    num: '02',
    title: 'Grabar',
    desc: 'Taller La Brigada: litografía, serigrafía, aguafuerte y monotipos. El grabado como disciplina de precisión y azar controlado.',
  },
  {
    num: '03',
    title: 'Exponer',
    desc: 'Curaduría, montaje y producción de exposiciones individuales y colectivas en galerías e instituciones culturales.',
  },
  {
    num: '04',
    title: 'Restaurar',
    desc: 'Conservación, diagnóstico e intervención de obra pictórica. Devolverle la vida y el tiempo a la pintura.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
}

export default function Services() {
  return (
    <section className="py-28 md:py-36 px-6 bg-[#1A1916]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6660] mb-3">
            Áreas de práctica
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">Lo que hacemos</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2724]"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={cardVariants}
              className="service-card bg-[#1A1916] p-8 lg:p-10 flex flex-col gap-6
                         border border-transparent hover:border-[#8B3A2A]/30
                         transition-colors duration-300 cursor-default group"
            >
              <span className="text-xs text-[#8B3A2A] tracking-[0.2em]">{s.num}</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C4622D] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B6660] leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-auto w-6 h-px bg-[#8B3A2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
