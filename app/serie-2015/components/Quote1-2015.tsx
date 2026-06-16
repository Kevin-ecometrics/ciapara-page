"use client";

import { useI18n } from "../../providers/i18nProvider";
import { use2015T } from "../../lib/i18n-2015";

export default function Quote1Errores() {
  const { locale } = useI18n();
  const t2015 = use2015T(locale);

  return (
    <section className="mb-24">
      <div className="px-6">
        <h1 className="text-black/50 w-full text-start my-12 text-[clamp(2rem,4vw,7rem)] md:text-[clamp(3rem,4vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          &ldquo;{t2015.quote1.q}&rdquo;
        </h1>
        <p className="text-black/90 w-full text-start mb-24 text-[clamp(1.5rem,3vw,5rem)] block font-bold tracking-tight">
          - {t2015.quote1.author}
        </p>
      </div>

      <div className=" gap-0 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-5xl rounded-2xl h-[50rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/2015/Pieza dulce del dia de brujas acrilico sobre tela 122x 141 cm por pintor enrique ciapara.webp"
            }
            alt="Pieza dulce del dia de brujas acrilico sobre tela 122x 141 cm por pintor enrique ciapara"
          />
        </div>
      </div>
    </section>
  );
}
