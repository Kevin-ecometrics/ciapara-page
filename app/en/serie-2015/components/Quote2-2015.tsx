"use client";

import { useI18n } from "../../../providers/i18nProvider";
import { use2015T } from "../../../lib/i18n-2015";

export default function Quote2Errores() {
  const { locale } = useI18n();
  const t2015 = use2015T(locale);

  return (
    <section className="relative h-[50rem] overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center scale-105"
          src={
            "/images/2015/Pieza gran cañon acrilico sobre tela 213x 122 cm por enrique ciapara.webp"
          }
          alt="Pieza gran cañon elaboradaen acrilico sobre tela 213x 122 cm por Enrique ciapara artista abstracto en Tijuana"
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
        <h1 className="text-white/90 w-full text-start my-12 text-[clamp(3rem,5vw,7rem)] md:text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          &ldquo;{t2015.quote2.q}&rdquo;
        </h1>
        <p className="text-white/60 w-full text-start text-[clamp(2rem,3vw,5rem)] block font-bold tracking-tight">
          - {t2015.quote2.author}
        </p>
      </div>
    </section>
  );
}
