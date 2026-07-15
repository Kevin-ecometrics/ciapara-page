"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";
import { useErroresT } from "../../lib/i18n-errores";
import { images } from "./GalleryImagesErrores";
import DescriptionErrores from "./DescriptionErrores";
import CollectionDescription from "../../components/CollectionDescription";

const expo = [0.16, 1, 0.3, 1] as const;

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true);
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/90 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: expo }}
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={alt}
        className="w-full h-full"
      />
    </>
  );
}

/*
  Layout editorial de 12 columnas, respetando el aspect ratio y tamaño físico
  de cada obra. Formato de dimensiones: "alto × ancho" (excepto Pieza 61).

  Cada renglón es independiente — tiene posición `start` y `span` explícitos
  en el grid de 12 cols. Esto permite:
    - 1 obra sola sin cubrir el ancho completo, y no siempre centrada
    - 2, 3 o 4 obras en un renglón
    - Espacios blancos intencionales (gaps entre columnas)
    - Escalonamiento vertical (y) que rompe la monotonía horizontal

  Obras muy altas (305×153, 213×122) → span estrecho → apariencia dramática vertical
  Obras panorámicas (429×152)         → span 12 → ancho completo
  Obras grandes (244×183)             → span ancho (7-9 cols)
  Obras en papel (53.5×39.5)          → 4 por renglón en span 3
*/
const rows: Array<
  Array<{ idx: number; start: number; span: number; y: number }>
