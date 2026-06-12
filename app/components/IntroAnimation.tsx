"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;
const DISPLAY_MS = 420;
const MAX_WAIT_MS = 8000;

const imagenes = [
  {
    img: "/images/IMAGEN 1.webp",
    title:
      "Pintura sin titulo acrilico sobre tela 160x 120 cm del catálogo de Enrique Ciapara artista visual de baja california",
    alt: "Primera pieza del catálogo Errores del reconocido artista mexicano Enrique Ciapara en Baja California .Pieza en Acrílico sobre tela 160 x 120 cm",
  },
  {
    img: "/images/IMAGEN 2.webp",
    title:
      "Segunda pieza de coleccion errores sin titulo  acrilico sobre tela 160 x 122 cm por artista en tijuana enrique ciapara",
    alt: "Segunda pieza de la más reciente  colección errores sin título  acrílico sobre tela 160 x 122 cm por artista en Tijuana Enrique Ciapar",
  },
  {
    img: "/images/IMAGEN 3.webp",
    title:
      "Tercera pieza sin nombre del catalogo de errores del artista plastico vanguardista enrique ciapara acrilico sobre tela 200x 140 cm",
    alt: "Tercera pieza sin titulo en acrílico sobre tela 200x 140 cm del artista plástico vanguardista Enriqe Ciapara",
  },
  {
    img: "/images/IMAGEN 4.webp",
    title:
      "Cuarta pieza del catalogo de errores en acrilico sobre tela 200x 140 cm del pintor enrique ciapara en tijuana",
    alt: "Cuarta pieza de la imperdible colección de Errores del pintor Enrique Ciapara en Tijuana. Acrílico sobre tela 200 x 140 cm",
  },
  {
    img: "/images/IMAGEN 5.webp",
    title:
      "Quinta pieza de la magna coleccion errores por el artista con mas 3 decadas de trayectoria acrilico sobre tela 160 x 122 cm",
    alt: "Quinta pieza de la magna colección de Errores por el artista con más de 3 décadas de trayectoria originario de la Ciudad de Tijuana. Acrílico sobre tela 160x 122 cm",
  },
  {
    img: "/images/IMAGEN 6.webp",
    title:
      "Sexta pieza sin titulo del catalogo de errores de Enrique Ciapara artista fronterizo acrilico sobre tela 160x 120 cm",
    alt: "Sexta pieza sin título del catálogo de errores de Enrique Ciapara artista fronterizo acrílico sobre tela 160x 120 cm",
  },
  {
    img: "/images/IMAGEN 7.webp",
    title:
      "Septima pieza titulada San antonio Souvenir del valle en acrilico sobre tela 122x 107 cm por el reconocido Enrique Ciapara",
    alt: "Septima pieza titulada San Antonio Souvenir del Valle en acrílico sobre tela 122x 107 cm por el reconocido artista plástico Enrique Ciapara",
  },
  {
    img: "/images/IMAGEN 8.webp",
    title:
      "Octava pieza titulada Duetto souvenir del valle del catalogo de errores en acrilico sobre tela 160 x 122 cm",
    alt: "Octava pieza titulada Duetto Souvenir del Valle de la colección  catálogo de Errores. Acrílico sobre tela 160 x 122 cm",
  },
  {
    img: "/images/IMAGEN 9.webp",
    title:
      "Novena pieza del catalogo de errores titulada Banquete en el pinar souvenir del valle acrilico sobre tela 152x 429 cm",
    alt: "Novena piea del catalogo de errores titulado Banquete en el pinar Souvenir del valle Acrílico sobre tela 152x 429 cm por el artista Enrique Ciapara",
  },
  {
    img: "/images/IMAGEN 10.webp",
    title:
      "Decima obra del catalogo de errores tilulada el tigre por el artista enrique ciapara acrilico sobre tela 160x 122 cm",
    alt: "Decima obra del cátalogo de Errores titulada El tigre por el artista mexicano Enrique Ciapara. Acrílico sobre",
  },
];

