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
      <div className="mt-10 max-w-5xl mx-auto space-y-8 lg:space-y-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-0">
          <div
            className="relative col-span-2 lg:col-[1/span_7]"
            style={{ transform: "translateY(30px)" }}
          >
            <figure className="overflow-hidden rounded-2xl">
              <img
                src="/images/about/Enrique cipara observando sus piezas en una galeria.webp"
                alt={isEn ? "Tijuana-based artist Enrique Ciapara standing with his back turned, contemplating his works in a gallery" : "Artista basado en Tijuana Enrique Ciapara de pie, de espaldas pensativo observando sus piezas en una galería"}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </figure>
          </div>
          <div
            className="relative col-span-2 lg:col-[8/span_5]"
            style={{ transform: "translateY(0px)" }}
          >
            <figure className="overflow-hidden rounded-2xl">
              <img
                src="/images/about/Retrato en blanco y negro del artista enrique ciapara entre dos de sus obras.webp"
                alt={isEn ? "Black-and-white portrait photograph of artist Enrique Ciapara standing between two of his works in his studio, 2024" : "Fotografía de retrato en blanco y negro del artista Enrique Ciapara entre dos de sus obras en su estudio 2024"}
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12">
          <div
            className="relative col-span-2 lg:col-[3/span_7]"
            style={{ transform: "translateY(0px)" }}
          >
            <figure className="overflow-hidden rounded-2xl">
              <img
                src="/images/about/Sala de exposiciones el cubo donde se expuso el trabajo del artista mexicano enrique ciapara.webp"
                alt={isEn ? "General view of multiple works from the Trompe-l'œil collection at El Cubo by Mexican artist Enrique Ciapara" : "Vista general de varias piezas de la colección titulada trompe-l'œil en la sala de exposiciones de El Cubo por el artista mexicano Enrique Ciapara"}
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
