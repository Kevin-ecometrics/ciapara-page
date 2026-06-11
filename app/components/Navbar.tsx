"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Obras", href: "#obras" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: expo, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className=" mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ letterSpacing: "0.5em" }}
          transition={{ duration: 0.4, ease: expo }}
          className={`text-xs font-semibold tracking-[0.4em] uppercase transition-colors duration-500 ${
            scrolled ? "text-[#1A1916]" : "text-white"
          }`}
        >
          C I A P A R A
        </motion.a>

        <div
          className="hidden md:flex items-center gap-10"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              onMouseEnter={() => setHovered(label)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: expo, delay: 0.3 + i * 0.06 }}
              className={`relative text-xs tracking-[0.18em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-[#6B6660] hover:text-[#1A1916]"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {label}
              {hovered === label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-current"
                  transition={{ duration: 0.3, ease: expo }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: expo, delay: 0.6 }}
          className={`hidden lg:block text-xs transition-colors duration-500 ${
            scrolled ? "text-[#6B6660]" : "text-white/50"
          }`}
        >
          contacto@ciapara.com
        </motion.div>
      </div>
    </motion.nav>
  );
}
