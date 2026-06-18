"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { useI18n } from "../providers/i18nProvider";
import Link from "next/link";

const expo = [0.16, 1, 0.3, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
};

const stats = [
  { num: "2001", label: "Año de fundación" },
  { num: "25+", label: "Años de oficio" },
  { num: "TIJ", label: "Tijuana, B.C." },
  { num: "TGN", label: "Tarragona, ES" },
];

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "color"; bg: string };

const slides: Slide[] = [
  {
    type: "image",
    src: "/CiaparaHeroImg.jpeg",
    alt: "Enrique Ciapara en su taller",
  },
  { type: "color", bg: "#8B3A2A" },
  { type: "color", bg: "#2A4A6B" },
  { type: "color", bg: "#3A6B4A" },
  { type: "color", bg: "#8B6B2A" },
];

const years = ["1991", "2000", "2009", "2015", "2026"];

export default function About() {
  const { t } = useI18n();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const animContainerRef = useRef<HTMLDivElement>(null);
  const maxXRef = useRef(500);
  const maxImageXRef = useRef(500);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // shaft width and image position move independently at different speeds
  const shaftWidth = useMotionValue(0);
  const imagePosition = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (animContainerRef.current) {
        const isMobileView = window.innerWidth < 768;
        setIsMobile(isMobileView);

        if (isMobileView) {
          // Mobile calculations with different constants
          const availableWidthMobile =
            animContainerRef.current.offsetWidth - 190;
          maxXRef.current = Math.max(0, availableWidthMobile * 1);
        } else {
          // Desktop calculations
          const availableWidth = animContainerRef.current.offsetWidth - 520;
          const availableWidthImage =
            animContainerRef.current.offsetWidth - 865;
          maxXRef.current = Math.max(0, availableWidth * 1);
          maxImageXRef.current = Math.max(0, availableWidthImage * 1);
        }
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Shaft advances faster (reaches end sooner)
    shaftWidth.set(latest * maxXRef.current);

    // Image advances slower (takes longer to reach end) - use same speed ratio for both
    imagePosition.set(latest * maxImageXRef.current);

    const next = Math.min(
      Math.floor(latest * slides.length * 2) >> 1,
      slides.length - 1,
    );
    setSlideIndex(next);
  });

  return (
    <section id="about" className="bg-[#F6F2EC]">
      {/*
        200vh → 100vh de scroll pinned.
        El usuario no puede seguir bajando hasta que la flecha llegue al final.
      */}
      <div ref={scrollAreaRef} className="relative" style={{ height: "250vh" }}>
        <div className="sticky top-0 h-screen bg-[#F6F2EC] flex items-center overflow-hidden">
          <div ref={animContainerRef} className="mx-auto px-6 w-full">
            {/*
              Fila: LOREM | [shaft crece ——] [▶] | IPSUM
              El shaft (línea) crece hacia la derecha empujando
              el arrowhead y IPSUM con él.
            */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-8">
              <p className="text-4xl md:text-6xl font-bold leading-[1.15] shrink-0 uppercase">
                {t.about.preArrow}
              </p>

              {/* Mobile: arrow + IPSUM in same row. Desktop: contents (transparent wrapper) */}
              <div className="flex items-center gap-3 md:contents">
                {/* Flecha: shaft que crece + arrowhead al final */}
                <div className="flex items-center shrink-0">
                  <motion.div
                    className="shrink-0 bg-current rounded-full"
                    style={{ width: shaftWidth, height: "3px" }}
                  />
                  <svg
                    className="fill-current shrink-0"
                    style={{ height: "40px", width: "17px" }}
                    viewBox="463 128 158 390"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7Z" />
                  </svg>
                </div>

                <p className="relative text-4xl md:text-6xl font-bold leading-[1.15] shrink-0 uppercase">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={years[slideIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="block"
                    >
                      {years[slideIndex]}
                    </motion.span>
                  </AnimatePresence>
                </p>
              </div>
            </div>

            {/* Imagen — en desktop se desplaza con velocidad propia, en mobile queda fija */}
            <motion.figure
              style={{ x: isMobile ? 0 : imagePosition }}
              className={`rounded-lg overflow-hidden relative flex-shrink-0 ${isMobile ? "w-full h-100" : "w-200 h-125"}`}
            >
              <AnimatePresence mode="wait">
                {slides[slideIndex].type === "image" ? (
                  <motion.img
                    key="slide-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    src={
                      (slides[slideIndex] as Extract<Slide, { type: "image" }>)
                        .src
                    }
                    alt={
                      (slides[slideIndex] as Extract<Slide, { type: "image" }>)
                        .alt
                    }
                    className="absolute inset-0 rounded-lg object-cover object-top md:object-center w-full h-full"
                  />
                ) : (
                  <motion.div
                    key={`slide-color-${slideIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundColor: (
                        slides[slideIndex] as Extract<Slide, { type: "color" }>
                      ).bg,
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.figure>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <a
          href="/about"
          className="font-extrabold text-lg uppercase px-6 hover:underline inline-block"
        >
          {t.about.more}
        </a>
      </div>
      <div className="pb-28 md:pb-36" />
    </section>
  );
}
