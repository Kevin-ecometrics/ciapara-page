"use client";

import { useDragScroll } from "../../lib/useDragScroll";

export default function FirstYears() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          En 1997 realiza su segunda estancia en Europa, tomando de nuevo, como
          ciudad de base Tarragona en donde nace su segunda hija. En ésta
          residencia se afianza la gestualidad como camino de expresión en su
          obra. A su vuelta conoce al artista Fernando Delmar con quien empata
          en sensibilidad y búsqueda de intencionalidad creativa con el deseo,
          el azar y lo indeterminado como camino de trabajo.
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
            alt="La pintura del artista Enrique Ciapara representa paisajes sensaciones colores y líneas que nos indican equilibrio y comienzo"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
        <figure className="h-100 w-[90%] shrink-0 overflow-hidden md:h-175 md:w-1/2 md:min-w-100 md:shrink">
          <img
            src="/images/about/Vista de obras en la colección trompe l' oeil de enrique ciapara en artista en la frontera san diego tijuana.webp"
            alt="Vista de obras en la colección trompe l' oeil de enrique ciapara en artista en la frontera san diego tijuana"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </figure>
      </div>
    </section>
  );
}
