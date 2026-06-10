"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useSpring,
} from "motion/react";

const GRAY = "#C2C2C2";
const BLACK = "#1A1916";

export default function Letters() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const chdRef = useRef<HTMLSpanElement>(null);
  const artRef = useRef<HTMLSpanElement>(null);
  const makerRef = useRef<HTMLSpanElement>(null);

  const rawLine2X = useMotionValue(0);
  const rawLine3X = useMotionValue(0);

  // Spring para movimiento fluido
  const line2X = useSpring(rawLine2X, { stiffness: 60, damping: 20, mass: 0.8 });
  const line3X = useSpring(rawLine3X, { stiffness: 60, damping: 20, mass: 0.8 });

  const offsetsRef = useRef({ line2: 0, line3: 0 });

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  // La animación termina al 65% del scroll — el 35% restante es el "pause" alineado
  const animProgress = useTransform(scrollYProgress, [0, 0.65], [0, 1], {
    clamp: true,
  });

  const lineColor = useTransform(animProgress, [0.55, 1], [GRAY, BLACK]);

  useEffect(() => {
    const measure = () => {
      if (!chdRef.current || !artRef.current || !makerRef.current) return;
      const anchor = chdRef.current.getBoundingClientRect().left;
      offsetsRef.current = {
        line2: artRef.current.getBoundingClientRect().left - anchor,
        line3: makerRef.current.getBoundingClientRect().left - anchor,
      };
      // Aplicar inmediatamente con el progreso actual para no quedar desfasado
      const current = animProgress.get();
      rawLine2X.set(-current * offsetsRef.current.line2);
      rawLine3X.set(-current * offsetsRef.current.line3);
    };

    // Esperar a que las fuentes estén cargadas para una medición correcta
    document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [rawLine2X, rawLine3X, animProgress]);

  useMotionValueEvent(animProgress, "change", (latest) => {
    rawLine2X.set(-latest * offsetsRef.current.line2);
    rawLine3X.set(-latest * offsetsRef.current.line3);
  });

  const fs = "text-[12vw] font-black leading-none";

  return (
    <div ref={scrollAreaRef} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen bg-white overflow-hidden flex items-center">
        <div className="px-6 w-full">

          {/* Línea 1 — CHD estático, siempre negro */}
          <div className="whitespace-nowrap">
            <span ref={chdRef} className={fs} style={{ color: BLACK }}>
              EC
            </span>
          </div>

          {/* Línea 2 — palabras grises fijas, solo ART cambia de color */}
          <motion.div className="whitespace-nowrap" style={{ x: line2X }}>
            <span className={fs} style={{ color: GRAY }}>PERCEPTION </span>
            <motion.span ref={artRef} className={fs} style={{ color: lineColor }}>ENRIQUE </motion.span>
            <span className={fs} style={{ color: GRAY }}>ARCHITECTURE</span>
          </motion.div>

          {/* Línea 3 — palabras grises fijas, solo MAKER cambia de color */}
          <motion.div className="whitespace-nowrap" style={{ x: line3X }}>
            <span className={fs} style={{ color: GRAY }}>DESIGN </span>
            <motion.span ref={makerRef} className={fs} style={{ color: lineColor }}>CIAPARA </motion.span>
            <span className={fs} style={{ color: GRAY }}>MANUAL</span>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
