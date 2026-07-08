"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function FirstYears() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.catalogs.text}
        </h4>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-0">
        <div
          className="relative col-span-2 lg:col-[1/span_6]"
          style={{ transform: "translateY(0px)" }}
        >
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/about/Enrique Ciapara reflexionando en su antiguo estudio en 2010 en la ciudad de Tijuana con sus obras en el fondo.webp"
              alt={isEn ? "Enrique Ciapara in a worn green armchair in his former studio in Tijuana, 2010, with his works in the background" : "Enrique Ciapara reflexionando sobre sillon verde desgastado con ropa casual en su antiguo estudio en 2010 en la ciudad de Tijuana con sus obras en el fondo"}
              className="w-full h-auto aspect-[4/3] object-cover object-center"
            />
          </figure>
        </div>
        <div
          className="relative col-span-2 lg:col-[7/span_6]"
          style={{ transform: "translateY(50px)" }}
        >
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/about/Fotografia casual de enrique ciapara en anterior estudio en 2010 con piezas de fondo.webp"
              alt={isEn ? "Casual photograph of Mexican artist Enrique Ciapara in his former studio, seated in a worn armchair while drinking water in 2010, with works in the background" : "Fotografía casual de artista mexicano Enrique Ciapara en anterior estudio, sentado en un sillón desgastado, mientras toma agua en 2010 con piezas de fondo"}
              className="w-full h-auto aspect-[4/3] object-cover object-center"
            />
          </figure>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mt-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.awards.text}
        </h4>
      </div>
    </section>
  );
}
