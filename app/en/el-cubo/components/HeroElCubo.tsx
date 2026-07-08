"use client";

import { motion } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useElCuboT } from "../../../lib/i18n-elcubo";

const expo = [0.16, 1, 0.3, 1] as const;

export default function HeroElCubo() {
  const { locale } = useI18n();
  const tElCubo = useElCuboT(locale);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="/images/News/ElCubo/Fotografia intervenida por enrique ciapara parte de la exposicion de su obra trompe l´oeil.jpg"
          alt={tElCubo.hero.bgImageAlt}
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-start justify-end text-left px-6 md:px-14 lg:px-20 pb-10 md:pb-14">
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.2 }}
            className="text-[10px] tracking-[0.5em] uppercase text-white/40"
          ></motion.p>
        </div>

        <h1 className="overflow-hidden">
          <motion.span
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, ease: expo, delay: 0.35 }}
            className="block max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)] font-bold tracking-tight uppercase text-white leading-[0.95]"
          >
            {tElCubo.hero.title}
          </motion.span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.9 }}
          className="w-12 h-px bg-white/25 mt-8 origin-left"
        />
      </div>
    </section>
  );
}
