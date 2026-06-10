"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const expo = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    num: "01",
    title: "Pintar",
    desc: "Creación pictórica en óleo, acrílico y técnica mixta sobre distintos soportes. La imagen que emerge del gesto y la materia.",
    hoverBg: "bg-[#4C2A1D]",
    img: "/service-pintar.jpg",
    imgFallback: "#6B3020",
  },
  {
    num: "02",
    title: "Grabar",
    desc: "Taller La Brigada: litografía, serigrafía, aguafuerte y monotipos. El grabado como disciplina de precisión y azar controlado.",
    hoverBg: "bg-[#2D3C30]",
    img: "/service-grabar.jpg",
    imgFallback: "#2D3C30",
  },
  {
    num: "03",
    title: "Exponer",
    desc: "Curaduría, montaje y producción de exposiciones individuales y colectivas en galerías e instituciones culturales.",
    hoverBg: "bg-[#2B2F4C]",
    img: "/service-exponer.jpg",
    imgFallback: "#2B2F4C",
  },
  {
    num: "04",
    title: "Restaurar",
    desc: "Conservación, diagnóstico e intervención de obra pictórica. Devolverle la vida y el tiempo a la pintura.",
    hoverBg: "bg-[#3A2430]",
    img: "/service-restaurar.jpg",
    imgFallback: "#3A2430",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const sectionBg = activeService
    ? (services.find((s) => s.num === activeService)?.hoverBg ?? "bg-[#1A1916]")
    : "bg-[#1A1916]";

  const activeData = services.find((s) => s.num === activeService);

  return (
    <section
      className={`relative overflow-hidden py-28 md:py-36 px-6 transition-colors duration-300 ${sectionBg}`}
    >
      {/* Imagen full-section — se revela desde el centro hacia afuera */}
      <AnimatePresence>
        {activeData && (
          <motion.figure
            key={activeData.num}
            className="absolute inset-0 pointer-events-none"
            initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(50% 50% 50% 50%)", transition: { duration: 0 } }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: activeData.imgFallback }}
            />
            <img
              src={activeData.img}
              alt={activeData.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.figure>
        )}
      </AnimatePresence>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 leading-[1.15] max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem hic
          impedit expedita ea aut iste!
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore autem
          pariatur tempore. Sint in dolorum optio magni, quae voluptate iure.
        </p>

        {services.map((s) => (
          <div
            key={s.num}
            className="mb-6 group transition-colors duration-300"
            onMouseEnter={() => setActiveService(s.num)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="flex flex-row items-center justify-between mb-6 cursor-pointer">
              <div className="overflow-hidden py-1">
                <motion.h2
                  animate={
                    activeService === s.num
                      ? { y: ["0%", "100%", "-100%", "0%"] }
                      : { y: "0%" }
                  }
                  transition={
                    activeService === s.num
                      ? {
                          duration: 0.52,
                          times: [0, 0.44, 0.45, 1],
                          ease: ["easeIn", "linear", "easeOut"],
                        }
                      : { duration: 0 }
                  }
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.2em]"
                >
                  {s.title}
                </motion.h2>
              </div>
              <AnimatePresence>
                {activeService === s.num && (
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, ease: expo }}
                    className="text-sm text-white leading-relaxed max-w-md"
                  >
                    {s.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <hr className="flex-1 border-t border-white/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
