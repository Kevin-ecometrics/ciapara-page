"use client";

import { useI18n } from "../../../providers/i18nProvider";
import { images } from "./GalleryImagesTrompe";
import DescriptionTrompe from "../../../trompe-loeil/components/DescriptionTrompe";
import CollectionDescription from "../../../components/CollectionDescription";

const rows: Array<Array<{ idx: number; start: number; span: number; y: number }>> = [
  [{ idx: 0, start: 1, span: 5, y: 0 }, { idx: 2, start: 7, span: 6, y: 30 }],
  [{ idx: 4, start: 2, span: 10, y: 0 }],
  [{ idx: 1, start: 2, span: 4, y: 0 }, { idx: 3, start: 7, span: 4, y: 30 }],
  [{ idx: 5, start: 1, span: 6, y: 0 }, { idx: 6, start: 8, span: 5, y: 20 }],
  [{ idx: 7, start: 2, span: 10, y: 0 }],
  [{ idx: 8, start: 1, span: 5, y: 30 }, { idx: 9, start: 7, span: 6, y: 0 }],
  [{ idx: 10, start: 2, span: 4, y: 0 }, { idx: 11, start: 7, span: 4, y: 20 }],
  [{ idx: 12, start: 2, span: 10, y: 0 }],
  [{ idx: 13, start: 1, span: 5, y: 0 }, { idx: 17, start: 7, span: 6, y: 30 }],
  [{ idx: 15, start: 2, span: 2, y: 0 }, { idx: 14, start: 5, span: 3, y: 20 }, { idx: 16, start: 9, span: 3, y: 0 }],
  [{ idx: 18, start: 1, span: 6, y: 0 }, { idx: 19, start: 8, span: 5, y: 30 }],
];

export default function GalleryTrompe() {
  const { locale } = useI18n();

  function getAlt(img: typeof images[number]): string {
    if (locale === "fr" && img.altFr) return img.altFr;
    if (locale === "ca" && img.altCa) return img.altCa;
    return img.alt;
  }

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
                    style={{
                      "--gc": `${start} / span ${span}`,
                      transform: `translateY(${y}px)`,
                    } as React.CSSProperties}
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
