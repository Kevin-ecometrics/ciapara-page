"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { useI18n } from "../providers/i18nProvider";
import type { Locale } from "../lib/i18n";
import { scrollToSection } from "../lib/scrollToSection";
import AboutIntro from "./AboutIntro";

export default function HeroReveal({
  progress,
  onOpenMenu,
}: {
  progress: MotionValue<number>;
  onOpenMenu: () => void;
}) {
  const { t, locale, setLocale } = useI18n();

  const aboutY = useTransform(progress, [0.65, 0.82], ["28px", "0px"]);
  const aboutOpacity = useTransform(progress, [0.65, 0.82], [0, 1]);

  const SHOW_NEWS_LINK = true;
  const aboutHref =
    locale === "en"
      ? "/en/about"
      : locale === "fr"
      ? "/fr/about"
      : locale === "ca"
      ? "/ca/about"
      : "/about";

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
          <img
            src="/logos/ecp 2.png"
            alt="Enrique Ciapara"
            className="block w-full h-auto select-none"
            draggable={false}
          />
        </h1>

        <div className="flex items-center justify-between px-6 pt-3 border-t border-[#1A1916]/10">
          {/* Izquierda: MENU (mobile) + links (desktop) */}
          <div className="flex items-center gap-3 md:gap-8 lg:gap-10">
            <button
              onClick={onOpenMenu}
              className="md:hidden flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-[#1A1916]/60 hover:text-[#1A1916] transition-colors duration-300"
            >
              Menu
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M0 1h12M0 5h12M0 9h12" />
              </svg>
            </button>
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
          </div>

          {/* Derecha: idiomas */}
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
            {(["es", "en", "fr", "ca"] as Locale[]).map((l, i) => (
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
