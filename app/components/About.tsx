"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

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
  { type: "image", src: "/CiaparaHeroImg.jpeg", alt: "Enrique Ciapara en su taller" },
  { type: "color", bg: "#8B3A2A" },
  { type: "color", bg: "#2A4A6B" },
  { type: "color", bg: "#3A6B4A" },
];

export default function About() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const animContainerRef = useRef<HTMLDivElement>(null);
  const maxXRef = useRef(500);
  const [slideIndex, setSlideIndex] = useState(0);

  // shaft width drives both the growing line and the image x-offset
  const shaftWidth = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (animContainerRef.current) {
        maxXRef.current = animContainerRef.current.offsetWidth * 0.62;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    shaftWidth.set(latest * maxXRef.current);
    const next = Math.min(
      Math.floor(latest * slides.length * 2) >> 1,
      slides.length - 1
    );
    setSlideIndex(next);
  });

  return (
    <section id="sobre-mi" className="bg-[#F6F2EC]">
      {/* Texto — scroll normal */}
      <div className="pt-28 md:pt-36 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-[1.15] max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          asperiores architecto itaque, reiciendis molestiae sequi voluptatum
          quis magni quae, cupiditate quisquam accusantium dolores recusandae
          pariatur vel atque modi incidunt ducimus saepe vitae animi fugiat
          dolorum.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: expo }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-sm leading-relaxed max-w-xl mb-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro
          maxime delectus, assumenda facilis ad laudantium laboriosam iusto
          eligendi cumque aspernatur eum omnis, dolore vel quibusdam officia,
          ullam expedita natus iste? Minus sunt libero laudantium molestias? Ab,
          expedita consequatur ad placeat atque accusantium quisquam eveniet
          temporibus, voluptate omnis, nulla quos! Quaerat suscipit vel ipsum
          omnis soluta ea deleniti maxime voluptatibus.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: expo }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-sm leading-relaxed max-w-xl"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          maiores, accusantium distinctio quae illo ipsa quos voluptatem velit
          temporibus laboriosam, sunt, magni recusandae beatae! Quaerat iste
          totam quae iure dolores quasi, magni fuga adipisci maxime eligendi,
          doloremque tenetur placeat accusamus.
        </motion.p>
      </div>

      {/*
        200vh → 100vh de scroll pinned.
        El usuario no puede seguir bajando hasta que la flecha llegue al final.
      */}
      <div ref={scrollAreaRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen bg-[#F6F2EC] flex items-center overflow-hidden">
          <div ref={animContainerRef} className="max-w-7xl mx-auto px-6 w-full">

            {/*
              Fila: LOREM | [shaft crece ——] [▶] | IPSUM
              El shaft (línea) crece hacia la derecha empujando
              el arrowhead y IPSUM con él.
            */}
            <div className="flex items-center gap-5 mb-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] shrink-0">
                LOREM
              </p>

              {/* Flecha: shaft que crece + arrowhead al final */}
              <div className="flex items-center shrink-0">
                {/* Shaft — width = shaftWidth motion value */}
                <motion.div
                  className="shrink-0 bg-current rounded-full"
                  style={{ width: shaftWidth, height: "3px" }}
                />
                {/* Arrowhead — viewBox recortado para mostrar solo la punta */}
                <svg
                  className="fill-current shrink-0"
                  style={{ height: "40px", width: "18px" }}
                  viewBox="463 128 158 390"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7Z" />
                </svg>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] shrink-0">
                IPSUM
              </p>
            </div>

            {/* Imagen — se desplaza el mismo número de px que el shaft */}
            <motion.figure
              style={{ x: shaftWidth }}
              className="w-125 h-80 rounded-lg overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {slides[slideIndex].type === "image" ? (
                  <motion.img
                    key="slide-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
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
                    transition={{ duration: 0.5 }}
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

      <div className="pb-28 md:pb-36" />
    </section>
  );
}
