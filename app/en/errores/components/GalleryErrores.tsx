"use client";

import { useEffect, useRef } from "react";

export default function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch w-full pb-24">
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/errores/Pieza 14 cascada souvenir del valle acrilico sobre tela 200x 140 cm  por Ciapara artista mexicano.webp"
            }
            alt="Pieza 14 Cascada Souvenir del Valle en acrílico sobre tela en 200x 140 cm del creado por el artista mexicano Enrique Ciapara en 2019"
          />
        </div>
        <div className="w-full h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            aria-label="Video de libro de última colección errores por Enrique Ciapara en noviembre de 2024 en Avenida revolución Tijuana"
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/images/errores/Video montaje de libro catalogo de errores por enrique ciapara avenida revolución 2024.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/errores/Pieza 15 catálogo de errores acrílico sobre tela 160 x 122 cm realizado por enrique ciapara artista en tijuana.webp"
            }
            alt="Pieza 15 catálogo de errores hecha en acrílico sobre tela 160x 122 m realizado por Enrique Ciapara Artista radicado en Tijuana"
          />
        </div>
      </div>
    </section>
  );
}
