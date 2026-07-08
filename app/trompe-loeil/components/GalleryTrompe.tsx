"use client";

import { images } from "./GalleryImagesTrompe";
import DescriptionTrompe from "./DescriptionTrompe";
import CollectionDescription from "../../components/CollectionDescription";

/*
  Layout editorial — 20 imágenes. Landscape 3:2 → spans 5-6. Portrait 3:4 → spans 2-4.
  Cada renglón es un grid de 12 cols independiente, centrado sobre el ancho completo
  de la página (ya no hay panel lateral). Sin lightbox.
*/
const rows: Array<
  Array<{ idx: number; start: number; span: number; y: number }>
> = [
  // 0(L) 2(L)
  [
    { idx: 0, start: 1, span: 5, y: 0 },
    { idx: 2, start: 7, span: 6, y: 30 },
  ],
  // 4(L) sola, ancha y centrada
  [{ idx: 4, start: 2, span: 10, y: 0 }],
  // 1(P) 3(P)
  [
    { idx: 1, start: 2, span: 4, y: 0 },
    { idx: 3, start: 7, span: 4, y: 30 },
  ],
  // 5(L) 6(L)
  [
    { idx: 5, start: 1, span: 6, y: 0 },
    { idx: 6, start: 8, span: 5, y: 20 },
  ],
  // 7(L) sola, ancha y centrada
  [{ idx: 7, start: 2, span: 10, y: 0 }],
  // 8(L) 9(L)
  [
    { idx: 8, start: 1, span: 5, y: 30 },
    { idx: 9, start: 7, span: 6, y: 0 },
  ],
  // 10(P) 11(P)
  [
    { idx: 10, start: 2, span: 4, y: 0 },
    { idx: 11, start: 7, span: 4, y: 20 },
  ],
  // 12(L) sola, ancha y centrada
  [{ idx: 12, start: 2, span: 10, y: 0 }],
  // 13(L) 17(L)
  [
    { idx: 13, start: 1, span: 5, y: 0 },
    { idx: 17, start: 7, span: 6, y: 30 },
  ],
  // 15(P estrecho) 14(P) 16(P) — tres retratos, distribuidas parejo
  [
    { idx: 15, start: 2, span: 2, y: 0 },
    { idx: 14, start: 5, span: 3, y: 20 },
    { idx: 16, start: 9, span: 3, y: 0 },
  ],
  // 18(L) 19(L)
  [
    { idx: 18, start: 1, span: 6, y: 0 },
    { idx: 19, start: 8, span: 5, y: 30 },
  ],
];

export default function GalleryTrompe() {
  return (
    <section className="bg-[#F6F2EC] py-28 md:py-40">
      <div className="px-6 lg:px-12">
        <CollectionDescription>
          <DescriptionTrompe />
        </CollectionDescription>

        <div className="space-y-8 lg:space-y-16 mt-20 lg:mt-32">
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
    </section>
  );
}
