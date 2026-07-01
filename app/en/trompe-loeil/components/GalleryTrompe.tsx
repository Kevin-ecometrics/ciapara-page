"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useTrompeT } from "../../../lib/i18n-trompe";
import { images } from "./GalleryImagesTrompe";
import DescriptionTrompe from "../../../trompe-loeil/components/DescriptionTrompe";
import CollectionDescription from "../../../components/CollectionDescription";

const expo = [0.16, 1, 0.3, 1] as const;

const rows: Array<Array<{ idx: number; start: number; span: number; y: number }>> = [
  [{ idx: 0, start: 1, span: 5, y: 0 }, { idx: 1, start: 7, span: 6, y: 30 }],
  [{ idx: 2, start: 2, span: 7, y: 0 }],
  [{ idx: 3, start: 1, span: 4, y: 20 }, { idx: 4, start: 6, span: 4, y: 0 }],
  [{ idx: 5, start: 1, span: 5, y: 0 }, { idx: 6, start: 7, span: 6, y: 40 }],
  [{ idx: 7, start: 2, span: 4, y: 0 }, { idx: 8, start: 7, span: 5, y: 20 }],
  [{ idx: 9, start: 1, span: 6, y: 0 }, { idx: 10, start: 8, span: 5, y: 30 }],
  [{ idx: 11, start: 3, span: 8, y: 0 }],
  [{ idx: 12, start: 1, span: 5, y: 30 }, { idx: 13, start: 7, span: 6, y: 0 }],
  [{ idx: 14, start: 1, span: 7, y: 0 }],
  [{ idx: 15, start: 1, span: 5, y: 0 }, { idx: 16, start: 7, span: 5, y: 30 }],
  [{ idx: 17, start: 2, span: 4, y: 0 }, { idx: 18, start: 7, span: 5, y: 20 }],
  [{ idx: 19, start: 1, span: 5, y: 30 }, { idx: 20, start: 7, span: 6, y: 0 }],
  [{ idx: 21, start: 1, span: 2, y: 0 }, { idx: 22, start: 4, span: 3, y: 20 }, { idx: 23, start: 8, span: 3, y: 0 }],
  [{ idx: 24, start: 2, span: 3, y: 0 }, { idx: 25, start: 6, span: 3, y: 30 }],
];

export default function GalleryTrompe() {
  const { locale } = useI18n();
  const tTrompe = useTrompeT(locale);

  function getAlt(img: typeof images[number]): string {
    if (locale === "fr" && img.altFr) return img.altFr;
    if (locale === "ca" && img.altCa) return img.altCa;
    return img.alt;
  }
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? images[hovered] : null;

  const colRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: colRef,
    offset: ["start 65%", "start 15%"],
  });
  const titleY = useTransform(titleProgress, [0, 1], [110, 0]);
  const titleOpacity = useTransform(titleProgress, [0, 0.75], [0, 1]);

  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-0">
        <div ref={colRef} className="lg:w-3/4">
          <motion.div style={{ y: titleY, opacity: titleOpacity }}>
            <CollectionDescription title="Trompe L'oeil">
              <DescriptionTrompe />
            </CollectionDescription>
          </motion.div>

          <div className="space-y-8 lg:space-y-16 mt-20 lg:mt-32">
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="grid grid-cols-2 lg:grid-cols-12 gap-x-3 lg:gap-x-4 gap-y-4 lg:gap-y-0"
              >
                {row.map(({ idx, start, span, y }) => {
                  const img = images[idx];
                  const mobileSpan = span >= 6 ? "col-span-2" : "col-span-1";
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
                          alt={getAlt(img)}
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
                >
                  <p className="text-sm text-[#1A1916]/70 leading-relaxed">
                    {getAlt(active)}
                  </p>
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
                  {tTrompe.gallery.hint}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </aside>
      </div>
    </section>
  );
}
