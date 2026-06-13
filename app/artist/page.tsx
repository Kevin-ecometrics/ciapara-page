'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import ArtistNav, { ASIDE_W } from '../components/ArtistNav'
import Footer from '../components/Footer'
import { useI18n } from '../providers/i18nProvider'
import { useArtistT } from '../lib/i18n-artist'

const expo = [0.16, 1, 0.3, 1] as const

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: expo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ArtistPage() {
  const [asideOpen, setAsideOpen] = useState(false)
  const { locale } = useI18n()
  const t = useArtistT(locale)

  return (
    <>
      <ArtistNav open={asideOpen} onToggle={() => setAsideOpen(v => !v)} />

      <motion.div
        animate={{ marginLeft: asideOpen ? ASIDE_W : 0 }}
        transition={{ duration: 0.5, ease: expo }}
      >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: expo }}
          className="absolute inset-0"
        >
          <img
            src="/CiaparaHeroImg.jpeg"
            alt="Enrique Ciapara"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#1A1916]/55" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN }}
        />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
                className="text-xs tracking-[0.45em] uppercase text-white/45"
              >
                {t.hero.label}
              </motion.p>
            </div>
            <h1>
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
                className="block text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-tight text-white leading-[0.9]"
              >
                ENRIQUE
              </motion.span>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.65 }}
                className="block text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-tight text-white leading-[0.9]"
              >
                CIAPARA
              </motion.span>
            </div>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.95 }}
              className="w-20 h-px bg-[#8B3A2A] origin-left"
            />
          </div>
        </div>
      </section>

      {/* ── OPENING STATEMENT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#F6F2EC] border-b border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl lg:text-[2.4rem] font-bold leading-[1.18] max-w-5xl text-[#1A1916] uppercase">
              {t.opening}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED IMAGE ───────────────────────────────────── */}
      <section className="bg-[#F6F2EC] px-6 md:px-10 pb-0">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.0, ease: expo }}
                src="/CiaparaHeroImg.jpeg"
                alt="Enrique Ciapara en su taller"
                className="w-full max-h-[70vh] object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B6660] tracking-[0.12em] uppercase">
              {t.imageCaption1}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BIOGRAPHY NARRATIVE ──────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio.p1}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio.p2}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">{t.bio.formacionLabel}</p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio.p3}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio.p4}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#1A1916] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[700px] h-[450px] pointer-events-none opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #8B3A2A 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="block text-5xl text-[#8B3A2A] font-bold leading-none mb-6 select-none">&ldquo;</span>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-[1.5] mb-8">
                {t.pullQuote.text}
              </blockquote>
              <p className="text-xs tracking-[0.35em] uppercase text-white/30">
                {t.pullQuote.attribution}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BIOGRAPHY NARRATIVE CONT. ────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">{t.bio2.brigadaLabel}</p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio2.p5}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio2.p6}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">{t.bio2.tarragonaLabel}</p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio2.p7}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio2.p8}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── INLINE IMAGE ─────────────────────────────────────── */}
      <section className="bg-[#F6F2EC] px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.0, ease: expo }}
                src="/CiaparaHeroImg.jpeg"
                alt="Obra de Enrique Ciapara"
                className="w-full max-h-[60vh] object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B6660] tracking-[0.12em] uppercase">
              {t.imageCaption2}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── NARRATIVE FINAL ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC] border-t border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">{t.bio3.actualLabel}</p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">{t.bio3.p9}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-12">{t.bio3.p10}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <a
                href="mailto:Ciaenriqueciapara@gmail.com"
                className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#1A1916] border-b border-[#1A1916] pb-1 hover:text-[#8B3A2A] hover:border-[#8B3A2A] transition-colors duration-300"
              >
                {t.bio3.contact}
                <svg className="w-3 h-3" viewBox="0 0 640 640" fill="currentColor">
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />

      </motion.div>
    </>
  )
}
