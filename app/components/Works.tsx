'use client'

import { motion } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const works = [
  {
    title: 'Paisaje Fronterizo',
    year: '2023',
    medium: 'Óleo sobre tela',
    gradient: 'linear-gradient(145deg, #7a2e1e 0%, #c4562a 40%, #e8885a 70%, #7a2e1e 100%)',
  },
  {
    title: 'Nocturno #4',
    year: '2022',
    medium: 'Acrílico sobre tela',
    gradient: 'linear-gradient(145deg, #14213d 0%, #2d4a8a 45%, #1a3060 75%, #0d1629 100%)',
  },
  {
    title: 'La Cocina III',
    year: '2024',
    medium: 'Técnica mixta',
    gradient: 'linear-gradient(145deg, #3a4c2e 0%, #5e7e48 40%, #82a066 65%, #3a4c2e 100%)',
  },
  {
    title: 'Luz Ocre',
    year: '2023',
    medium: 'Óleo sobre madera',
    gradient: 'linear-gradient(145deg, #8a6018 0%, #c49030 45%, #d4aa50 70%, #8a6018 100%)',
  },
  {
    title: 'Vino I',
    year: '2021',
    medium: 'Óleo sobre tela',
    gradient: 'linear-gradient(145deg, #4e1626 0%, #7e2440 45%, #9a3255 70%, #3a0e1c 100%)',
  },
  {
    title: 'Grafito y Cal',
    year: '2024',
    medium: 'Acrílico y grafito',
    gradient: 'linear-gradient(145deg, #222226 0%, #424248 40%, #585860 65%, #1e1e22 100%)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: expo } },
}

export default function Works() {
  return (
    <section id="obras" className="py-28 md:py-36 px-6 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8B3A2A] mb-2">
              Selección
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1916]">
              Obras recientes
            </h2>
          </div>
          <a
            href="#contacto"
            className="underline-hover text-xs tracking-[0.15em] uppercase text-[#6B6660] hover:text-[#1A1916] transition-colors self-end"
          >
            Ver todo el catálogo
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {works.map((work) => (
            <motion.div
              key={work.title}
              variants={cardVariants}
              className="work-card group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full" style={{ background: work.gradient }} />

              <div className="work-overlay absolute inset-0 bg-[#1A1916]/70 opacity-0 transition-opacity duration-400 flex flex-col justify-end p-6">
                <div
                  className="work-title transition-transform duration-400"
                  style={{ transform: 'translateY(1rem)' }}
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1">
                    {work.medium}
                  </p>
                  <h3 className="text-white font-medium text-lg">{work.title}</h3>
                  <p className="text-white/40 text-sm">{work.year}</p>
                </div>
              </div>

              <div className="p-4 border-t border-[#E4DFD8] flex justify-between items-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-sm text-[#1A1916] font-medium">{work.title}</span>
                <span className="text-xs text-[#6B6660]">{work.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
