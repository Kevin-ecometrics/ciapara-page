"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function FirstYears() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.firstYears.text}
        </h4>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-0">
        <div
          className="relative col-span-2 lg:col-[1/span_6]"
          style={{ transform: "translateY(30px)" }}
        >
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/about/Ciapara es un artista originario de la ciudad de tijuana donde tiene su estudio.webp"
              alt={isEn ? "Enrique Ciapara, artist from Tijuana, photographed in his studio among his works" : "Enrique Ciapara es un artista originario de la ciudad de Tijuana donde tiene su estudio y fue retratado de forma orgánica transitando entre sus piezas"}
              className="w-full h-auto aspect-[3/4] object-cover object-center"
            />
          </figure>
        </div>
        <div
          className="relative col-span-2 lg:col-[7/span_6]"
          style={{ transform: "translateY(0px)" }}
        >
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/about/Retrato del 2024 del artista plastico enrique ciapara.webp"
              alt={isEn ? "2024 portrait of visual artist Enrique Ciapara among his works in his Tijuana studio" : "Retrato del año 2024 del artista plástico Enrique Ciapara detrás de sus piezas en su estudio en Tijuana"}
              className="w-full h-auto aspect-[3/4] object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
