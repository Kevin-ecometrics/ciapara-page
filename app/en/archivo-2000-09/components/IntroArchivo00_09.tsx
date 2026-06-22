"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useBlurbT } from "../../../lib/i18n-blurb";
import { images } from "./GalleryImages";

const expo = [0.16, 1, 0.3, 1] as const;
const DISPLAY_MS = 150;
const NAME_MS = 2400;
const IMAGE_COUNT = 10;

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

export default function IntroArchivo00_09() {
  const { locale } = useI18n();
  const bT = useBlurbT(locale);
  const imagenes = images.slice(0, IMAGE_COUNT);

  const [visible, setVisible] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [nameTimerDone, setNameTimerDone] = useState(false);
  const [firstImageReady, setFirstImageReady] = useState(false);
  const [loadedMask, setLoadedMask] = useState<boolean[]>(
    Array(imagenes.length).fill(false),
  );
  const loadedRef = useRef<boolean[]>(Array(imagenes.length).fill(false));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const skipRef = useRef(false);

  const phase: "name" | "photos" =
    nameTimerDone && firstImageReady ? "photos" : "name";

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
      img.src = item.src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (skipRef.current) return;
    const t = setTimeout(() => setNameTimerDone(true), NAME_MS);
    return () => clearTimeout(t);
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

  useEffect(() => {
    if (phase !== "photos") return;

    intervalRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        let next = prev + 1;

        while (next < imagenes.length && loadedRef.current[next] === false) {
          next++;
        }

        if (next >= imagenes.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setTimeout(endIntro, 120);
          return prev;
        }

        if (!loadedRef.current[next]) return prev;

        return next;
      });
    }, DISPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-archivo"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
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

          {/* Todas las imágenes cargadas se pre-renderizan como capas — sin parpadeo al montar/desmontar */}
          {phase === "photos" &&
            imagenes.map((item, i) => {
              if (!loadedMask[i]) return null;
              const isCurrent = i === photoIndex;
              const isPast = i < photoIndex;
              const from = ENTER_FROM[i % ENTER_FROM.length];
              return (
                <motion.div
                  key={item.src}
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
                    src={item.src}
                    title={item.alt}
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
