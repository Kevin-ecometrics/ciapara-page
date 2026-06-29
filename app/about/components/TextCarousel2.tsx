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
          {t.aboutBio.catalogs.text}
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
            src="/images/about/Enrique Ciapara reflexionando en su antiguo estudio en 2010 en la ciudad de Tijuana con sus obras en el fondo.webp"
            alt={isEn ? "Enrique Ciapara in a worn green armchair in his former studio in Tijuana, 2010, with his works in the background" : "Enrique Ciapara reflexionando sobre sillon verde desgastado con ropa casual en su antiguo estudio en 2010 en la ciudad de Tijuana con sus obras en el fondo"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Fotografia casual de enrique ciapara en anterior estudio en 2010 con piezas de fondo.webp"
            alt={isEn ? "Casual photograph of Mexican artist Enrique Ciapara in his former studio, seated in a worn armchair while drinking water in 2010, with works in the background" : "Fotografía casual de artista mexicano Enrique Ciapara en anterior estudio, sentado en un sillón desgastado, mientras toma agua en 2010 con piezas de fondo"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>

      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mt-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.awards.text}
        </h4>
      </div>
    </section>
  );
}
