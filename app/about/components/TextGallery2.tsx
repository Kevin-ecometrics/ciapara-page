"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function TextGallery() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.europeFirst.text}
        </h4>
      </div>
      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
        <div className="flex w-full flex-col gap-10 md:w-180 md:gap-14">
          <figure className="mr-auto">
            <img
              src="/images/about/Enrique ciapara retrato en su anterior estudio en 2009 en la ciudad de tijuana.webp"
              alt={isEn ? "Photograph by Stefan Falke at Enrique Ciapara's studio in the city of Tijuana" : "Fotografía por Stefan Falke en el estudio del artista Enrique Ciapara en la ciudad de Tijuana"}
              className="h-auto w-full"
            />
          </figure>
          <figure className="ml-20 md:ml-auto">
            <img
              src="/images/about/Fotografia a detalle de una pieza del artista enrique ciapara en el cubo.webp"
              alt={isEn ? "Close-up photograph of a collage work by abstract artist Enrique Ciapara at El Cubo" : "Fotografia a detalle de una pieza, collage del artista abstracto Enrique Ciapara en El Cubo"}
              className="w-full h-auto md:w-150"
            />
          </figure>
        </div>

        <figure className="mr-20 md:mr-0">
          <img
            src="/images/about/Escultura titulada panadero en la exposicion del 2013 en el cubo por el artista plastico enrique ciapara en tijuana.webp"
            alt={isEn ? "Sculpture titled 'Baker' in the 2013 Trompe-l'œil exhibition at El Cubo by Enrique Ciapara in Tijuana" : "Escultura titulada panadero en la exposicion del 2013 en El Cubo trompe l'œil por el artista plástico Enrique Ciapara en Tijuana"}
            className="w-full h-auto md:w-140"
          />
        </figure>
      </div>
    </section>
  );
}
