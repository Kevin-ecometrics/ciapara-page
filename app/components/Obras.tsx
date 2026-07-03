"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "../providers/i18nProvider";
import Link from "next/link";

const expo = [0.16, 1, 0.3, 1] as const;

const collectionsMeta = [
  {
    num: "01",
    hoverBg: "bg-[#4C2A1D]",
    img: "/images/errores/Pieza 9 Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara 2019.jpeg",
    imgFallback: "#4C2A1D",
    href: "/catalogo-de-errores",
    hrefEn: "/en/catalogo-de-errores",
    hrefFr: "/fr/catalogo-de-errores",
    hrefCa: "/ca/catalogo-de-errores",
    disabled: false,
    noLink: false,
    hidden: false,
  },
  {
    num: "02",
    hoverBg: "bg-[#3B3028]",
    img: "/images/Vanitas/Portada Vanitas.jpg",
    imgFallback: "#3B3028",
    href: "",
    hrefEn: "",
    hrefFr: "",
    hrefCa: "",
    disabled: false,
    noLink: true,
    hidden: false,
  },
  {
    num: "03",
    hoverBg: "bg-[#2D3C30]",
    img: "/images/2015/cover 2015.webp",
    imgFallback: "#2D3C30",
    href: "/2015",
    hrefEn: "/en/2015",
    hrefFr: "/fr/2015",
    hrefCa: "/ca/2015",
    disabled: false,
    noLink: false,
    hidden: false,
  },
  {
    num: "04",
    hoverBg: "bg-[#2C3540]",
    img: "/images/about/Sala de exposiciones el cubo donde se expuso el trabajo del artista mexicano enrique ciapara.webp",
    imgFallback: "#2C3540",
    href: "/trompe-loeil",
    hrefEn: "/en/trompe-loeil",
    hrefFr: "/fr/trompe-loeil",
    hrefCa: "/ca/trompe-loeil",
    disabled: false,
    noLink: false,
    hidden: false,
  },
  {
    num: "05",
    hoverBg: "bg-[#2A2A2A]",
    img: "",
    imgFallback: "#2A2A2A",
    href: "/Trompe-L'oeil",
    hrefEn: "",
    hrefFr: "",
    hrefCa: "",
    disabled: false,
    noLink: false,
    hidden: true,
  },
  {
    num: "06",
    hoverBg: "bg-[#2B2F4C]",
    img: "/images/blurb/Pieza caminata en tecnica mixta sobre tela 183x 305 cm 2008 por enrique ciapara.jpg",
    imgFallback: "#2B2F4C",
    href: "/archivo-2000-09",
    hrefEn: "/en/archivo-2000-09",
    hrefFr: "/fr/archivo-2000-09",
    hrefCa: "/ca/archivo-2000-09",
    disabled: false,
    noLink: false,
    hidden: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function Collections() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // En la página de una obra, no mostrarla entre las opciones — evita que
  // el listado se enlace a la página en la que ya estás.
  const normalizedPath =
    pathname.replace(/^\/(en|fr|ca)(?=\/|$)/, "").replace(/\/$/, "") || "/";
  const isHome = normalizedPath === "/";

  const collections = collectionsMeta
    .map((meta, i) => ({
      ...meta,
      title: t.collections.items[i].title,
      desc: t.collections.items[i].description,
    }))
    .filter((s) => !s.hidden && s.href !== normalizedPath);

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

  return (
    <section
      id="obras"
      ref={scrollAreaRef}
      className="relative"
      style={{ height: isMobile ? `${collections.length * 100}vh` : "auto" }}
    >
      <div
        className={`relative overflow-hidden px-6 transition-colors duration-300 bg-[#1A1916] ${
          isMobile
            ? "sticky top-0 h-screen flex flex-col justify-center"
            : "py-28 md:py-36"
        }`}
      >
        {/* Fondo por defecto — visible cuando ninguna obra está activa */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="."
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1916]/85" />
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Imágenes de cada obra — siempre montadas, se revelan desde el
            centro hacia afuera por encima de la imagen anterior/del fondo */}
        {collections.map((s) => (
          <motion.figure
            key={s.num}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: activeService === s.num ? 10 : 1 }}
            initial={false}
            animate={{
              clipPath:
                activeService === s.num
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(50% 50% 50% 50%)",
            }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: s.imgFallback }}
            />
            {s.img && (
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
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
        ))}

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 mx-auto text-white">
          {/* {isHome && (
            <motion.div
              animate={{ opacity: activeService ? 0 : 1 }}
              transition={{ duration: 0.4, ease: expo }}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 leading-[1.15] max-w-5xl uppercase indent-20 md:indent-56">
                "{t.collections.quoteBold}"
              </h3>
              <div className="text-sm leading-relaxed max-w-xl mb-12 ml-2">
                <p>
                  - {t.collections.speaker}
                  <span>({t.collections.date})</span>
                </p>
              </div>
            </motion.div>
          )} */}

          {collections.map((s) => {
            const inner = (
              <>
                <div className="flex flex-col lg:flex-row items-center justify-between my-6">
                  <div className="overflow-hidden py-1 flex items-center gap-4">
                    <motion.h2
                      animate={
                        !s.disabled && activeService === s.num
                          ? { y: ["0%", "100%", "-100%", "0%"] }
                          : { y: "0%" }
                      }
                      transition={
                        !s.disabled && activeService === s.num
                          ? {
                              duration: 0.52,
                              times: [0, 0.44, 0.45, 1],
                              ease: ["easeIn", "linear", "easeOut"],
                            }
                          : { duration: 0 }
                      }
                      className={`text-4xl md:text-5xl lg:text-6xl text-center uppercase font-semibold tracking-[0.2em] ${
                        s.disabled ? "opacity-30" : ""
                      }`}
                    >
                      {s.title ?? ""}
                    </motion.h2>
                    {s.disabled && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 border border-white/20 px-2 py-0.5 shrink-0">
                        Próximamente
                      </span>
                    )}
                  </div>
                  <AnimatePresence>
                    {!s.disabled && activeService === s.num && (
                      <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.4, ease: expo }}
                        className="text-sm text-white text-center leading-relaxed max-w-md"
                      >
                        {/* {s.desc} */}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <hr className="flex-1 border-t border-white/40" />
              </>
            );

            return s.noLink ? (
              <div
                key={s.num}
                className="mb-6 cursor-default"
                onMouseEnter={() => setActiveService(s.num)}
                onMouseLeave={() => setActiveService(null)}
              >
                {inner}
              </div>
            ) : s.disabled ? (
              <div key={s.num} className="mb-6 cursor-default">
                {inner}
              </div>
            ) : (
              <Link
                key={s.num}
                className="mb-6 group transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setActiveService(s.num)}
                onMouseLeave={() => setActiveService(null)}
                href={
                  locale === "en"
                    ? s.hrefEn
                    : locale === "fr"
                      ? s.hrefFr
                      : locale === "ca"
                        ? s.hrefCa
                        : s.href
                }
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
