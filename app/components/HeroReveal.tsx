"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { useI18n } from "../providers/i18nProvider";
import type { Locale } from "../lib/i18n";
import { scrollToSection } from "../lib/scrollToSection";
import AboutIntro from "./AboutIntro";

export default function HeroReveal({
  progress,
  titleFontSize,
}: {
  progress: MotionValue<number>;
  titleFontSize: number | null;
}) {
  const { t, locale, setLocale } = useI18n();

  // El about-intro queda oculto hasta que el título ya esté asentado, y
  // entonces sube a su lugar con poco scroll adicional.
  const aboutY = useTransform(progress, [0.65, 0.82], ["28px", "0px"]);
  const aboutOpacity = useTransform(progress, [0.65, 0.82], [0, 1]);

  // Prensa aún no tiene un destino listo — oculto por ahora. Quitar este
  // flag cuando vuelva a estar disponible.
  const SHOW_NEWS_LINK = false;

  const aboutHref = locale === "en" ? "/en/about" : "/about";

  const heroLinks = [
    { label: t.nav.about, href: aboutHref },
    { label: t.nav.collections, href: "#obras" },
    ...(SHOW_NEWS_LINK ? [{ label: t.nav.news, href: "#news" }] : []),
    { label: t.nav.contact, href: "#contacto" },
  ];

  function handleHeroNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    // Enlaces a página completa (como /about) navegan normal, sin interceptar.
    if (!href.includes("#")) return;
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  }

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="pt-8 shrink-0">
        <p className="text-xs tracking-[0.35em] uppercase text-[#1A1916]/40 mb-3 px-6">
          {t.hero.place}
        </p>
        <h1 className="overflow-hidden w-full mb-4 px-6">
          <span
            className="block font-bold tracking-[-0.02em] text-[#1A1916] leading-[0.88] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-interstate-compressed)",
              fontSize: titleFontSize
                ? `${titleFontSize}px`
                : "clamp(2rem, 10.2vw, 20rem)",
            }}
          >
            ENRIQUE CIAPARA
          </span>
        </h1>
        <div className="flex items-center justify-between px-6 pt-3 border-t border-[#1A1916]/10">
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {heroLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleHeroNavClick(e, href)}
                className="text-xs tracking-[0.18em] uppercase text-[#1A1916]/55 hover:text-[#1A1916] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
            {(["es", "en"] as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#1A1916]/20">/</span>}
                <button
                  onClick={() => setLocale(l)}
                  className={`uppercase transition-colors duration-300 cursor-pointer ${
                    locale === l
                      ? "text-[#1A1916] font-semibold"
                      : "text-[#1A1916]/30 hover:text-[#1A1916]/60"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <motion.div style={{ y: aboutY, opacity: aboutOpacity }}>
          <AboutIntro />
        </motion.div>
      </div>
    </div>
  );
}
