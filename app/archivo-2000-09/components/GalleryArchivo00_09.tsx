"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../providers/i18nProvider";
import { useBlurbT } from "../../lib/i18n-blurb";
import { images } from "./GalleryImages";
import DescriptionArchivo from "./DescriptionArchivo";
import CollectionDescription from "../../components/CollectionDescription";

const expo = [0.16, 1, 0.3, 1] as const;

/*
  Layout editorial pequeno — 40 imagenes a escala relativa de sus dimensiones fisicas.
  Dimensiones: alto x ancho (cm). Formato de dimentions: "alto x ancho".

  Obras grandes (244x183, 183x305) o muy anchas (101x406) reciben spans amplios.
  Obras estandar (217x122, 183x152, 130x90) reciben span 2 — muy pequeñas.
  Obras en papel (60x40) son las mas pequeñas — span 2.

  Sin click/lightbox. Hover muestra info en panel lateral desktop.
*/
const rows: Array<Array<{ idx: number; start: number; span: number; y: number }>> = [
  // Quince (217x122), Sin titulo (217x122), Detritus (217x122) — tres altas
  [
    { idx: 0, start: 2, span: 2, y: 0 },
    { idx: 1, start: 5, span: 2, y: 30 },
    { idx: 2, start: 9, span: 2, y: 0 },
  ],
  // Caminata (183x305 — paisaje muy ancho)
  [{ idx: 3, start: 1, span: 5, y: 0 }],
  // La despedida (122x213 — paisaje)
  [{ idx: 4, start: 4, span: 4, y: 0 }],
  // Detritus tinta (101x406 — extremadamente ancho)
  [{ idx: 5, start: 1, span: 7, y: 0 }],
  // Sin titulo papel (130x90), El inmortal (130x90), Sin titulo papel (130x90), Avion y pimiento (60x40)
  [
    { idx: 6, start: 1, span: 2, y: 0 },
    { idx: 7, start: 4, span: 2, y: 10 },
    { idx: 8, start: 7, span: 2, y: 0 },
    { idx: 9, start: 10, span: 2, y: 10 },
  ],
  // Imago (213x122), Las cosas (213x122), Sin titulo papel 60x40
  [
    { idx: 10, start: 1, span: 2, y: 0 },
    { idx: 11, start: 4, span: 2, y: 10 },
    { idx: 12, start: 7, span: 2, y: 0 },
  ],
  // Alt camp (213x122), Delerrictus (213x122), Dibujo (122x107), El conejo (200x200)
  [
    { idx: 13, start: 1, span: 2, y: 0 },
    { idx: 14, start: 4, span: 2, y: 10 },
    { idx: 15, start: 7, span: 2, y: 0 },
    { idx: 16, start: 10, span: 2, y: 10 },
  ],
  // Habitacion amarilla (60x40), Historias de cocina (183x152) — asimetrico
  [
    { idx: 17, start: 3, span: 2, y: 0 },
    { idx: 18, start: 7, span: 2, y: 10 },
  ],
  // La brigade (244x183 — grande), La obrera (183x152), Lolita (183x152)
  [
    { idx: 19, start: 1, span: 3, y: 0 },
    { idx: 20, start: 5, span: 2, y: 30 },
    { idx: 21, start: 8, span: 2, y: 0 },
  ],
  // Mal arreglo (60x40), Nature morte (183x152), Nina (183x152), Noirceur (183x152)
  [
    { idx: 22, start: 1, span: 2, y: 10 },
    { idx: 23, start: 4, span: 2, y: 0 },
    { idx: 24, start: 7, span: 2, y: 10 },
    { idx: 25, start: 10, span: 2, y: 0 },
  ],
  // Now you're here (244x183 — grande), Recuerdo de Pompeya (60x40), Recuerdo de sobremesa (122x90)
  [
    { idx: 26, start: 1, span: 3, y: 0 },
    { idx: 27, start: 5, span: 2, y: 30 },
    { idx: 28, start: 8, span: 2, y: 0 },
  ],
  // Ry cayo (122x107), Sala de espera (213x122), Sin titulo 200x213
  [
    { idx: 29, start: 1, span: 2, y: 0 },
    { idx: 30, start: 4, span: 2, y: 10 },
    { idx: 31, start: 8, span: 2, y: 0 },
  ],
  // Sin titulo 213x244 (ligeramente paisaje), Sin titulo mixta papel
  [
    { idx: 32, start: 1, span: 3, y: 0 },
    { idx: 33, start: 5, span: 2, y: 10 },
  ],
  // Sin titulo papel 60x40, Sin titulo tela 122x107, Sin titulo 122x213 (paisaje)
  [
    { idx: 34, start: 1, span: 2, y: 10 },
    { idx: 35, start: 4, span: 2, y: 0 },
    { idx: 36, start: 7, span: 4, y: 10 },
  ],
  // Sin titulo 183x152, Sin titulo 183x152, Taller 60x40
  [
    { idx: 37, start: 1, span: 2, y: 0 },
    { idx: 38, start: 5, span: 2, y: 10 },
    { idx: 39, start: 9, span: 2, y: 0 },
  ],
];

export default function Gallery() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? images[hovered] : null;

  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
        <div className="lg:w-3/4">
          <CollectionDescription>
            <DescriptionArchivo />
          </CollectionDescription>

          <div className="space-y-6 lg:space-y-12 mt-20 lg:mt-32">
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-3 gap-y-3 lg:gap-y-0"
              >
                {row.map(({ idx, start, span, y }) => {
                  const img = images[idx];
                  const mobileSpan = span >= 5 ? "col-span-2" : "col-span-1";
                  return (
                    <div
                      key={img.src}
                      className={`relative ${mobileSpan} lg:[grid-column:var(--gc)]`}
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
                      {active.dimentions || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B6660] mb-2">
                      {bT.gallery.labels.date}
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
