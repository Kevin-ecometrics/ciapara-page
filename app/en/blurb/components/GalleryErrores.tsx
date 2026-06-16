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
              "/images/blurb/Pieza sin titulo elaborada en tecnica mixta sobre papel en 130x 90 cm por arista abstracto enrique ciapara.webp"
            }
            alt="Pieza sin título elaborada en técnica mixta sobre papel en 130x 90 cm por arista abstracto mexicano Enrique Ciapara"
          />
        </div>
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/blurb/Obra sin titulo en tecnica mixta sobre papel en 130x 90 cm elaborada en 2001 por Enrique Ciapara artista de la frontera sandiego tijuana.webp"
            }
            alt="Obra sin título en técnica mixta sobre papel en 130 x 90 cm elaborada en 2001 por el artista plástico Enrique Ciapara que vive en la frontera San Diego Tijuana"
          />
        </div>
        <div className="w-full h-[35rem] md:h-[45rem] overflow-hidden rounded-2xl shadow-2xl">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/blurb/El inmortal pieza en tecnica mixta sobre papel en 130x 90 cm por el pintor enrique ciapara.webp"
            }
            alt="El inmortal pieza en técnica mixta sobre papel en 130x 90 cm por el pintor mexicano Enrique Ciapara"
          />
        </div>
      </div>
    </section>
  );
}
