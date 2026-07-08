"use client";

import { useI18n } from "../../providers/i18nProvider";
import { useDragScroll } from "../../lib/useDragScroll";

const images = [
  {
    src: "/images/News/ElCubo/Conoce la simultaneidad de las obras de enrique ciapara en trompe l’oeil.webp",
    alt: "Conoce la simultaneidad de las obras de Enrique Ciapara en Trompe l'œil, obra del 2013 expuesta en El Cubo en Tijuana",
    altEn: "Simultaneous works by Enrique Ciapara in Trompe-l'œil, exhibited at El Cubo, Tijuana, 2013",
    altFr: "Simultanéité des œuvres d'Enrique Ciapara dans Trompe l'œil, exposée à El Cubo, Tijuana, 2013",
    altCa: "Simultaneïtat de les obres d'Enrique Ciapara a Trompe l'oeil, exposada a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/Estudio de enrique ciapara 2013.webp",
    alt: "Estudio de Enrique Ciapara en 2013, en Tijuana, Baja California",
    altEn: "Enrique Ciapara's studio in Tijuana, Baja California, 2013",
    altFr: "Atelier d'Enrique Ciapara à Tijuana, Basse-Californie, 2013",
    altCa: "Estudi d'Enrique Ciapara a Tijuana, Baixa Califòrnia, 2013",
  },
  {
    src: "/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp",
    alt: "Exhibición en la sala 3 de la galería El Cubo de Enrique Ciapara en 2013",
    altEn: "Exhibition in Sala 3 of El Cubo gallery by Enrique Ciapara, 2013",
    altFr: "Exposition dans la salle 3 de la galerie El Cubo par Enrique Ciapara, 2013",
    altCa: "Exposició a la sala 3 de la galeria El Cubo d'Enrique Ciapara, 2013",
  },
  {
    src: "/images/News/ElCubo/Pieza en exhibición de Trompe l´oeil de enrique ciapara.webp",
    alt: "Pieza en exhibición de Trompe l'œil de Enrique Ciapara en Tijuana",
    altEn: "Work on display in Enrique Ciapara's Trompe-l'œil exhibition in Tijuana",
    altFr: "Œuvre exposée dans le cadre de Trompe l'œil d'Enrique Ciapara à Tijuana",
    altCa: "Peça exposada a Trompe l'oeil d'Enrique Ciapara a Tijuana",
  },
  {
    src: "/images/News/ElCubo/Pieza de trompe l’oeil colgada en exposicion en el cubo.webp",
    alt: "Pieza de Trompe l'œil colgada en la exposición de Enrique Ciapara en El Cubo",
    altEn: "Trompe-l'œil piece installed in the exhibition at El Cubo by Enrique Ciapara",
    altFr: "Pièce de Trompe l'œil accrochée dans l'exposition d'Enrique Ciapara à El Cubo",
    altCa: "Peça de Trompe l'oeil penjada a l'exposició d'Enrique Ciapara a El Cubo",
  },
  {
    src: "/images/News/ElCubo/Vista de varias piezas de la exposicion trompe l’oeil por enrique ciapara y la curaduria de alberto dilge.webp",
    alt: "Vista de varias piezas de la exposición Trompe l'œil por Enrique Ciapara, con la curaduría de Alberto Dilge",
    altEn: "Overview of works in the Trompe-l'œil exhibition by Tijuana visual artist Enrique Ciapara, curated by Alberto Dilge",
    altFr: "Vue de plusieurs œuvres de l'exposition Trompe l'œil par Enrique Ciapara, sous le commissariat d'Alberto Dilge",
    altCa: "Vista de diverses peces de l'exposició Trompe l'oeil d'Enrique Ciapara, amb la curadoria d'Alberto Dilge",
  },
  {
    src: "/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp",
    alt: "Piezas en exhibición de Trompe l'œil, muestra que comprende obra de distintas épocas de Enrique Ciapara",
    altEn: "Works from different periods by Enrique Ciapara on display in Trompe-l'œil",
    altFr: "Œuvres de différentes époques d'Enrique Ciapara exposées dans Trompe l'œil",
    altCa: "Obres de diferents èpoques d'Enrique Ciapara exposades a Trompe l'oeil",
  },
  {
    src: "/images/News/ElCubo/Piezas en hilera de la colección trompe l oeil 2013 de Enrique Ciapara.webp",
    alt: "Piezas en hilera de la colección Trompe l'œil 2013 de Enrique Ciapara en El Cubo, Tijuana",
    altEn: "Pieces in a row from Enrique Ciapara's Trompe-l'œil 2013 collection at El Cubo, Tijuana",
    altFr: "Œuvres alignées de la collection Trompe l'œil 2013 d'Enrique Ciapara à El Cubo, Tijuana",
    altCa: "Peces en filera de la col·lecció Trompe l'oeil 2013 d'Enrique Ciapara a El Cubo, Tijuana",
  },
  {
    src: "/images/News/ElCubo/Sala de exposiciones el cubo donde se expuso el trabajo del artista mexicano enrique ciapara.webp",
    alt: "Sala de exposiciones de El Cubo donde se expuso el trabajo del artista mexicano Enrique Ciapara",
    altEn: "El Cubo exhibition hall where the work of Mexican artist Enrique Ciapara was displayed",
    altFr: "Salle d'exposition d'El Cubo où fut présenté le travail de l'artiste mexicain Enrique Ciapara",
    altCa: "Sala d'exposicions d'El Cubo on es va exposar el treball de l'artista mexicà Enrique Ciapara",
  },
  {
    src: "/images/News/ElCubo/DSC_0134.webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1194.webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1211.webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/DSC_1230.webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (2).webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (5).webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 02072013 (7).webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
  {
    src: "/images/News/ElCubo/AF87 29062013 (6).webp",
    alt: "Fotografía de la exposición Trompe l'œil de Enrique Ciapara en El Cubo, Tijuana, 2013",
    altEn: "Photograph from Enrique Ciapara's Trompe-l'œil exhibition at El Cubo, Tijuana, 2013",
    altFr: "Photographie de l'exposition Trompe l'œil d'Enrique Ciapara à El Cubo, Tijuana, 2013",
    altCa: "Fotografia de l'exposició Trompe l'oeil d'Enrique Ciapara a El Cubo, Tijuana, 2013",
  },
];

export default function Carousel() {
  const { locale } = useI18n();
  const { ref, dragging, handlers } = useDragScroll<HTMLDivElement>();

  function getAlt(img: (typeof images)[number]): string {
    if (locale === "en") return img.altEn;
    if (locale === "fr") return img.altFr;
    if (locale === "ca") return img.altCa;
    return img.alt;
  }

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
              alt={getAlt(img)}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
