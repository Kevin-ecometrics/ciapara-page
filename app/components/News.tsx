'use client'

import { motion } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const news = [
  {
    date: 'Marzo 2026',
    tag: 'Nueva serie',
    title: 'Arquitecturas Efímeras',
    desc: 'Una nueva serie de óleos sobre la construcción informal y el paisaje urbano de la zona norte de Tijuana. Presentación en el estudio durante abril.',
  },
  {
    date: 'Enero 2026',
    tag: 'Exposición',
    title: 'La Brigada presenta en CECUT',
    desc: 'El taller de grabado La Brigada presenta una muestra colectiva de obra gráfica en el Centro Cultural Tijuana. Estampas sobre ciudad y frontera.',
  },
  {
    date: 'Septiembre 2025',
    tag: 'Residencia',
    title: 'Tarragona 2025',
    desc: 'Temporada de trabajo en Tarragona, Catalunya. Nuevas piezas surgidas del diálogo entre la arquitectura mediterránea y la memoria fronteriza.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
}

export default function News() {
  return (
    <section id="noticias" className="py-28 md:py-36 px-6 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8B3A2A] mb-2">Actualidad</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1916]">Noticias</h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {news.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="news-item border-t border-[#E4DFD8] pt-8 flex flex-col gap-4 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.18em] uppercase text-[#8B3A2A]">
                  {item.tag}
                </span>
                <span className="text-xs text-[#6B6660]">{item.date}</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A1916] group-hover:text-[#8B3A2A] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6660] leading-relaxed">{item.desc}</p>
              <div className="mt-auto pt-4">
                <span className="underline-hover text-xs tracking-[0.15em] uppercase text-[#1A1916]">
                  Leer más
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
