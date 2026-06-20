"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useBlurbT } from "../../../lib/i18n-blurb";
import { images } from "./GalleryImages";

const expo = [0.16, 1, 0.3, 1] as const;

// Cuántas piezas se muestran en el collage de introducción.
// Cambia este número para mostrar más o menos imágenes.
const IMAGE_COUNT = 15;

const NAME_MS = 1700;
const STACK_MS_DESKTOP = 90;
const STACK_MS_MOBILE = 170;
const HOLD_MS = 500;

// Posiciones del collage en escritorio — las piezas se reparten alrededor de
// un círculo imaginario en el centro de la pantalla (no de borde a borde),
// con tamaño de pieza mayor que el espacio entre puntos del círculo para que
// se enciman bastante entre sí. Cada una entra deslizándose desde la
// dirección de su propio ángulo, como si convergieran hacia el centro.
const DESKTOP_TILE_W = 30; // vw
const DESKTOP_TILE_H = 38; // vh
const DESKTOP_RADIUS_X = 11; // % del ancho del viewport
const DESKTOP_RADIUS_Y = 9; // % del alto del viewport
const DESKTOP_ROTATIONS = [
  -6, 4, -3, 5, -5, 6, -4, 3, -7, 5, -3, 6, -5, 4, -6,
];

const DESKTOP_SLOTS = DESKTOP_ROTATIONS.map((rot, i) => {
  const angle = (i / DESKTOP_ROTATIONS.length) * Math.PI * 2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const cx = 50 + DESKTOP_RADIUS_X * cos;
  const cy = 50 + DESKTOP_RADIUS_Y * sin;
  return {
    top: `${(cy - DESKTOP_TILE_H / 2).toFixed(1)}%`,
    left: `${(cx - DESKTOP_TILE_W / 2).toFixed(1)}%`,
    w: `${DESKTOP_TILE_W}vw`,
    h: `${DESKTOP_TILE_H}vh`,
    rot,
    from: { x: `${(cos * 35).toFixed(0)}%`, y: `${(sin * 35).toFixed(0)}%` },
  };
});

// En mobile las piezas se encimen directamente unas sobre otras, ocupando
// la mayor parte de la pantalla — mismo lugar, distinta rotación cada vez,
// para que se vean apiladas de forma desordenada.
const MOBILE_ROTATIONS = [
  -11, 4, 9, -3, 13, -7, 2, -15, 6, -1, 11, -9, 3, 8, -5,
];

const MOBILE_SLOTS = MOBILE_ROTATIONS.map((rot) => ({
  top: "13%",
  left: "6%",
  w: "88vw",
  h: "68vh",
  rot,
  from: { x: "0%", y: "10%" },
}));

export default function IntroArchivo00_09() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);

  const collage = images.slice(0, IMAGE_COUNT);

  const [visible, setVisible] = useState(true);
  const [revealCount, setRevealCount] = useState(0);
  const [nameTimerDone, setNameTimerDone] = useState(false);
  const [firstImageReady, setFirstImageReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedMask, setLoadedMask] = useState<boolean[]>(
    Array(collage.length).fill(false),
  );
  const loadedRef = useRef<boolean[]>(Array(collage.length).fill(false));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const phase: "name" | "photos" =
    nameTimerDone && firstImageReady ? "photos" : "name";

  // Precarga las piezas del collage en paralelo.
  useEffect(() => {
    collage.forEach((item, i) => {
      const img = new window.Image();
      const settle = (ok: boolean) => {
        loadedRef.current[i] = ok;
        setLoadedMask((prev) => {
          const next = [...prev];
          next[i] = ok;
          return next;
        });
        if (i === 0 && ok) setFirstImageReady(true);
      };
      img.onload = () =>
        img
          .decode()
          .catch(() => {})
          .finally(() => settle(true));
      img.onerror = () => settle(false);
      img.src = item.src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setNameTimerDone(true), NAME_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  // Va revelando una pieza tras otra, encimándolas hasta cubrir la pantalla.
  useEffect(() => {
    if (phase !== "photos") return;

    intervalRef.current = setInterval(
      () => {
        setRevealCount((prev) => {
          let next = prev + 1;

          while (next < collage.length && loadedRef.current[next] === false) {
            next++;
          }

          if (next >= collage.length) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setTimeout(endIntro, HOLD_MS);
            return collage.length;
          }

          if (!loadedRef.current[next]) return prev;

          return next;
        });
      },
      isMobile ? STACK_MS_MOBILE : STACK_MS_DESKTOP,
    );

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, isMobile]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-archivo"
          className="fixed inset-0 z-9999 bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: expo }}
        >
          {/* Fase de título */}
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
                    className="block text-white font-bold tracking-tight uppercase leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.1 }}
                  >
                    {bT.hero.title1}
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight uppercase leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.25 }}
                  >
                    {bT.hero.title2}
                  </motion.span>
                </div>
                <motion.div
                  className="w-16 h-px bg-white/30 mt-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: expo, delay: 0.7 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fase de collage — cada pieza se queda encimada sobre las anteriores */}
          {phase === "photos" &&
            collage.map((item, i) => {
              if (!loadedMask[i]) return null;
              const revealed = i < revealCount;
              const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
              const slot = slots[i % slots.length];
              return (
                <motion.div
                  key={item.src}
                  className="absolute overflow-hidden rounded-xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
                  style={{
                    top: slot.top,
                    left: slot.left,
                    width: slot.w,
                    height: slot.h,
                    zIndex: i,
                  }}
                  initial={{
                    opacity: 0,
                    x: slot.from.x,
                    y: slot.from.y,
                    scale: isMobile ? 1 : 0.92,
                    rotate: 0,
                  }}
                  animate={
                    revealed
                      ? {
                          opacity: 1,
                          x: "0%",
                          y: "0%",
                          scale: 1,
                          rotate: slot.rot,
                        }
                      : {
                          opacity: 0,
                          x: slot.from.x,
                          y: slot.from.y,
                          scale: isMobile ? 1 : 0.92,
                          rotate: 0,
                        }
                  }
                  transition={
                    i === revealCount - 1
                      ? isMobile
                        ? {
                            opacity: { duration: 0 },
                            x: { duration: 0.4, ease: expo },
                            y: { duration: 0.4, ease: expo },
                            scale: { duration: 0.4, ease: expo },
                            rotate: { duration: 0.4, ease: expo },
                          }
                        : { duration: 0.32, ease: expo }
                      : { duration: 0 }
                  }
                >
                  <img
                    src={item.src}
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