const ENTER_FROM = [
  { x: "4%", y: "0%" },
  { x: "-4%", y: "0%" },
  { x: "0%", y: "3%" },
  { x: "0%", y: "-3%" },
  { x: "3%", y: "2%" },
  { x: "-3%", y: "-2%" },
  { x: "4%", y: "-2%" },
  { x: "-4%", y: "2%" },
  { x: "0%", y: "3%" },
  { x: "3%", y: "-3%" },
];

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"name" | "photos">("name");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [readyImages, setReadyImages] = useState<typeof imagenes>([]);
  const [imagesReady, setImagesReady] = useState(false);
  const [nameTimerDone, setNameTimerDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preload with decode() — guarantees pixels are GPU-ready before animating
  useEffect(() => {
    setVisible(true);
    const resolved = new Set<string>();
    let settled = 0;

    const finish = () => {
      const ordered = imagenes.filter((item) => resolved.has(item.img));
      setReadyImages(ordered);
      setImagesReady(true);
    };

    const maxWait = setTimeout(finish, MAX_WAIT_MS);

    imagenes.forEach((item) => {
      const img = new window.Image();
      const settle = (ok: boolean) => {
        if (ok) resolved.add(item.img);
        settled += 1;
        setLoadedCount(settled);
        if (settled === imagenes.length) {
          clearTimeout(maxWait);
          finish();
        }
      };
      img.onload = () =>
        img
          .decode()
          .catch(() => {})
          .finally(() => settle(true));
      img.onerror = () => settle(false);
      img.src = item.img;
    });

    return () => clearTimeout(maxWait);
  }, []);

  // Minimum display time for name phase
  useEffect(() => {
    const t = setTimeout(() => setNameTimerDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  // Transition to photos only when both conditions met
  useEffect(() => {
    if (imagesReady && nameTimerDone) setPhase("photos");
  }, [imagesReady, nameTimerDone]);

  // Scroll lock
  useEffect(() => {
    if (!visible) return;
    const prevent = (e: TouchEvent) => e.preventDefault();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", prevent, { passive: false });
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", prevent);
    };
  }, [visible]);

  // setInterval is more reliable than chained setTimeouts for consistent cadence
  useEffect(() => {
    if (phase !== "photos" || readyImages.length === 0) return;

    intervalRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        const next = prev + 1;
        if (next >= readyImages.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setTimeout(() => {
            setVisible(false);
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
          }, 600);
          return prev;
        }
        return next;
      });
    }, DISPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase, readyImages.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-9999 bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: expo }}
        >
          {/* Name + loader — sits above photos during its exit */}
          <AnimatePresence mode="sync">
            {phase === "name" && (
              <motion.div
                key="name"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center"
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: expo }}
              >
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.1 }}
                  >
                    ENRIQUE
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.25 }}
                  >
                    CIAPARA
                  </motion.span>
                </div>
                <motion.div
                  className="w-16 h-px bg-white/30 mt-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: expo, delay: 0.7 }}
                />

                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 flex flex-col items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <div className="w-full h-px bg-white/15 overflow-hidden">
                    <motion.div
                      className="h-full bg-white/60 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: loadedCount / imagenes.length }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-white/40 text-[10px] tracking-widest uppercase font-light">
                    {imagesReady ? "listo" : `${loadedCount} / ${imagenes.length}`}
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* All images pre-rendered — no mount/unmount during slideshow */}
          {phase === "photos" &&
            readyImages.map((item, i) => {
              const isCurrent = i === photoIndex;
              const isPast = i < photoIndex;
              const from = ENTER_FROM[i % ENTER_FROM.length];
              return (
                <motion.div
                  key={item.img}
                  className="absolute inset-0"
                  style={{ zIndex: i }}
                  initial={{ opacity: 0, x: from.x, y: from.y, scale: 1.04 }}
                  animate={
                    isCurrent || isPast
                      ? { opacity: 1, x: "0%", y: "0%", scale: 1 }
                      : { opacity: 0, x: from.x, y: from.y, scale: 1.04 }
                  }
                  transition={
                    isCurrent
                      ? {
                          opacity: { duration: 0.1, ease: "linear" },
                          x: { duration: 0.2, ease: expo },
                          y: { duration: 0.2, ease: expo },
                          scale: { duration: 0.25, ease: expo },
                        }
                      : { duration: 0 }
                  }
                >
                  <img
                    src={item.img}
                    title={item.title}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
