"use client";

import { useDragScroll } from "../../lib/useDragScroll";
import { useI18n } from "../../providers/i18nProvider";

export default function Carousel() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div
        ref={ref}
        {...handlers}
        className={`scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 cursor-grab md:cursor-auto md:mx-0 md:px-0 ${
          dragging ? "cursor-grabbing select-none" : ""
        }`}
      >
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Sala de exposiciones el cubo donde se expuso el trabajo del artista mexicano enrique ciapara.webp"
            alt={isEn ? "General view of multiple works from the Trompe-l'oeil collection at El Cubo by Mexican artist Enrique Ciapara" : "Vista general de varias piezas de la colección titulada trompe-l' oeil en la sala de exposiciones de El Cubo por el artista mexicano Enrique Ciapara"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Piezas en hilera de la colección trompe l oeil 2013 de Enrique Ciapara.webp"
            alt={isEn ? "Wall displaying a row of works from the Trompe-l'oeil collection by Tijuana visual artist Enrique Ciapara, 2013" : "Pared con hilera de piezas de la colección titulada trompe l' oeil del artista visual de tijuana Enrique Ciapara en 2013"}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>
    </section>
  );
}
