"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";
import { use2015T } from "../../lib/i18n-2015";
import { images } from "./GalleryImages2015";
import Description2015 from "./Description2015";
import CollectionDescription from "../../components/CollectionDescription";

const expo = [0.16, 1, 0.3, 1] as const;

/*
  Layout editorial pequeño — imágenes a escala relativa de sus dimensiones físicas.
  Dimensiones: alto x ancho (cm). Las más altas (213x122) son estrechas y muy verticales.
  Las más anchas (122x141) reciben un span mayor. Todas son intencionalmente pequeñas.

  Cada renglón es un grid de 12 cols independiente. Start + span explícitos permiten
  posicionamiento asimétrico y espacios blancos intencionales. Sin click/lightbox.
*/
const rows: Array<Array<{ idx: number; start: number; span: number; y: number }>> = [
  // Cipres (122x80), Cielo (213x122), Sunnyday (122x107), Ensenada (213x122)
  [
    { idx: 0, start: 1, span: 2, y: 0 },
    { idx: 1, start: 4, span: 2, y: 30 },
    { idx: 2, start: 7, span: 2, y: 0 },
    { idx: 3, start: 10, span: 2, y: 10 },
  ],
  // Dulces de brujas (122x141 — paisaje), Paisaje (122x95), 8bit (124x107)
  [
    { idx: 4, start: 1, span: 3, y: 0 },
    { idx: 5, start: 5, span: 2, y: 30 },
    { idx: 6, start: 8, span: 2, y: 10 },
  ],
  // Lontananza (122x122), Gran canon (125x96), Grits (122x80), Recuerdo Magali (125x107)
  [
    { idx: 7, start: 1, span: 2, y: 10 },
    { idx: 8, start: 4, span: 2, y: 0 },
    { idx: 9, start: 7, span: 2, y: 30 },
    { idx: 10, start: 10, span: 2, y: 0 },
  ],
  // Robot (213x122), El globo (144x103)
  [
    { idx: 11, start: 1, span: 2, y: 0 },
    { idx: 12, start: 5, span: 2, y: 10 },
  ],
];

export default function Gallery() {
  const { locale } = useI18n();
  const t2015 = use2015T(locale);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? images[hovered] : null;

  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
        <div className="lg:w-3/4">
          <CollectionDescription>
            <Description2015 />
          </CollectionDescription>

          <div className="space-y-6 lg:space-y-12 mt-20 lg:mt-32">
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-3 gap-y-3 lg:gap-y-0"
              >
                {row.map(({ idx, start, span, y }) => {
                  const img = images[idx];
                  return (
                    <div
                      key={img.src}
                      className="relative col-span-1 lg:[grid-column:var(--gc)]"
                      style={{
                        "--gc": `${start} / span ${span}`,
                        transform: `translateY(${y}px)`,
                      } as React.CSSProperties}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="group overflow-hidden rounded-xl shadow-lg shadow-black/10 ring-1 ring-black/5">
                        <img
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                          className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03] select-none pointer-events-none"
                        />
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
                      {t2015.gallery.labels.title}
                    </p>
                    <p className="text-lg text-[#1A1916] leading-snug">
                      {active.title || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {t2015.gallery.labels.technique}
                    </p>
                    <p className="text-base text-[#1A1916] leading-snug">
                      {active.technique || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {t2015.gallery.labels.dimensions}
                    </p>
                    <p className="text-base text-[#1A1916] leading-snug">
                      {active.dimentions || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {t2015.gallery.labels.date}
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
                  {t2015.gallery.hint}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </aside>
      </div>
    </section>
  );
}
