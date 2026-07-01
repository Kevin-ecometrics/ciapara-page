"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "../providers/i18nProvider";
import { useBlurbT } from "../lib/i18n-blurb";
import type { Locale } from "../lib/i18n";

const expo = [0.16, 1, 0.3, 1] as const;

export default function NavbarErrores() {
  const { locale, setLocale } = useI18n();
  const bT = useBlurbT(locale);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleBack() {
    sessionStorage.setItem("skip-intro", "1");
    const base = locale === "en" ? "/en" : locale === "fr" ? "/fr" : locale === "ca" ? "/ca" : "";
    router.push(`${base}/#obras`);
  }

  function handleBackMain() {
    sessionStorage.setItem("skip-intro", "0");
    const base = locale === "en" ? "/en" : locale === "fr" ? "/fr" : locale === "ca" ? "/ca" : "";
    router.push(`${base}/`);
  }

  const colorText = scrolled ? "text-[#1A1916]" : "text-white";
  const colorMuted = scrolled ? "text-[#6B6660]" : "text-white/50";

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
      <div className="relative mx-auto px-6 flex items-center justify-center">
        {/* Flecha de regreso — izquierda */}
        <motion.button
          onClick={handleBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: expo, delay: 0.3 }}
          whileHover={{ x: -4 }}
          className={`absolute left-6 flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer ${colorMuted} hover:${colorText}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">{bT.nav.back}</span>
        </motion.button>

        {/* Logo — centro */}
        <motion.button
          onClick={handleBackMain}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: expo, delay: 0.2 }}
          className="hover:cursor-pointer shrink-0"
        >
          <Image
            src="/logos/ecp 3.2.png"
            alt="Ciapara"
            width={80}
            height={32}
            className={`h-8 w-auto transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </motion.button>

        {/* Derecha — email + selector de idioma */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: expo, delay: 0.4 }}
          className="absolute right-6 flex items-center gap-3"
        >
          <span
            className={`hidden lg:block text-xs transition-colors duration-500 ${colorMuted}`}
          >
            Ciaenriqueciapara@gmail.com
          </span>

          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
            {(["es", "en", "fr", "ca"] as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span
                    className={`transition-colors duration-500 ${scrolled ? "text-[#6B6660]/30" : "text-white/20"}`}
                  >
                    /
                  </span>
                )}
                <button
                  onClick={() => setLocale(l)}
                  className={`uppercase transition-colors duration-300 cursor-pointer ${
                    locale === l
                      ? scrolled
                        ? "text-[#1A1916] font-semibold"
                        : "text-white font-semibold"
                      : scrolled
                        ? "text-[#6B6660]/50 hover:text-[#6B6660]"
                        : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
