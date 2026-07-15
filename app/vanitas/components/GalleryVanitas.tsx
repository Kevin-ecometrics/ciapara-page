"use client";

import { useI18n } from "../../providers/i18nProvider";
import { images } from "./GalleryImagesVanitas";

/*
  Layout editorial — 23 imágenes, en el mismo orden alfabético en que están
  en public/images/Vanitas (idx 0..22 secuencial, sin intercalar). Landscape
  3:2 → spans 5-6. Portrait 2:3 → spans 2-4. Cada renglón es un grid de 12
  cols independiente, centrado sobre el ancho completo de la página. Sin
  lightbox.
*/
const rows: Array<
  Array<{ idx: number; start: number; span: number; y: number }>
> = [
  [
    { idx: 0, start: 2, span: 4, y: 0 },
    { idx: 1, start: 7, span: 4, y: 20 },
  ],
  [
    { idx: 2, start: 1, span: 4, y: 20 },
    { idx: 3, start: 6, span: 4, y: 0 },
  ],
  [
    { idx: 4, start: 2, span: 4, y: 0 },
    { idx: 5, start: 7, span: 4, y: 30 },
  ],
  [
    { idx: 6, start: 1, span: 4, y: 30 },
    { idx: 7, start: 6, span: 4, y: 0 },
  ],
  [
    { idx: 8, start: 2, span: 4, y: 0 },
    { idx: 9, start: 7, span: 4, y: 20 },
  ],
  [
    { idx: 10, start: 1, span: 6, y: 0 },
    { idx: 11, start: 8, span: 5, y: 30 },
  ],
  [{ idx: 12, start: 2, span: 10, y: 0 }],
  [
    { idx: 13, start: 1, span: 5, y: 0 },
    { idx: 14, start: 7, span: 6, y: 30 },
  ],
  [{ idx: 15, start: 2, span: 10, y: 0 }],
  [
    { idx: 16, start: 1, span: 6, y: 30 },
    { idx: 17, start: 8, span: 5, y: 0 },
  ],
  [{ idx: 18, start: 2, span: 10, y: 0 }],
  [
    { idx: 19, start: 1, span: 5, y: 20 },
    { idx: 20, start: 7, span: 6, y: 0 },
  ],
  [
    { idx: 21, start: 1, span: 6, y: 0 },
    { idx: 22, start: 8, span: 5, y: 30 },
  ],
];

export default function GalleryVanitas() {
  const { locale } = useI18n();

  function getAlt(img: (typeof images)[number]): string {
    if (locale === "en") return img.altEn;
    if (locale === "fr") return img.altFr;
    if (locale === "ca") return img.altCa;
    return img.alt;
  }

  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12">
        <div className="space-y-8 lg:space-y-16">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-2 lg:grid-cols-12 gap-x-3 lg:gap-x-5 gap-y-4 lg:gap-y-0"
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
    </section>
  );
}
