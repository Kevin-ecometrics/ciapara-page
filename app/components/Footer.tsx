'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const MARQUEE_ITEMS = [
  'Pintura', '·', 'Grabado', '·', 'Tijuana', '·', 'Est. 2001', '·',
  'Arte Contemporáneo', '·', 'Baja California', '·', 'Técnica Mixta', '·',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: expo, delay },
  }),
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  })

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const titleY = useTransform(progress, [0, 1], ['6%', '0%'])

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="relative bg-[#1A1916] text-white overflow-hidden h-full"
    >
      {/* Hero background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: titleY }}
      >
        <img
          src="/CiaparaHeroImg.jpeg"
          alt=""
          className="w-full h-full object-cover object-top scale-110"
        />
        <div className="absolute inset-0 bg-[#1A1916]/85" />
      </motion.div>

      {/* Grain texture — matches Hero */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/3 w-[700px] h-[500px] pointer-events-none z-0 opacity-[0.07]"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #8B3A2A 0%, transparent 70%)',
        }}
      />

      {/* ── LARGE TITLE — per-character clip reveal + scroll parallax ── */}
      <div className="relative z-10 pt-24 px-6 max-w-7xl mx-auto">
        <motion.div style={{ y: titleY }} className="will-change-transform">
          <div className="flex">
            {'CIAPARA'.split('').map((char, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: '105%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.0, ease: expo, delay: i * 0.05 }}
                  className="inline-block text-[clamp(4.5rem,14vw,13rem)] font-bold tracking-tight text-white leading-[0.88] select-none"
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.45 }}
          className="mt-4 mb-10 text-xs tracking-[0.35em] uppercase text-white/30"
        >
          Estudio · Tijuana, B.C. · Est. 2001
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: expo, delay: 0.35 }}
          className="w-full h-px bg-white/10 origin-left"
        />
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative z-10 py-5 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          className="flex gap-12 whitespace-nowrap w-max"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`text-[10px] tracking-[0.35em] uppercase ${
                item === '·' ? 'text-[#8B3A2A]' : 'text-white/20'
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── THREE COLUMNS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10"
        >
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.4em] uppercase text-white"
            >
              C I A P A R A
            </motion.p>
            <motion.p
              custom={0.08}
              variants={fadeUp}
              className="text-xs text-white/40 leading-relaxed max-w-xs"
            >
              Estudio de pintura y grabado establecido en Tijuana, Baja California, México.
              Desde 2001 al servicio del arte.
            </motion.p>
            <motion.div
              custom={0.16}
              variants={fadeUp}
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
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <motion.p
              custom={0.06}
              variants={fadeUp}
              className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2"
            >
              Navegación
            </motion.p>
            {['Obras', 'Sobre Mí', 'Noticias', 'Contacto'].map((link, i) => (
              <motion.a
                key={link}
                custom={0.12 + i * 0.06}
                variants={fadeUp}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: expo }}
                className="underline-hover text-sm text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <motion.p
              custom={0.1}
              variants={fadeUp}
              className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2"
            >
              Contacto
            </motion.p>
            <motion.div
              custom={0.18}
              variants={fadeUp}
              className="space-y-3 text-sm text-white/60"
            >
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
            </motion.div>
            <motion.div
              custom={0.26}
              variants={fadeUp}
              className="flex gap-5 mt-4"
            >
              {['Instagram', 'Facebook', 'LinkedIn'].map((net) => (
                <motion.a
                  key={net}
                  href="#"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: expo }}
                  className="text-xs text-white/40 underline-hover hover:text-white transition-colors duration-300"
                >
                  {net}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.0, ease: expo, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/20"
        >
          <p>© 2026 Enrique Ciapara. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors duration-300">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-white/50 transition-colors duration-300">
              Créditos
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
