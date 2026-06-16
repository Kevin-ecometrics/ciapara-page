"use client";

import { useRef, useState, useEffect } from "react";

const images = [
  {
    src: "/images/2015/Pieza cipres acrilico sobre tela 122 x 80 cm  por enrique ciapara.webp",
    alt: "ieza ciprés acrílico sobre tela 122 x 80 cm  por Enrique Ciapara artista visual mexicano inspirado en la arquitectura de Tijuana",
  },
  {
    src: "/images/2015/Pieza Cielo acrilico sobre tela 213x 122 cm por ciapara artista basado en tijuana.webp",
    alt: "Pieza Cielo elaborado en acrilico sobre tela 213x 122 cm por ciapara artista basado en tijuana, inspirado en rotulos de comida callejera ",
  },
  {
    src: "/images/2015/Pieza ensenada acrilico sobre tela 213x 122 cm por artista de la frontera san diego tijuana.webp",
    alt: "Pieza ensenada acrílico sobre tela 213x 122 cm por artista de la frontera San Diego Tijuana inspirado en Ensenada Baja California  ",
  },
];

export default function CarouselErrores() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragRef = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current = {
      dragging: true,
      startX: e.pageX,
      scrollLeft: el.scrollLeft,
    };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }

  function onMouseMove(e: React.MouseEvent) {
    const el = scrollRef.current;
    if (!el || !dragRef.current.dragging) return;
    el.scrollLeft =
      dragRef.current.scrollLeft - (e.pageX - dragRef.current.startX);
  }

  function onMouseUp() {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current.dragging = false;
    el.style.cursor = "grab";
    el.style.userSelect = "";
    // snap al slide más cercano
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    goTo(index);
  }

  function goTo(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
  }

  return (
    <section className="w-full overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-black/ w-full text-center my-24 text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.88] px-6 uppercase">
        Su obra se encuentra una síntesis cultural entre lo bajacaliforniano y
        lo mediterráneo
      </h1>

      {/* Desktop — grilla de 3 columnas */}
      <div className="hidden md:grid grid-cols-3 gap-0 items-stretch w-full pb-24">
        {images.map((img) => (
          <div key={img.src} className="w-full h-[45rem] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>

      {/* Mobile — carrusel con scroll snap */}
      <div className="md:hidden w-full pb-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="w-full shrink-0 snap-center h-[30rem] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover object-center pointer-events-none"
                src={img.src}
                alt={img.alt}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Dots de navegación */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-5 h-1.5 bg-black"
                  : "w-1.5 h-1.5 bg-black/25"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
