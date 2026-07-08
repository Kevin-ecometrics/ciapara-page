"use client";

import { useDragScroll } from "../../../lib/useDragScroll";

const images = [
  {
    src: "/images/News/ElCubo/Conoce la simultaneidad de las obras de enrique ciapara en trompe l’oeil.webp",
    alt: "Simultaneous works by Enrique Ciapara in Trompe-l'œil, exhibited at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/Estudio de enrique ciapara 2013.webp",
    alt: "Enrique Ciapara's studio in Tijuana, Baja California, 2013",
  },
  {
    src: "/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp",
    alt: "Exhibition in Sala 3 of El Cubo gallery by Enrique Ciapara, 2013",
  },
  {
    src: "/images/News/ElCubo/Pieza en exhibición de Trompe l´oeil de enrique ciapara.webp",
    alt: "Work on display in Enrique Ciapara's Trompe-l'œil exhibition in Tijuana",
  },
  {
    src: "/images/News/ElCubo/Pieza de trompe l’oeil colgada en exposicion en el cubo.webp",
    alt: "Trompe-l'œil piece installed in the exhibition at El Cubo by Enrique Ciapara",
  },
  {
    src: "/images/News/ElCubo/Vista de varias piezas de la exposicion trompe l’oeil por enrique ciapara y la curaduria de alberto dilge.webp",
    alt: "Overview of works in the Trompe-l'œil exhibition by Tijuana visual artist Enrique Ciapara, curated by Alberto Dilge",
  },
  {
    src: "/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp",
    alt: "Works from different periods by Enrique Ciapara on display in Trompe-l'œil",
  },
  {
    src: "/images/News/ElCubo/Piezas en hilera de la colección trompe l oeil 2013 de Enrique Ciapara.webp",
    alt: "Pieces in a row from Enrique Ciapara's Trompe-l'œil 2013 collection at El Cubo, Tijuana",
  },
  {
    src: "/images/News/ElCubo/Sala de exposiciones el cubo donde se expuso el trabajo del artista mexicano enrique ciapara.webp",
    alt: "El Cubo exhibition hall where the work of Mexican artist Enrique Ciapara was displayed",
  },
  {
    src: "/images/News/ElCubo/DSC_0134.webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1194.webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1211.webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1230.webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (2).webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (5).webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (7).webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 29062013 (6).webp",
    alt: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
  },
];

export default function Carousel() {
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();

  return (
    <section className="px-6 lg:px-20 pb-24">
      <div
        ref={ref}
        {...handlers}
        className={`scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 cursor-grab lg:-mx-20 lg:px-20 ${
          dragging ? "cursor-grabbing select-none" : ""
        }`}
      >
        {images.map((img) => (
          <figure
            key={img.src}
            className="h-80 w-[85%] shrink-0 overflow-hidden rounded-2xl md:h-125 md:w-2/5 md:min-w-100"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
