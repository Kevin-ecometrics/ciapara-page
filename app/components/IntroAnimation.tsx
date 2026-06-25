"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;
const DISPLAY_MS = 150;
const NAME_MS = 2400;

const imagenes = [
  {
    img: "/IntroAnimation/Pieza 1 del catalogo errores por enrique ciapara en acrilico sobre tela 160 x 122 cm.jpeg",
    title:
      "Pintura sin titulo acrilico sobre tela 160 x 122 cm del catálogo de Enrique Ciapara artista visual de baja california",
    alt: "Primera pieza del catálogo Errores del reconocido artista mexicano Enrique Ciapara en Baja California. Pieza en Acrílico sobre tela 160 x 122 cm",
  },
  {
    img: "/IntroAnimation/Pieza 2 del catalogo de errores por artista visual  enrique ciapara en acrilico sobre tela en dimensiones 160 x 122 cm.jpeg",
    title:
      "Segunda pieza de coleccion errores sin titulo acrilico sobre tela 160 x 122 cm por artista en tijuana enrique ciapara",
    alt: "Segunda pieza de la más reciente colección errores sin título acrílico sobre tela 160 x 122 cm por artista en Tijuana Enrique Ciapara",
  },
  {
    img: "/IntroAnimation/Pieza 3 del catalogo de errores por ciapara elaborada en acrilico sobre tela 200 c 140 cm.jpeg",
    title:
      "Tercera pieza sin nombre del catalogo de errores del artista plastico vanguardista enrique ciapara acrilico sobre tela 200 x 140 cm",
    alt: "Tercera pieza sin título en acrílico sobre tela 200 x 140 cm del artista plástico vanguardista Enrique Ciapara",
  },
  {
    img: "/IntroAnimation/Pieza 4 del catalogo de errores por ciapara elaborada en acrilico sobre tela 200 x 140 cm.jpeg",
    title:
      "Cuarta pieza del catalogo de errores en acrilico sobre tela 200 x 140 cm del pintor enrique ciapara en tijuana",
    alt: "Cuarta pieza de la imperdible colección de Errores del pintor Enrique Ciapara en Tijuana. Acrílico sobre tela 200 x 140 cm",
  },
  {
    img: "/IntroAnimation/Pieza 5 sin titulo catalogo de errores acrilico  sobre tela por enrique ciapara en dimensiones 160 x 122 cm  Pieza 5 sin titulo catalogo de errores acrilico  sobre tela por enrique ciapara en dimensiones 160 x 122 cm.jpeg",
    title:
      "Quinta pieza de la magna coleccion errores por el artista con mas 3 decadas de trayectoria acrilico sobre tela 160 x 122 cm",
    alt: "Quinta pieza de la magna colección de Errores por el artista con más de 3 décadas de trayectoria originario de Tijuana. Acrílico sobre tela 160 x 122 cm",
  },
  {
    img: "/IntroAnimation/Pieza 6 del catalogo de errores en acrilico sobre tela en 160 x 122 cm por artista basado en tijuana enrique ciapara.jpeg",
    title:
      "Sexta pieza sin titulo del catalogo de errores de Enrique Ciapara artista fronterizo acrilico sobre tela 160 x 122 cm",
    alt: "Sexta pieza sin título del catálogo de errores de Enrique Ciapara artista fronterizo acrílico sobre tela 160 x 122 cm",
  },
  {
    img: "/IntroAnimation/Pieza 7 titulada san antonio del catalogo de errores por enrique ciapara en acrilico sobre tela 122 x 107 cm.jpeg",
    title:
      "Septima pieza titulada San antonio del catalogo de errores en acrilico sobre tela 122 x 107 cm por el reconocido Enrique Ciapara",
    alt: "Séptima pieza titulada San Antonio del catálogo de Errores en acrílico sobre tela 122 x 107 cm por el reconocido artista plástico Enrique Ciapara",
  },
  {
    img: "/IntroAnimation/Pieza 8 titulada duetto elaborada en acrilico sobre tela 160 x 122 cm por enrique ciapara.jpeg",
    title:
      "Octava pieza titulada Duetto del catalogo de errores en acrilico sobre tela 160 x 122 cm por enrique ciapara",
    alt: "Octava pieza titulada Duetto del catálogo de Errores. Acrílico sobre tela 160 x 122 cm por Enrique Ciapara",
  },
  {
    img: "/IntroAnimation/Pieza 9 Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara 2019.jpeg",
    title:
      "Novena pieza del catalogo de errores titulada Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara",
    alt: "Novena pieza del catálogo de Errores titulada Banquete en el Pinar. Acrílico sobre tela 152 x 429 cm por el artista Enrique Ciapara",
  },
  {
    img: "/IntroAnimation/Pieza 10 el tigre en acrilico sobre tela en 160 x 122 cm por enrique ciapara.jpeg",
    title:
      "Decima obra del catalogo de errores titulada el tigre por el artista enrique ciapara acrilico sobre tela 160 x 122 cm",
    alt: "Décima obra del catálogo de Errores titulada El Tigre por el artista mexicano Enrique Ciapara. Acrílico sobre tela 160 x 122 cm",
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
  const [visible, setVisible] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [nameTimerDone, setNameTimerDone] = useState(false);
  const [firstImageReady, setFirstImageReady] = useState(false);
  // loadedMask drives rendering (state); loadedRef drives interval logic (no stale closure)
  const [loadedMask, setLoadedMask] = useState<boolean[]>(
    Array(imagenes.length).fill(false),
  );
  const loadedRef = useRef<boolean[]>(Array(imagenes.length).fill(false));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const skipRef = useRef(false);

  // Derive phase from state — no setState-in-effect
  const phase: "name" | "photos" =
    nameTimerDone && firstImageReady ? "photos" : "name";

  // Parallel preload with decode() — GPU-ready before animating
  useEffect(() => {
    if (sessionStorage.getItem("skip-intro") === "1") {
      sessionStorage.removeItem("skip-intro");
      skipRef.current = true;
      setVisible(false);
      return;
    }
    imagenes.forEach((item, i) => {
      const img = new window.Image();
      const settle = (ok: boolean) => {
        loadedRef.current[i] = ok;
        setLoadedMask((prev) => {
          const next = [...prev];
          next[i] = ok;
          return next;
        });
        setLoadedCount((c) => c + 1);
        if (i === 0 && ok) setFirstImageReady(true);
      };
      img.onload = () =>
        img
          .decode()
          .catch(() => {})
          .finally(() => settle(true));
      img.onerror = () => settle(false);
      img.src = item.img;
    });
  }, []);

  // Name phase minimum timer
  useEffect(() => {
    if (skipRef.current) return;
    const t = setTimeout(() => setNameTimerDone(true), NAME_MS);
    return () => clearTimeout(t);
  }, []);

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

  const endIntro = () => {
    setVisible(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  // Slideshow — reads loadedRef so the closure is always fresh
  useEffect(() => {
    if (phase !== "photos") return;

    intervalRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        let next = prev + 1;

        // Skip images that failed to load
        while (next < imagenes.length && loadedRef.current[next] === false) {
          next++;
        }

        if (next >= imagenes.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setTimeout(endIntro, 120);
          return prev;
        }

        // Hold current frame if next not decoded yet (slow connection)
        if (!loadedRef.current[next]) return prev;

        return next;
      });
    }, DISPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: expo }}
        >
          {/* Name phase */}
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
                    {loadedCount >= imagenes.length
                      ? "listo"
                      : `${loadedCount} / ${imagenes.length}`}
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* All loaded images pre-rendered as layers — no mount/unmount flicker */}
          {phase === "photos" &&
            imagenes.map((item, i) => {
              if (!loadedMask[i]) return null;
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
                          opacity: { duration: 0.06, ease: "linear" },
                          x: { duration: 0.12, ease: expo },
                          y: { duration: 0.12, ease: expo },
                          scale: { duration: 0.15, ease: expo },
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
