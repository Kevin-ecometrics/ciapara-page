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
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-12">
        <div
          className="relative col-span-2 lg:col-[5/span_8]"
          style={{ transform: "translateY(0px)" }}
        >
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/about/Enrique ciapara retrato en su anterior estudio en 2009 en la ciudad de tijuana.webp"
              alt={isEn ? "Photograph by Stefan Falke at Enrique Ciapara's studio in the city of Tijuana" : "Fotografía por Stefan Falke en el estudio del artista Enrique Ciapara en la ciudad de Tijuana"}
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
