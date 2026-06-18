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
            className="w-full h-full object-cover object-center "
            src={
              "/images/2015/Pieza paisaje acrilico sobre tela 122x 95 cm por artista enrique ciapara en tijuana.webp"
            }
            alt="Pieza elaborada en 2015 titulada paisaje en  acrílico sobre tela 122x 95 cm por artista Enrique Ciapara en Tijuana"
          />
        </div>
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/2015/Pieza 8bit acrilico sobre tela 124x 107 cm Por enrique ciapara artista plastico en tijuana.webp"
            }
            alt="Pieza 8bit elaborado en  acrílico sobre tela 124x 107 cm Por Enrique ciapara artista plastico en tijuana elaborado durante 2015 "
          />
        </div>
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/2015/Pieza lontananza acrilico sobre tela 122x 122 cm por enrique ciapara artista visual de bajacaliforniando.webp"
            }
            alt="Pieza titulada lontananza elaborada en acrílico sobre tela 122x 122 cm por Enrique Ciapara artista visual de bajacaliforniando"
          />
        </div>
      </div>
    </section>
  );
}
