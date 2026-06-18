"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";
import { useBlurbT } from "../../lib/i18n-blurb";

const expo = [0.16, 1, 0.3, 1] as const;

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  size: string;
  rotate: number;
  offsetX: number;
  offsetY: number;
};

const images: GalleryImage[] = [
  {
    src: "/images/blurb/Pieza titulada quince en tecnica mixta sobre tela 217x 122 cm 1999 por artista plastico enrique ciapara.webp",
    alt: "Pieza titulada quince en técnica mixta sobre tela 217x 122 cm creada en 1999 por artista plástico Enrique Ciapara basado en Tijuana",
    width: 341,
    height: 606,
    size: "w-[42vw] sm:w-[29vw] lg:w-64",
    rotate: -3,
    offsetX: -8,
    offsetY: 16,
  },
  {
    src: "/images/blurb/Pieza sin tiulo en acrilico sobre tela 217 x 122 cm por artista visual bajacaliforniano ciapara.webp",
    alt: "Pieza sin título en acrílico sobre tela 217 x 122 cm por artista visual bajacaliforniano Enrique Ciapara",
    width: 337,
    height: 605,
    size: "w-[38vw] sm:w-[25vw] lg:w-56",
    rotate: 2,
    offsetX: 14,
    offsetY: -20,
  },
  {
    src: "/images/blurb/Pieza detritus elaborada en acrilico sobre tela 217x 122 cm en 1999 por enrique ciapara.webp",
    alt: "Pieza detritus elaborada en acrílico sobre tela 217x 122 cm en 1999 por Enrique Ciapara",
    width: 349,
    height: 604,
    size: "w-[46vw] sm:w-[32vw] lg:w-72",
    rotate: -2,
    offsetX: -16,
    offsetY: 24,
  },
  {
    src: "/images/blurb/Pieza caminata en tecnica mixta sobre tela 183x 305 cm 2008 por enrique ciapara.webp",
    alt: "Pieza caminata en técnica mixta sobre tela 183x 305 cm elaborada en 2008 por Enrique Ciapara",
    width: 770,
    height: 475,
    size: "w-[80vw] sm:w-[52vw] lg:w-[26rem]",
    rotate: 1.5,
    offsetX: 10,
    offsetY: -14,
  },
  {
    src: "/images/blurb/La despedida pieza en acrilico sobre tela en 122x 213 cm por Enrique Ciapara.webp",
    alt: "La despedida, pieza en acrílico sobre tela en 122x 213 cm por Enrique Ciapara",
    width: 770,
    height: 442,
    size: "w-[80vw] sm:w-[48vw] lg:w-[24rem]",
    rotate: -1.5,
    offsetX: -12,
    offsetY: 20,
  },
  {
    src: "/images/blurb/Pieza titulada detritus en tinta sobre papel 101x 406 cm elaborada en 2005 por artista mexicano enrique ciapara.webp",
    alt: "Pieza titulada detritus en tinta sobre papel 101x 406 cm elaborada en 2005 por artista mexicano Enrique Ciapara",
    width: 770,
    height: 194,
    size: "w-[92vw] sm:w-[70vw] lg:w-[34rem]",
    rotate: -1,
    offsetX: 0,
    offsetY: 0,
  },
  {
    src: "/images/blurb/Pieza sin titulo elaborada en tecnica mixta sobre papel en 130x 90 cm por arista abstracto enrique ciapara.webp",
    alt: "Pieza sin título elaborada en técnica mixta sobre papel en 130x 90 cm por artista abstracto Enrique Ciapara",
    width: 430,
    height: 609,
    size: "w-[40vw] sm:w-[27vw] lg:w-60",
    rotate: 3,
    offsetX: 18,
    offsetY: -22,
  },
  {
    src: "/images/blurb/Obra sin titulo en tecnica mixta sobre papel en 130x 90 cm elaborada en 2001 por Enrique Ciapara artista de la frontera sandiego tijuana.webp",
    alt: "Obra sin título en técnica mixta sobre papel en 130 x 90 cm elaborada en 2001 por Enrique Ciapara, artista de la frontera San Diego–Tijuana",
    width: 452,
    height: 607,
    size: "w-[44vw] sm:w-[30vw] lg:w-72",
    rotate: -2.5,
    offsetX: -10,
    offsetY: 18,
  },
  {
    src: "/images/blurb/El inmortal pieza en tecnica mixta sobre papel en 130x 90 cm por el pintor enrique ciapara.webp",
    alt: "El inmortal, pieza en técnica mixta sobre papel en 130x 90 cm por el pintor Enrique Ciapara",
    width: 449,
    height: 603,
    size: "w-[38vw] sm:w-[26vw] lg:w-56",
    rotate: 2,
    offsetX: 16,
    offsetY: -12,
  },
];

