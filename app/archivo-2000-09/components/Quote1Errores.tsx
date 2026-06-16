"use client";

import { useI18n } from "../../providers/i18nProvider";
import { useBlurbT } from "../../lib/i18n-blurb";

export default function Quote1Errores() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);

  return (
    <section className="mb-24">
      <div className="px-6">
        <h1 className="text-black/50 w-full text-start my-12 text-[clamp(2.5rem,5vw,7rem)] md:text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          &ldquo;{bT.quote1.q}&rdquo;
        </h1>
        <p className="text-black/90 w-full text-start mb-24 text-[clamp(1.5rem,3vw,5rem)] md:text-[clamp(2rem,3vw,5rem)] block font-bold tracking-tight">
          - {bT.quote1.author}
        </p>
      </div>

      <div className=" gap-0 items-stretch w-full">
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/blurb/Pieza titulada detritus en tinta sobre papel 101x 406 cm elaborada en 2005 por artista mexicano enrique ciapara.webp"
            }
            alt="Pieza titulada detritus en tinta sobre papel 101x 406 cm elaborada en 2005 por artista mexicano enrique ciapara"
          />
        </div>
      </div>
    </section>
  );
}
