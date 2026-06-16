"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useI18n } from "../providers/i18nProvider";
import Link from "next/link";

const expo = [0.16, 1, 0.3, 1] as const;

const collectionsMeta = [
  {
    num: "01",
    hoverBg: "bg-[#4C2A1D]",
    img: "/service-pintar.jpg",
    imgFallback: "#6B3020",
    href: "/errores",
  },
  {
    num: "02",
    hoverBg: "bg-[#2D3C30]",
    img: "/service-grabar.jpg",
    imgFallback: "#2D3C30",
    href: "/2015",
  },
  {
    num: "03",
    hoverBg: "bg-[#2B2F4C]",
    img: "/service-exponer.jpg",
    imgFallback: "#2B2F4C",
    href: "/blurb",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function Collections() {
  const { t } = useI18n();
  const [activeService, setActiveService] = useState<string | null>(null);

  const collections = collectionsMeta.map((meta, i) => ({
    ...meta,
    title: t.collections.items[i].title,
    desc: t.collections.items[i].description,
  }));

  const sectionBg = activeService
    ? (collections.find((s) => s.num === activeService)?.hoverBg ??
      "bg-[#1A1916]")
    : "bg-[#1A1916]";

  const activeData = collections.find((s) => s.num === activeService);

  return (
    <section
      id="collections"
      className={`relative overflow-hidden py-28 md:py-36 px-6 transition-colors duration-300 ${sectionBg}`}
    >
      {/* Imagen full-section — se revela desde el centro hacia afuera */}
      <AnimatePresence>
        {activeData && (
          <motion.figure
            key={activeData.num}
            className="absolute inset-0 pointer-events-none"
            initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{
              clipPath: "inset(50% 50% 50% 50%)",
              transition: { duration: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: activeData.imgFallback }}
            />
            <img
              src={activeData.img}
              alt={activeData.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.figure>
        )}
      </AnimatePresence>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 mx-auto text-white">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 leading-[1.15] max-w-5xl uppercase indent-20 md:indent-56">
          "{t.collections.quoteBold}
        </h3>
        <h4 className="leading-relaxed max-w-xl md:text-lg lg:text-xl mb-6 font-normal">
          {t.collections.quote}"
        </h4>
        <div className="text-sm leading-relaxed max-w-xl mb-12 ml-2">
          <p>
            - {t.collections.speaker}
            <span>({t.collections.date})</span>
          </p>
        </div>

        {collections.map((s) => (
          <Link
            key={s.num}
            className="mb-6 group transition-colors duration-300"
            onMouseEnter={() => setActiveService(s.num)}
            onMouseLeave={() => setActiveService(null)}
            href={s.href}
          >
            <div className="flex flex-row items-center justify-between mb-6 cursor-pointer">
              <div className="overflow-hidden py-1">
                <motion.h2
                  animate={
                    activeService === s.num
                      ? { y: ["0%", "100%", "-100%", "0%"] }
                      : { y: "0%" }
                  }
                  transition={
                    activeService === s.num
                      ? {
                          duration: 0.52,
                          times: [0, 0.44, 0.45, 1],
                          ease: ["easeIn", "linear", "easeOut"],
                        }
                      : { duration: 0 }
                  }
                  className="text-4xl md:text-5xl lg:text-6xl uppercase font-semibold tracking-[0.2em]"
                >
                  {s.title ?? ""}
                </motion.h2>
              </div>
              <AnimatePresence>
                {activeService === s.num && (
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, ease: expo }}
                    className="text-sm text-white leading-relaxed max-w-md"
                  >
                    {s.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <hr className="flex-1 border-t border-white/40" />
          </Link>
        ))}
      </div>
    </section>
  );
}
