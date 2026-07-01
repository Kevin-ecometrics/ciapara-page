"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { use2015T } from "../../../lib/i18n-2015";

const expo = [0.16, 1, 0.3, 1] as const;

export default function HeroErrores() {
  const { locale } = useI18n();
  const t2015 = use2015T(locale);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // El título se desplaza hacia abajo y se desvanece a medida que se scrollea,
  // como si quedara "atrás" justo antes de llegar a la galería.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/2015/Pieza dulce del dia de brujas acrilico sobre tela 122x 141 cm por pintor enrique ciapara.webp"
          alt={t2015.hero.bgImageAlt}
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />
      </div>

      {/* Textura de grano */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Contenido — cargado a la izquierda */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-start justify-end text-left px-6 md:px-14 lg:px-20 pb-10 md:pb-14"
      >
        {/* Etiqueta */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.2 }}
            className="text-[10px] tracking-[0.5em] uppercase text-white/40"
          >
            {t2015.hero.subtitle}
          </motion.p>
        </div>

        {/* Título */}
        <h1 className="flex flex-col items-start">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.35 }}
              className="block text-[clamp(3.5rem,12vw,11rem)] font-bold tracking-tight uppercase text-white leading-[0.88]"
            >
              {t2015.hero.title1}
            </motion.span>
          </div>
          {t2015.hero.title2 && (
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
                className="block text-[clamp(3.5rem,12vw,11rem)] font-bold tracking-tight uppercase text-white leading-[0.88]"
              >
                {t2015.hero.title2}
              </motion.span>
            </div>
          )}
        </h1>

        {/* Divisor */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.9 }}
          className="w-12 h-px bg-white/25 mt-8 origin-left"
        />
      </motion.div>
    </section>
  );
}
