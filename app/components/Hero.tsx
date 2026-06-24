"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
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
import HeroReveal from "./HeroReveal";

const expo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t, locale, setLocale } = useI18n();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  // ── Fondo
  const bgY = useTransform(progress, [0, 0.6], ["0%", "28%"]);
  const bgScale = useTransform(progress, [0, 0.6], [1, 1.14]);
  const bgBlurPx = useTransform(progress, [0, 0.5], [0, 10]);
  const bgFilter = useTransform(bgBlurPx, (v) => `blur(${v}px)`);

  // ── Resplandores
  const glowY = useTransform(progress, [0, 0.55], ["0%", "50%"]);
  const glowOpacity = useTransform(progress, [0, 0.4], [1, 0]);

  // ── Texto oscuro push-through
  const textScale = useTransform(progress, [0, 0.42], [1, 1.22]);
  const textY = useTransform(progress, [0, 0.4], ["0%", "-16%"]);
  const textOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const textBlurPx = useTransform(progress, [0, 0.36], [0, 7]);
  const textFilter = useTransform(textBlurPx, (v) => `blur(${v}px)`);

  // ── Iris: progress 0.46 → 1.0 (termina justo cuando se suelta el pin)
  const irisClip = useTransform(
    progress,
    [0.46, 1],
    ["circle(0% at 50% 100%)", "circle(150% at 50% 100%)"],
  );

  // ── Hilo de progreso
  const threadScale = useTransform(progress, [0, 1], [0, 1]);

  // ── Parallax de cursor
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const orbX = useSpring(mvX, { stiffness: 40, damping: 18 });
  const orbY = useSpring(mvY, { stiffness: 40, damping: 18 });
  const orbXInverse = useTransform(orbX, (v) => v * -0.6);
  const orbYInverse = useTransform(orbY, (v) => v * -0.6);

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

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mvX.set(((e.clientX - left) / width - 0.5) * 50);
    mvY.set(((e.clientY - top) / height - 0.5) * 50);
  }

  const darkNavRow = (
    <div className="flex items-center justify-between px-6 pt-3 border-t border-white/10">
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {heroLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleHeroNavClick(e, href)}
            className="text-xs tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
        {(["es", "en"] as Locale[]).map((l, i) => (
          <span key={l} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-white/20">/</span>}
            <button
              onClick={() => setLocale(l)}
              className={`uppercase transition-colors duration-300 cursor-pointer ${
                locale === l
                  ? "text-white font-semibold"
                  : "text-white/30 hover:text-white/60"
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
      style={{ height: "250vh" }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden bg-black"
        onMouseMove={handlePointerMove}
      >
        {/* ── Fondo ── */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: bgY,
            scale: bgScale,
            filter: bgFilter,
            transformOrigin: "center bottom",
          }}
        >
          <Image
            src="/CiaparaHeroImg.jpeg"
            alt="Ciapara Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Grano */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── Resplandores ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ y: glowY, opacity: glowOpacity }}
        >
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
        </motion.div>

        {/* ── TOP: Título + Nav versión oscura ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-10 pt-8"
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            filter: textFilter,
            transformOrigin: "left top",
          }}
        >
          <div className="overflow-hidden mb-3 px-6">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
              className="text-xs tracking-[0.35em] uppercase text-white/45"
            >
              {t.hero.place}
            </motion.p>
          </div>
          <h1 className="overflow-hidden w-full mb-4">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
              className="block font-bold tracking-[-0.02em] text-white leading-[0.88] whitespace-nowrap"
              style={{ fontSize: "clamp(2rem, 10.2vw, 20rem)" }}
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
        </motion.div>

        {/* ── BOTTOM: Divider + Subtítulo versión oscura ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 flex flex-col"
          style={{ opacity: textOpacity, filter: textFilter }}
        >
          {/* <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.95 }}
            className="w-16 h-px bg-white/25 mb-6 origin-left"
          />
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: expo, delay: 1.05 }}
              className="text-base md:text-lg text-white/55 tracking-[0.12em] uppercase font-normal"
            >
              {t.hero.subtitle}
            </motion.h2>
          </div> */}
        </motion.div>

        {/* ── Hilo de progreso ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 h-44">
          <span
            className="text-[10px] tracking-[0.3em] text-white/30 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="relative w-px flex-1 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-full bg-white/50 origin-top"
              style={{ scaleY: threadScale }}
            />
          </div>
        </div>

        {/* ── Iris overlay ── */}
        <motion.div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{ clipPath: irisClip }}
        >
          <div className="absolute inset-0 bg-[#F6F2EC] pointer-events-none" />

          {/* Título + Nav + inicio de About, ya pegados, versión clara */}
          <div className="absolute inset-0 z-10">
            <HeroReveal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