> = [
  // Piezas 1,2 — 160×122 cada una
  [
    { idx: 0, start: 1, span: 4, y: 0 },
    { idx: 1, start: 7, span: 4, y: 80 },
  ],
  // Piezas 3,4 — 200×140 cada una, ligeramente sangradas
  [
    { idx: 2, start: 2, span: 5, y: 0 },
    { idx: 3, start: 8, span: 5, y: 60 },
  ],
  // Piezas 5,6 — 160×122 cada una
  [
    { idx: 4, start: 1, span: 4, y: 0 },
    { idx: 5, start: 6, span: 4, y: 80 },
  ],
  // Piezas 7 (122×107), 8 (160×122) — acento pequeño + mediana
  [
    { idx: 6, start: 1, span: 3, y: 0 },
    { idx: 7, start: 5, span: 4, y: 60 },
  ],
  // Pieza 9 — Banquete en el pinar (429×152, panorámica) — ancho completo
  [{ idx: 8, start: 1, span: 12, y: 0 }],
  // Pieza 10 (160×122) — sola, posición centro-izquierda
  [{ idx: 9, start: 3, span: 5, y: 0 }],
  // Piezas 11 (122×86), 12 (200×140), 13 (213×122 — muy alta) — tres en renglón
  [
    { idx: 10, start: 1, span: 3, y: 0 },
    { idx: 11, start: 5, span: 5, y: 60 },
    { idx: 12, start: 11, span: 2, y: 0 }, // muy alta en span 2 = drama vertical
  ],
  // Pieza 14 (200×140) — sola, izquierda
  [{ idx: 13, start: 1, span: 6, y: 0 }],
  // Piezas 15 (160×122), 16 (200×140)
  [
    { idx: 14, start: 1, span: 4, y: 0 },
    { idx: 15, start: 6, span: 5, y: 60 },
  ],
  // Pieza 17 (213×122 — muy alta) — sola, ligeramente derecha del centro
  [{ idx: 16, start: 5, span: 4, y: 0 }],
  // Pieza 18 (244×183 — Santo Tomás) — casi ancho completo, ligeramente sangrada
  [{ idx: 17, start: 2, span: 9, y: 0 }],
  // Piezas 19 (200×140), 20 (122×86), 21 (122×86) — tres en renglón
  [
    { idx: 18, start: 1, span: 5, y: 0 },
    { idx: 19, start: 7, span: 3, y: 60 },
    { idx: 20, start: 11, span: 2, y: 0 },
  ],
  // Pieza 22 (305×153 — muy alta) — sola, drama vertical, posición central
  [{ idx: 21, start: 4, span: 5, y: 0 }],
  // Piezas 23 (200×140), 24 (122×86), 25 (122×86) — tres en renglón
  [
    { idx: 22, start: 1, span: 5, y: 0 },
    { idx: 23, start: 7, span: 3, y: 60 },
    { idx: 24, start: 11, span: 2, y: 0 },
  ],
  // Pieza 26 (244×183) — sola, dominante izquierda
  [{ idx: 25, start: 1, span: 7, y: 0 }],
  // Piezas 27 (200×140), 28 (170×122) — par derecho
  [
    { idx: 26, start: 4, span: 5, y: 0 },
    { idx: 27, start: 10, span: 3, y: 60 },
  ],
  // Pieza 29 (122×183 — paisaje horizontal) — sola, izquierda
  [{ idx: 28, start: 1, span: 7, y: 0 }],
  // Piezas 30, 31, 32 — tres óleos 183×122, mismo formato, en fila
  [
    { idx: 29, start: 1, span: 4, y: 0 },
    { idx: 30, start: 5, span: 4, y: 60 },
    { idx: 31, start: 9, span: 4, y: 0 },
  ],
  // Piezas 33 (200×140), 34 (183×122)
  [
    { idx: 32, start: 1, span: 5, y: 0 },
    { idx: 33, start: 7, span: 4, y: 60 },
  ],
  // Piezas 35-38 — obras en papel 53.5×39.5, cuatro por renglón
  [
    { idx: 34, start: 1, span: 3, y: 0 },
    { idx: 35, start: 4, span: 3, y: 40 },
    { idx: 36, start: 7, span: 3, y: 0 },
    { idx: 37, start: 10, span: 3, y: 40 },
  ],
  // Piezas 39-42
  [
    { idx: 38, start: 1, span: 3, y: 0 },
    { idx: 39, start: 4, span: 3, y: 40 },
    { idx: 40, start: 7, span: 3, y: 0 },
    { idx: 41, start: 10, span: 3, y: 40 },
  ],
  // Piezas 43-46
  [
    { idx: 42, start: 1, span: 3, y: 0 },
    { idx: 43, start: 4, span: 3, y: 40 },
    { idx: 44, start: 7, span: 3, y: 0 },
    { idx: 45, start: 10, span: 3, y: 40 },
  ],
  // Piezas 47-50
  [
    { idx: 46, start: 1, span: 3, y: 0 },
    { idx: 47, start: 4, span: 3, y: 40 },
    { idx: 48, start: 7, span: 3, y: 0 },
    { idx: 49, start: 10, span: 3, y: 40 },
  ],
  // Piezas 51, 52, 53 — tres acrílicos 200×140 en fila
  [
    { idx: 50, start: 1, span: 4, y: 0 },
    { idx: 51, start: 5, span: 4, y: 60 },
    { idx: 52, start: 9, span: 4, y: 0 },
  ],
  // Piezas 54 (122×107), 55 (200×140)
  [
    { idx: 53, start: 1, span: 3, y: 0 },
    { idx: 54, start: 5, span: 5, y: 60 },
  ],
  // Pieza 56 (122×107) — sola, posición derecha
  [{ idx: 55, start: 8, span: 3, y: 0 }],
  // Piezas 57 (183×122), 58 (200×140)
  [
    { idx: 56, start: 1, span: 4, y: 0 },
    { idx: 57, start: 6, span: 5, y: 60 },
  ],
  // Pieza 59 (305×152.5 — muy alta) — sola, drama vertical
  [{ idx: 58, start: 5, span: 4, y: 0 }],
  // Piezas 60 (200×140), 61 (122×80 — paisaje) — finale
  [
    { idx: 59, start: 1, span: 4, y: 0 },
    { idx: 60, start: 6, span: 7, y: 40 },
  ],
];

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

  return (
    <>
      <section className="bg-[#F6F2EC] py-28 md:py-40">
        <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
          {/* Galería — 3/4 del ancho en desktop */}
          <div className="lg:w-3/4">
            <CollectionDescription>
              <DescriptionErrores />
            </CollectionDescription>

            {/*
              Cada renglón es un grid independiente de 12 columnas.
              En mobile: 2 columnas, posición automática.
              En desktop (lg): cada obra usa start y span explícitos —
              permite espacios blancos intencionales y posiciones asimétricas.
            */}
            <div className="space-y-24 lg:space-y-56 mt-24 lg:mt-40">
              {rows.map((row, ri) => (
                <div
                  key={ri}
                  className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-0"
                >
                  {row.map(({ idx, start, span, y }) => {
                    const img = images[idx];
                    const mobileSpan = span >= 6 ? "col-span-2" : "col-span-1";

                    return (
                      <div
                        key={img.src}
                        className={`relative ${mobileSpan} lg:[grid-column:var(--gc)]`}
                        style={
                          {
                            "--gc": `${start} / span ${span}`,
                            transform: `translateY(${y}px)`,
                          } as React.CSSProperties
                        }
                      >
                        <div
                          tabIndex={0}
                          onMouseEnter={() => setHovered(idx)}
                          onMouseLeave={() => setHovered(null)}
                          onFocus={() => setHovered(idx)}
                          onBlur={() => setHovered(null)}
                          onClick={() => setLightboxIndex(idx)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              setLightboxIndex(idx);
                          }}
                          className="group relative z-0 block w-full outline-none overflow-hidden rounded-md shadow-xl shadow-black/15 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25 hover:z-20 cursor-zoom-in"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none pointer-events-none"
                          />
                        </div>

                        {/* Detalle inline — solo en mobile/tablet */}
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
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Panel fijo — 1/4 del ancho, solo desktop */}
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
            <div
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              className="relative w-full h-full select-none"
            >
              <LightboxImage
                key={lightboxIndex}
                src={lightboxImage.lightboxSrc ?? lightboxImage.src}
                alt={lightboxImage.alt}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
