"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../providers/i18nProvider";
import Link from "next/link";

const expo = [0.16, 1, 0.3, 1] as const;

const collectionsMeta = [
  {
    num: "01",
    hoverBg: "bg-[#2B2F4C]",
    img: "/images/blurb/Pieza caminata en tecnica mixta sobre tela 183x 305 cm 2008 por enrique ciapara.webp",
    imgFallback: "#2B2F4C",
    href: "/archivo-2000-09",
    hrefEn: "/en/archivo-2000-09",
  },
  {
    num: "02",
    hoverBg: "bg-[#2D3C30]",
    img: "/images/2015/Pieza sunnyday en acrilico sobre tela 122x 107 cm por artista enrique ciapara.webp",
    imgFallback: "#2D3C30",
    href: "/serie-2015",
    hrefEn: "/en/serie-2015",
  },
  {
    num: "03",
    hoverBg: "bg-[#4C2A1D]",
    img: "/images/errores/Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara 2019.webp",
    imgFallback: "#05df72",
    href: "/catalogo-de-errores",
    hrefEn: "/en/catalogo-de-errores",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function Collections() {
  const { locale, t } = useI18n();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const collections = collectionsMeta.map((meta, i) => ({
    ...meta,
    title: t.collections.items[i].title,
    desc: t.collections.items[i].description,
  }));

  // En mobile, la sección queda fija (pinned) mientras se hace scroll a
  // través de las 3 obras; cuál está activa depende del progreso de scroll,
  // no del hover (que no existe en touch).
  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile) return;
    const idx = Math.min(
      Math.floor(latest * collections.length),
      collections.length - 1,
    );
    setActiveService(collections[idx]?.num ?? null);
  });

  const sectionBg = activeService
    ? (collections.find((s) => s.num === activeService)?.hoverBg ??
      "bg-[#1A1916]")
    : "bg-[#1A1916]";

  const activeData = collections.find((s) => s.num === activeService);

  return (
    <section
      id="obras"
      ref={scrollAreaRef}
      className="relative"
      style={{ height: isMobile ? `${collections.length * 100}vh` : "auto" }}
    >
      <div
        className={`relative overflow-hidden px-6 transition-colors duration-300 ${sectionBg} ${
          isMobile
            ? "sticky top-0 h-screen flex flex-col justify-center"
            : "py-28 md:py-36"
        }`}
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
              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

              {/* Textura de grano */}
              <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
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
              href={locale === "en" ? s.hrefEn : s.href}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between mb-6 cursor-pointer">
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
                    className="text-4xl md:text-5xl lg:text-6xl text-center uppercase font-semibold tracking-[0.2em]"
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
                      className="text-sm text-white text-center leading-relaxed max-w-md"
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
      </div>
    </section>
  );
}
