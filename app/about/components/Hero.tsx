"use client";

import { motion } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative">
      <div className="max-w-xl mx-auto text-center px-6 pb-24 pt-34">
        <h1 className="overflow-hidden text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 leading-[1.15] md:max-w-3xl lg:max-w-7xl text-[#1A1916]">
          <motion.span
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
            className="block"
          >
            {t.aboutBio.hero.title}
          </motion.span>
        </h1>
      </div>
      <figure className="relative h-screen md:h-[70vh] w-full overflow-hidden">
        <img
          src="/images/about/enrique ciapara en su estudio en la ciudad de tijuana.webp"
          alt="Artista Enrique Ciapara maniobrando un sillón en su estudio en la ciudad de Tijuana"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-transparent" />
      </figure>
    </section>
  );
}
