'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

export const ASIDE_W = 208 // w-52 = 13rem = 208px — shared with page

const links = [
  { label: 'El Artista',   href: '/artist' },
  { label: 'Obras',        href: '/#obras' },
  { label: 'Exposiciones', href: '#' },
  { label: 'La Brigada',   href: '#' },
  { label: 'Noticias',     href: '/#noticias' },
  { label: 'Contacto',     href: '#contacto' },
]

interface Props {
  open: boolean
  onToggle: () => void
}

export default function ArtistNav({ open, onToggle }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const dark = !scrolled && !open

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 h-11 flex items-center px-4 transition-all duration-500 ${
          scrolled || open
            ? 'bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8]'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        {/* Toggle */}
        <button
          onClick={onToggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className={`w-8 h-8 flex items-center justify-start transition-colors duration-300 ${
            dark ? 'text-white' : 'text-[#1A1916]'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl leading-none select-none"
              >
                ×
              </motion.span>
            ) : (
              <motion.span
                key="burger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-[5px]"
              >
                <span className="block w-5 h-px bg-current" />
                <span className="block w-3 h-px bg-current" />
                <span className="block w-5 h-px bg-current" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Brand centrado */}
        <a
          href="/"
          className={`absolute left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.42em] uppercase transition-colors duration-300 ${
            dark ? 'text-white' : 'text-[#1A1916]'
          }`}
        >
          CIAPARA
        </a>

        {/* Links derecha */}
        <nav className="ml-auto flex gap-5">
          {['Inicio', 'Obras'].map((label) => (
            <a
              key={label}
              href={label === 'Inicio' ? '/' : '/#obras'}
              className={`text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
                dark
                  ? 'text-white/55 hover:text-white'
                  : 'text-[#6B6660] hover:text-[#1A1916]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* ── ASIDE ───────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="aside"
            initial={{ x: -ASIDE_W }}
            animate={{ x: 0 }}
            exit={{ x: -ASIDE_W }}
            transition={{ duration: 0.5, ease: expo }}
            className="fixed left-0 bottom-0 z-40 bg-[#F6F2EC] border-r border-[#E4DFD8] flex flex-col"
            style={{ top: 44, width: ASIDE_W }}
          >
            <nav className="flex flex-col pt-8 px-7">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: expo, delay: 0.06 + i * 0.05 }}
                  className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#1A1916]/70 hover:text-[#8B3A2A] py-3 border-b border-[#E4DFD8] last:border-0 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto px-7 py-6 border-t border-[#E4DFD8]">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660]">
                Tijuana, B.C. · Est. 2001
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
