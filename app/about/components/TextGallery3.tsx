"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function TextGallery() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.recentShows.text}
        </h4>
      </div>
      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
        <div className="flex w-full flex-col gap-10 md:w-180 md:gap-14">
          <figure className="mr-20">
            <img
              src="/images/about/Enrique cipara observando sus piezas en una galeria.webp"
              alt={isEn ? "Tijuana-based artist Enrique Ciapara standing with his back turned, contemplating his works in a gallery" : "Artista basado en Tijuana Enrique Ciapara de pie, de espaldas pensativo observando sus piezas en una galería"}
              className="h-auto w-full"
            />
          </figure>
          <figure className="ml-auto md:ml-auto">
            <img
              src="/images/about/Fotografia de exposicion de enrique ciapara en 2013 en el cubo.webp"
              alt={isEn ? "Photograph of works already hung alongside others still being arranged at Enrique Ciapara's 2013 exhibition at El Cubo" : "Fotografía de piezas ya colgadas y otras aún sin acomodar en la exposición de Enrique Ciapara en 2013 en el cubo"}
              className="w-full h-auto md:w-150"
            />
          </figure>
        </div>

        <figure className="ml-20 md:ml-0">
          <img
            src="/images/about/Retrato en blanco y negro del artista enrique ciapara entre dos de sus obras.webp"
            alt={isEn ? "Black-and-white portrait photograph of artist Enrique Ciapara standing between two of his works in his studio, 2024" : "Fotografía de retrato en blanco y negro del artista Enrique Ciapara entre dos de sus obras en su estudio 2024"}
            className="w-full h-auto md:w-140"
          />
        </figure>
      </div>
    </section>
  );
}
