'use client'

import { motion } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
}

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: expo } },
}

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#1A1916] text-white px-6 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10"
        >
          <motion.div variants={colVariants} className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-white">
              C I A P A R A
            </p>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Estudio de pintura y grabado establecido en Tijuana, Baja California, México.
              Desde 2001 al servicio del arte.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: expo, delay: 0.3 }}
              className="inline-flex items-center gap-2 border border-[#8B3A2A]/40 px-3 py-2 w-fit"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#8B3A2A]"
              />
              <span className="text-xs text-[#8B3A2A] tracking-[0.12em] uppercase">
                Taller Establecido
              </span>
            </motion.div>
          </motion.div>

          <motion.div variants={colVariants} className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2">Navegación</p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.06 }}
              className="flex flex-col gap-4"
            >
              {['Obras', 'Sobre Mí', 'Noticias', 'Contacto'].map((link) => (
                <motion.a
                  key={link}
                  variants={linkVariants}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: expo }}
                  className="underline-hover text-sm text-white/60 hover:text-white transition-colors duration-300 w-fit"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={colVariants} className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2">Contacto</p>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                <a
                  href="mailto:contacto@ciapara.com"
                  className="underline-hover hover:text-white transition-colors duration-300"
                >
                  contacto@ciapara.com
                </a>
              </p>
              <p>Tijuana, Baja California, México</p>
              <p>Tarragona, Catalunya, España</p>
            </div>
            <div className="flex gap-5 mt-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map((net) => (
                <motion.a
                  key={net}
                  href="#"
                  whileHover={{ y: -2, color: '#ffffff' }}
                  transition={{ duration: 0.25, ease: expo }}
                  className="text-xs text-white/40 underline-hover"
                >
                  {net}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/25"
        >
          <p>© 2026 Enrique Ciapara. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors duration-300">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-white/60 transition-colors duration-300">
              Créditos
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
