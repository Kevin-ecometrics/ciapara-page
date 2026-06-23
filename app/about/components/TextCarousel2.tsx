"use client";

import { useDragScroll } from "../../lib/useDragScroll";

export default function FirstYears() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          Su obra aparece en distintos catálogos de exposiciones nacionales e
          internacionales, tales como OBRA NEGRA, Una aproximación a la cultura
          visual de Tijuana, 2011, Centro Cultural Tijuana; STRANGE NEW WORLD,
          2006, Museum of Contemporary Art San Diego. Su trabajo también se ha
          reseñado y analizado en los libros: De aquellos páramos sin
          cultura…(Tres décadas de artes en Baja California: de lo retiniano a
          lo conceptual), Roberto Rosique, 2016; Cambio y permanencia (Las rutas
          abiertas del arte Bajacaliforniano del siglo XXI), Gabriel Trujillo
          Muñoz, 2017.
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
            alt="Enrique Ciapara reflexionando sobre sillon verde desgastado con ropa casual en su antiguo estudio en 2010 en la ciudad de Tijuana con sus obras en el fondo"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Fotografia casual de enrique ciapara en anterior estudio en 2010 con piezas de fondo.webp"
            alt="Fotografía casual de artista mexicano Enrique Ciapara en anterior estudio, sentado en un sillón desgastado, mientras toma agua en 2010 con piezas de fondo"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>

      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mt-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          Ha sido galardonado con premios y distinciones en diversos certámenes
          de arte como la III Bienal del Noroeste (1991), la Bienal Plástica de
          Baja California (1993, 2005) y recientemente obtuvo el primer lugar en
          la VI Bienal de Pintura Pedro Coronel (2019). Formó parte del Sistema
          Nacional de Creadores de Arte, FONCA, edición 2019-2022. Trabaja y
          radica desde la ciudad de Tijuana, México.
        </h4>
      </div>
    </section>
  );
}
