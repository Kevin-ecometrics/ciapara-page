"use client";

import { useDragScroll } from "../../lib/useDragScroll";
import { useI18n } from "../../providers/i18nProvider";

export default function FirstYears() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.europeSecond.text}
        </h4>
      </div>

      <div
        ref={ref}
        {...handlers}
        className={`scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 cursor-grab md:cursor-auto md:mx-0 md:px-0 ${
          dragging ? "cursor-grabbing select-none" : ""
        }`}
      >
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/La pintura de ciapara en su obra  representa paisajes sensaciones colores y lineas.webp"
            alt={isEn ? "Painting by Enrique Ciapara representing landscapes, sensations, colors, and lines that evoke balance and beginning" : "La pintura del artista Enrique Ciapara representa paisajes sensaciones colores y líneas que nos indican equilibrio y comienzo"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Vista de obras en la colección trompe l' oeil de enrique ciapara en artista en la frontera san diego tijuana.webp"
            alt={isEn ? "View of works in Enrique Ciapara's Trompe-l'oeil collection — artist on the San Diego-Tijuana border" : "Vista de obras en la colección trompe l' oeil de enrique ciapara en artista en la frontera san diego tijuana"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>
    </section>
  );
}
