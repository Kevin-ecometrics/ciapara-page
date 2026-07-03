"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function TextGallery() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.mentors.text}
        </h4>
      </div>
      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
        <div className="flex w-full flex-col gap-10 md:w-180 md:gap-14">
          <figure className="mr-auto">
            <img
              src="/images/about/Exposicion en el cubo trompe l oeil con piezas y television con video los 15 errores mas comunes en la pintura.webp"
              alt={isEn ? "Exhibition at El Cubo in Tijuana titled Trompe-l'œil featuring an altered television showing: the 15 most common errors in painting, by Enrique Ciapara" : "Exposición en tijuana en El Cubo titulada Trompe l'œil con piezas y una pieza intervenida de una televisión presentando: los 15 errores más comunes en la pintura por el artista Enrique Ciapara"}
              className="h-auto w-full"
            />
          </figure>
          <figure className="ml-20 md:ml-auto">
            <img
              src="/images/about/Retrado de Enrique Ciapara en 2011 en anterior estudio en Tijuana.webp"
              alt={isEn ? "Portrait of artist Enrique Ciapara seated on a sofa behind an old television in his former studio in Tijuana, 2011" : "Retratado del artista Enrique Ciapara sentado en un sofa detrás de un televisor antiguo en su anterior estudio en Tijuana en el año 2011"}
              className="w-full h-auto md:w-150"
            />
          </figure>
        </div>

        <figure className="mr-20 md:mr-0">
          <img
            src="/images/about/Poliptico de mas de 300 dibujos en tinta por enrique ciapara expuestos en CECUT anio 2013.webp"
            alt={isEn ? "Polyptych of more than 300 ink-on-paper drawings by Enrique Ciapara exhibited in the Trompe-l'œil collection at Centro Cultural Tijuana" : "Políptico de más de 300 dibujos en técnica de tinta sobre papel por artista Enrique Ciapara expuestos en colección Trompe-l'œil en el Centro Cultural Tijuana"}
            className="w-full h-auto md:w-140"
          />
        </figure>
      </div>
    </section>
  );
}
