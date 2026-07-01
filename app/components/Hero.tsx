"use client";

import { useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";
import { useI18n } from "../providers/i18nProvider";
import type { Locale } from "../lib/i18n";
import { scrollToSection } from "../lib/scrollToSection";
import { useFitText } from "../lib/useFitText";
import { useCoverFill } from "../lib/useCoverFill";
import HeroReveal from "./HeroReveal";
import MobileMenu from "./MobileMenu";

const expo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const HeroColor = "/images/HeroColor.jpeg";

  const { t, locale, setLocale } = useI18n();
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    containerRef: titleRef,
    textRef: titleTextRef,
    fontSize: titleFontSize,
  } = useFitText<HTMLHeadingElement, HTMLSpanElement>();
  const colorFill = useCoverFill(HeroColor, bgRef, titleRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  const irisClip = useTransform(
    progress,
    [0, 1],
    ["circle(0% at 50% 100%)", "circle(150% at 50% 100%)"],
  );

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const orbX = useSpring(mvX, { stiffness: 40, damping: 18 });
  const orbY = useSpring(mvY, { stiffness: 40, damping: 18 });
  const orbXInverse = useTransform(orbX, (v) => v * -0.6);
  const orbYInverse = useTransform(orbY, (v) => v * -0.6);

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

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mvX.set(((e.clientX - left) / width - 0.5) * 50);
    mvY.set(((e.clientY - top) / height - 0.5) * 50);
  }

  const darkNavRow = (
    <div className="flex items-center justify-between px-6 pt-3 border-t border-white/10">
      {/* Izquierda: MENU (mobile) + links (desktop) */}
      <div className="flex items-center gap-3 md:gap-8 lg:gap-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 hover:text-white transition-colors duration-300"
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
              className="text-xs tracking-[0.18em] uppercase text-white hover:font-bold transition-colors duration-300"
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
            {i > 0 && <span className="text-white">/</span>}
            <button
              onClick={() => setLocale(l)}
              className={`uppercase transition-colors duration-300 cursor-pointer ${
                locale === l
                  ? "text-white font-semibold"
                  : "text-white hover:font-bold"
              }`}
            >
              {l}
            </button>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative z-10"
      style={{ height: "200vh" }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden bg-black"
        onMouseMove={handlePointerMove}
      >
        {/* ── Fondo ── */}
        <div ref={bgRef} className="absolute inset-0 grayscale">
          <img
            src={HeroColor}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Grano */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── Resplandores ── */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              x: orbX,
              y: orbY,
              backgroundImage:
                "radial-gradient(ellipse 60% 50% at 25% 45%, #8B3A2A30 0%, transparent 70%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              x: orbXInverse,
              y: orbYInverse,
              backgroundImage:
                "radial-gradient(ellipse 40% 60% at 75% 55%, #4a2a1a24 0%, transparent 60%)",
            }}
          />
        </div>

        {/* ── TOP: Título + Nav versión oscura ── */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-8">
          <div className="overflow-hidden mb-3 px-6">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
              className="text-xs tracking-[0.35em] uppercase text-white"
            >
              {t.hero.place}
            </motion.p>
          </div>
          <h1
            ref={titleRef}
            className="overflow-hidden w-full mb-4 px-6"
            style={{
              fontSize: titleFontSize
                ? `${titleFontSize}px`
                : "clamp(2rem, 10.2vw, 20rem)",
            }}
          >
            <motion.span
              ref={titleTextRef}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
              className="block font-bold tracking-[-0.02em] leading-[0.88] whitespace-nowrap bg-clip-text bg-no-repeat text-transparent"
              style={{
                fontFamily: "var(--font-interstate-compressed)",
                backgroundImage: `url(${HeroColor})`,
                backgroundSize: colorFill?.backgroundSize ?? "cover",
                backgroundPosition: colorFill?.backgroundPosition ?? "center",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              ENRIQUE CIAPARA
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: expo, delay: 1.0 }}
          >
            {darkNavRow}
          </motion.div>
        </div>

        {/* ── BOTTOM: scroll indicator ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: expo, delay: 1.1 }}
            className="flex justify-center"
          >
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
              className="text-[10px] tracking-[0.3em] text-white uppercase"
            >
              {t.hero.scroller}
            </motion.span>
          </motion.div>
        </div>

        {/* ── Iris overlay ── */}
        <motion.div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{ clipPath: irisClip }}
        >
          <div className="absolute inset-0 bg-[#F6F2EC] pointer-events-none" />

          <div className="absolute inset-0 z-10">
            <HeroReveal
              progress={progress}
              titleFontSize={titleFontSize}
              onOpenMenu={() => setMenuOpen(true)}
            />
          </div>
        </motion.div>
      </div>

      {/* MobileMenu fuera del clip-path para que no quede recortado */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={heroLinks}
        locale={locale}
        setLocale={setLocale}
        onLinkClick={handleHeroNavClick}
      />
    </section>
  );
}
