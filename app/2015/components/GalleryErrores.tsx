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
        <div className="w-full h-[45rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={"/images/errores/Pieza 14 colección errores.webp"}
            alt=""
          />
        </div>
        <div className="w-full h-[45rem] overflow-hidden">
          <video
            ref={videoRef}
            src="/images/errores/Video montaje de libro catalogo de errores por Enrique Ciapara avenida revolución 2024.mov"
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-[45rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={"/images/errores/Pieza 15 colección errores.webp"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
