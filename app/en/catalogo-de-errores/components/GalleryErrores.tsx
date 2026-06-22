"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useErroresT } from "../../../lib/i18n-errores";
import { images } from "./GalleryImagesErrores";

const expo = [0.16, 1, 0.3, 1] as const;

export default function Gallery() {
  const { locale } = useI18n();
  const eT = useErroresT(locale);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? images[hovered] : null;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex]);

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
    <>
      <section className="bg-[#F6F2EC] py-28 md:py-40">
        <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
          {/* Galería — 3/4 del ancho, espaciada como una sala de museo */}
          <div ref={colRef} className="lg:w-3/4">
            {/* Título — recibe el relevo del título del Hero */}
            <motion.h2
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight uppercase text-[#1A1916] leading-[0.9] mb-20 md:mb-32"
            >
              {eT.hero.title1} {eT.hero.title2}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-x-10 gap-y-24 md:gap-x-16 md:gap-y-36 lg:gap-x-20 lg:gap-y-44">
              {images.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative ${img.landscape ? "sm:col-span-2" : ""}`}
                >
                  <div
                    tabIndex={0}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setLightboxIndex(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setLightboxIndex(i);
                    }}
                    className={`group relative z-0 block outline-none overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25 hover:z-20 cursor-zoom-in ${img.size}`}
                    style={{
                      transform: `translate(${img.offsetX}px, ${img.offsetY}px)`,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Detalle inline — solo en mobile/tablet, donde no hay hover */}
                  <div className="lg:hidden mt-4 space-y-1">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660]">
                      {eT.gallery.labels.title}
                    </p>
                    <p className="text-sm text-[#1A1916] min-h-5">
                      {img.title || "—"}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660] pt-2">
                      {eT.gallery.labels.technique}
                    </p>
                    <p className="text-sm text-[#1A1916] min-h-5">
                      {img.technique || "—"}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660] pt-2">
                      {eT.gallery.labels.dimensions}
                    </p>
                    <p className="text-sm text-[#1A1916] min-h-5">
                      {img.dimentions || "—"}
                    </p>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6660] pt-2">
                      {eT.gallery.labels.date}
                    </p>
                    <p className="text-sm text-[#1A1916] min-h-5">
                      {img.date || "—"}
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
                        {eT.gallery.labels.title}
                      </p>
                      <p className="text-lg text-[#1A1916] leading-snug">
                        {active.title || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                        {eT.gallery.labels.technique}
                      </p>
                      <p className="text-base text-[#1A1916] leading-snug">
                        {active.technique || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                        {eT.gallery.labels.dimensions}
                      </p>
                      <p className="text-base text-[#1A1916] leading-snug">
                        {active.dimentions || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                        {eT.gallery.labels.date}
                      </p>
                      <p className="text-base text-[#1A1916] leading-snug">
                        {active.date || "—"}
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
                    {eT.gallery.hint}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label={eT.gallery.labels.close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white text-4xl leading-none z-10 cursor-pointer"
            >
              &times;
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
