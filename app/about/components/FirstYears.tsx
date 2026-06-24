"use client";

import { useDragScroll } from "../../lib/useDragScroll";
import { useI18n } from "../../providers/i18nProvider";

export default function FirstYears() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();
  const { t } = useI18n();

  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.firstYears.text}
        </h4>
      </div>

      <div
        ref={ref}
        {...handlers}
        className={`scrollbar-hide -mx-6 mt-10 flex gap-4 overflow-x-auto px-6 cursor-grab md:cursor-auto md:mx-0 md:px-0 ${
          dragging ? "cursor-grabbing select-none" : ""
        }`}
      >
        <figure className="h-150 w-[80%] shrink-0 overflow-hidden md:h-175 md:w-1/3 md:min-w-80 md:shrink">
          <img
            src="/images/about/Ciapara es un artista originario de la ciudad de tijuana donde tiene su estudio.webp"
            alt="Enrique Ciapara es un artista originario de la ciudad de Tijuana donde tiene su estudio y fue retratado de forma orgánica transitando entre sus piezas"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-150 w-[80%] shrink-0 overflow-hidden md:h-175 md:w-1/3 md:min-w-80 md:shrink">
          <img
            src="/images/about/Enrique Ciapara dialogando en su estudio en tijuana baja california.webp"
            alt="Enrique Ciapara es un artista mexicano actualmente tiene un estudio en Tijuana Baja California en el corazón de la ciudad"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-150 w-[80%] shrink-0 overflow-hidden md:h-175 md:w-1/3 md:min-w-80 md:shrink">
          <img
            src="/images/about/Retrato del 2024 del artista plastico enrique ciapara.webp"
            alt="Retrato del año 2024 del artista plástico Enrique Ciapara detrás de tus piezas en su estudio en Tijuana"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>
    </section>
  );
}