export default function Gallery() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? bT.gallery.items[hovered] : null;

  const colRef = useRef<HTMLDivElement>(null);
  // El título recoge el movimiento del título del Hero: entra ligado al
  // scroll (no a un disparo único) para que se sienta como un relevo.
  const { scrollYProgress: titleProgress } = useScroll({
    target: colRef,
    offset: ["start 65%", "start 15%"],
  });
  const titleY = useTransform(titleProgress, [0, 1], [110, 0]);
  const titleOpacity = useTransform(titleProgress, [0, 0.75], [0, 1]);

  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
        {/* Galería — 3/4 del ancho, espaciada como una sala de museo */}
        <div ref={colRef} className="lg:w-3/4">
          {/* Título — recibe el relevo del título del Hero */}
          <motion.h2
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight uppercase text-[#1A1916] leading-[0.9] mb-20 md:mb-32"
          >
            {bT.hero.title1} {bT.hero.title2}
          </motion.h2>

          <div className="flex flex-wrap items-start gap-x-10 gap-y-24 md:gap-x-16 md:gap-y-36 lg:gap-x-20 lg:gap-y-44">
            {images.map((img, i) => (
              <div key={img.src} className={`${img.size} relative`}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className="block w-full outline-none relative"
                  style={{
                    transform:
                      hovered === i
                        ? "rotate(0deg) translate(0px, 0px) scale(1.05)"
                        : `rotate(${img.rotate}deg) translate(${img.offsetX}px, ${img.offsetY}px)`,
                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    zIndex: hovered === i ? 20 : 1,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={`w-full h-auto block shadow-xl shadow-black/15 ring-1 ring-black/5 transition-shadow duration-500 ${
                      hovered === i ? "shadow-2xl shadow-black/25" : ""
                    }`}
                  />
                </div>

                {/* Detalle inline — solo en mobile/tablet, donde no hay hover */}
                <div className="lg:hidden mt-4 space-y-1">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660]">
                    {bT.gallery.labels.title}
                  </p>
                  <p className="text-sm text-[#1A1916] min-h-5">
                    {bT.gallery.items[i].title || "—"}
                  </p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660] pt-2">
                    {bT.gallery.labels.technique}
                  </p>
                  <p className="text-sm text-[#1A1916] min-h-5">
                    {bT.gallery.items[i].technique || "—"}
                  </p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660] pt-2">
                    {bT.gallery.labels.dimensions}
                  </p>
                  <p className="text-sm text-[#1A1916] min-h-5">
                    {bT.gallery.items[i].dimensions || "—"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel fijo — 1/4 del ancho, solo desktop, muestra los datos al hacer hover */}
        <aside className="hidden lg:block lg:w-1/4">
          <div className="sticky top-0 h-screen flex flex-col justify-center pl-12 border-l border-[#1A1916]/10">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: expo }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {bT.gallery.labels.title}
                    </p>
                    <p className="text-lg text-[#1A1916] leading-snug">
                      {active.title || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {bT.gallery.labels.technique}
                    </p>
                    <p className="text-base text-[#1A1916] leading-snug">
                      {active.technique || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {bT.gallery.labels.dimensions}
                    </p>
                    <p className="text-base text-[#1A1916] leading-snug">
                      {active.dimensions || "—"}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: expo }}
                  className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660]/60"
                >
                  {bT.gallery.hint}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </aside>
      </div>
    </section>
  );
}
