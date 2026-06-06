'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`text-xs font-semibold tracking-[0.4em] uppercase transition-colors duration-500 ${
            scrolled ? 'text-[#1A1916]' : 'text-white'
          }`}
        >
          C I A P A R A
        </a>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Obras', href: '#obras' },
            { label: 'Sobre Mí', href: '#sobre-mi' },
            { label: 'Noticias', href: '#noticias' },
            { label: 'Contacto', href: '#contacto' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`underline-hover text-xs tracking-[0.18em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-[#6B6660] hover:text-[#1A1916]' : 'text-white/65 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          className={`hidden lg:block text-xs transition-colors duration-500 ${
            scrolled ? 'text-[#6B6660]' : 'text-white/50'
          }`}
        >
          contacto@ciapara.com
        </div>
      </div>
    </nav>
  )
}
