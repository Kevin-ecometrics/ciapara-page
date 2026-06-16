"use client";

import { motion } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";
import { useErroresT } from "../../lib/i18n-errores";

const expo = [0.16, 1, 0.3, 1] as const;

export default function HeroErrores() {
  const { t, locale } = useI18n();
  const eT = useErroresT(locale);
  const collection = t.collections.items[0];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/errores/Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara 2019.webp"
          alt="Obra titulada Banquete en el pinar elaborada en acrílico sobre tela 152 x 429 por Enrique Ciapara 2019"
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

      {/* Contenido — centrado vertical y horizontal */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Etiqueta */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.2 }}
            className="text-[10px] tracking-[0.5em] uppercase text-white/40"
          >
            {eT.hero.subtitle}
          </motion.p>
        </div>

        {/* Título */}
        <h1 className="flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.35 }}
              className="block text-[clamp(3.5rem,12vw,11rem)] font-bold tracking-tight uppercase text-white leading-[0.88]"
            >
              {eT.hero.title1}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
              className="block text-[clamp(3.5rem,12vw,11rem)] font-bold tracking-tight uppercase text-white leading-[0.88]"
            >
              {eT.hero.title2}
            </motion.span>
          </div>
        </h1>

        {/* Divisor centrado */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.9 }}
          className="w-12 h-px bg-white/25 my-8 origin-center"
        />

        {/* Descripción */}
        <div className="overflow-hidden max-w-lg">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: expo, delay: 1.0 }}
            className="text-xs text-white/45 leading-relaxed tracking-widest uppercase"
          >
            {collection.description}
          </motion.p>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: expo, delay: 1.6 }}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-white/25 text-[10px] tracking-[0.35em] uppercase"
        >
          {eT.hero.explore}
          <div className="w-px h-8 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
