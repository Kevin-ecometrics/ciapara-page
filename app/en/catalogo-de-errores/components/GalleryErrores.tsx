"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useErroresT } from "../../../lib/i18n-errores";
import { images } from "./GalleryImagesErrores";
import DescriptionErrores from "../../../catalogo-de-errores/components/DescriptionErrores";
import CollectionDescription from "../../../components/CollectionDescription";

const expo = [0.16, 1, 0.3, 1] as const;

const TECHNIQUE: Record<string, Record<"fr" | "ca", string>> = {
  "Acrylic on canvas": { fr: "Acrylique sur toile", ca: "Acrílic sobre tela" },
  "Oil on canvas": { fr: "Huile sur toile", ca: "Oli sobre tela" },
  "Acrylic and oil on canvas": { fr: "Acrylique et huile sur toile", ca: "Acrílic i oli sobre tela" },
  "Mixed media on printed paper": { fr: "Technique mixte sur papier imprimé", ca: "Tècnica mixta sobre paper imprès" },
};

const rows: Array<
  Array<{ idx: number; start: number; span: number; y: number }>
> = [
  [
    { idx: 0, start: 1, span: 4, y: 0 },
    { idx: 1, start: 7, span: 4, y: 80 },
  ],
  [
    { idx: 2, start: 2, span: 5, y: 0 },
    { idx: 3, start: 8, span: 5, y: 60 },
  ],
  [
    { idx: 4, start: 1, span: 4, y: 0 },
    { idx: 5, start: 6, span: 4, y: 80 },
  ],
  [
    { idx: 6, start: 1, span: 3, y: 0 },
    { idx: 7, start: 5, span: 4, y: 60 },
  ],
  [{ idx: 8, start: 1, span: 12, y: 0 }],
  [{ idx: 9, start: 3, span: 5, y: 0 }],
  [
    { idx: 10, start: 1, span: 3, y: 0 },
    { idx: 11, start: 5, span: 5, y: 60 },
    { idx: 12, start: 11, span: 2, y: 0 },
  ],
  [{ idx: 13, start: 1, span: 6, y: 0 }],
  [
    { idx: 14, start: 1, span: 4, y: 0 },
    { idx: 15, start: 6, span: 5, y: 60 },
  ],
  [{ idx: 16, start: 5, span: 4, y: 0 }],
  [{ idx: 17, start: 2, span: 9, y: 0 }],
  [
    { idx: 18, start: 1, span: 5, y: 0 },
    { idx: 19, start: 7, span: 3, y: 60 },
    { idx: 20, start: 11, span: 2, y: 0 },
  ],
  [{ idx: 21, start: 4, span: 5, y: 0 }],
  [
    { idx: 22, start: 1, span: 5, y: 0 },
    { idx: 23, start: 7, span: 3, y: 60 },
    { idx: 24, start: 11, span: 2, y: 0 },
  ],
  [{ idx: 25, start: 1, span: 7, y: 0 }],
  [
    { idx: 26, start: 4, span: 5, y: 0 },
    { idx: 27, start: 10, span: 3, y: 60 },
  ],
  [{ idx: 28, start: 1, span: 7, y: 0 }],
  [
    { idx: 29, start: 1, span: 4, y: 0 },
    { idx: 30, start: 5, span: 4, y: 60 },
    { idx: 31, start: 9, span: 4, y: 0 },
  ],
  [
    { idx: 32, start: 1, span: 5, y: 0 },
    { idx: 33, start: 7, span: 4, y: 60 },
  ],
  [
    { idx: 34, start: 1, span: 3, y: 0 },
    { idx: 35, start: 4, span: 3, y: 40 },
    { idx: 36, start: 7, span: 3, y: 0 },
    { idx: 37, start: 10, span: 3, y: 40 },
  ],
  [
    { idx: 38, start: 1, span: 3, y: 0 },
    { idx: 39, start: 4, span: 3, y: 40 },
    { idx: 40, start: 7, span: 3, y: 0 },
    { idx: 41, start: 10, span: 3, y: 40 },
  ],
  [
    { idx: 42, start: 1, span: 3, y: 0 },
    { idx: 43, start: 4, span: 3, y: 40 },
    { idx: 44, start: 7, span: 3, y: 0 },
    { idx: 45, start: 10, span: 3, y: 40 },
  ],
  [
    { idx: 46, start: 1, span: 3, y: 0 },
    { idx: 47, start: 4, span: 3, y: 40 },
    { idx: 48, start: 7, span: 3, y: 0 },
    { idx: 49, start: 10, span: 3, y: 40 },
  ],
  [
    { idx: 50, start: 1, span: 4, y: 0 },
    { idx: 51, start: 5, span: 4, y: 60 },
    { idx: 52, start: 9, span: 4, y: 0 },
  ],
  [
    { idx: 53, start: 1, span: 3, y: 0 },
    { idx: 54, start: 5, span: 5, y: 60 },
  ],
  [{ idx: 55, start: 8, span: 3, y: 0 }],
  [
    { idx: 56, start: 1, span: 4, y: 0 },
    { idx: 57, start: 6, span: 5, y: 60 },
  ],
  [{ idx: 58, start: 5, span: 4, y: 0 }],
  [
    { idx: 59, start: 1, span: 4, y: 0 },
    { idx: 60, start: 6, span: 7, y: 40 },
  ],
];

export default function Gallery() {
  const { locale } = useI18n();
  const eT = useErroresT(locale);

  function getTechnique(technique: string): string {
    if ((locale === "fr" || locale === "ca") && TECHNIQUE[technique]) {
      return TECHNIQUE[technique][locale as "fr" | "ca"];
    }
    return technique;
  }

  function getAlt(alt: string): string {
    if (locale === "fr") {
      return alt.replace(
        /^Piece (\d+) from the Catalog of Errors collection by Enrique Ciapara$/,
        "Pièce $1 du Catalogue d'Errores d'Enrique Ciapara"
      );
    }
    if (locale === "ca") {
      return alt.replace(
        /^Piece (\d+) from the Catalog of Errors collection by Enrique Ciapara$/,
        "Peça $1 del Catàleg d'Errores d'Enrique Ciapara"
      );
    }
    return alt;
  }

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
          <div ref={colRef} className="lg:w-3/4">
            <motion.div style={{ y: titleY, opacity: titleOpacity }}>
              <CollectionDescription title={`${eT.hero.title1} ${eT.hero.title2}`}>
                <DescriptionErrores />
              </CollectionDescription>
            </motion.div>

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
                            alt={getAlt(img.alt)}
                            width={img.width}
                            height={img.height}
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none pointer-events-none"
                          />
                        </div>

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
                            {getTechnique(img.technique) || "—"}
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
                        {getTechnique(active.technique) || "—"}
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
              alt={getAlt(lightboxImage.alt)}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full object-contain select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
