"use client";

import { useI18n } from "../../../providers/i18nProvider";
import { useBlurbT } from "../../../lib/i18n-blurb";

export default function Quote2Errores() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);

  return (
    <section className="">
      <div className="px-6">
        <h1 className="text-black/50 w-full text-start my-12 text-[clamp(2rem,4vw,7rem)] md:text-[clamp(3rem,4vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          &ldquo;{bT.quote2.q}&rdquo;
        </h1>
        <p className="text-black/90 w-full text-start mb-24 text-[clamp(1.5rem,3vw,5rem)] md:text-[clamp(2rem,3vw,5rem)] md: block font-bold tracking-tight">
          - {bT.quote2.author}
        </p>
      </div>

      <section className="relative h-[50rem] overflow-hidden bg-black">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center scale-105"
            src={
              "/images/blurb/La despedida pieza en acrilico sobre tela en 122x 213 cm por Enrique Ciapara.webp"
            }
            alt="La despedida pieza elaborada en acrílico sobre tela en 122x 213 cm por el artista de la frontera San Diego Tijuana Enrique Ciapara"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />
        </div>

        {/* Textura de grano */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 pb-16">
          <h1 className="text-white/90 w-full text-center my-12 text-[clamp(3rem,5vw,7rem)] md:text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
            {bT.quote2.qBg}
          </h1>
          <p className="text-white/60 w-full text-start text-[clamp(2rem,3vw,5rem)] block font-bold tracking-tight"></p>
        </div>
      </section>
    </section>
  );
}
