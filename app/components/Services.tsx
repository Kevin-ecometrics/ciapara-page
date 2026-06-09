"use client";

import { motion } from "motion/react";
import { useState } from "react";

const expo = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    num: "01",
    title: "Pintar",
    desc: "Creación pictórica en óleo, acrílico y técnica mixta sobre distintos soportes. La imagen que emerge del gesto y la materia.",
    hoverBg: "bg-[#4C2A1D]",
  },
  {
    num: "02",
    title: "Grabar",
    desc: "Taller La Brigada: litografía, serigrafía, aguafuerte y monotipos. El grabado como disciplina de precisión y azar controlado.",
    hoverBg: "bg-[#2D3C30]",
  },
  {
    num: "03",
    title: "Exponer",
    desc: "Curaduría, montaje y producción de exposiciones individuales y colectivas en galerías e instituciones culturales.",
    hoverBg: "bg-[#2B2F4C]",
  },
  {
    num: "04",
    title: "Restaurar",
    desc: "Conservación, diagnóstico e intervención de obra pictórica. Devolverle la vida y el tiempo a la pintura.",
    hoverBg: "bg-[#3A2430]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionBg = activeService
    ? (services.find((service) => service.num === activeService)?.hoverBg ??
      "bg-[#1A1916]")
    : "bg-[#1A1916]";

  return (
    <section
      className={`py-28 md:py-36 px-6 transition-colors duration-300 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto text-white">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.2em]">
                {s.title}
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: expo }}
                viewport={{ once: true, amount: 0.15 }}
                className="hidden text-sm text-white leading-relaxed max-w-md group-hover:block"
              >
                {s.desc}
              </motion.p>
            </div>
            <hr className="flex-1 border-t border-white" />
          </div>
        ))}
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6660] mb-3">
            Áreas de práctica
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Lo que hacemos
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2724]"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={cardVariants}
              whileHover={{ y: -8, backgroundColor: "#211e1a" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-[#1A1916] p-8 lg:p-10 flex flex-col gap-6
                         border border-transparent hover:border-[#8B3A2A]/30
                         transition-colors duration-300 cursor-default group"
            >
              <motion.span
                className="text-xs text-[#8B3A2A] tracking-[0.2em]"
                whileHover={{ x: 4 }}
              >
                {s.num}
              </motion.span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C4622D] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B6660] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div
                className="mt-auto w-6 h-px bg-[#8B3A2A] origin-left scale-x-0 opacity-0
                           group-hover:scale-x-100 group-hover:opacity-100
                           transition-[transform,opacity] duration-300 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </section>
  );
}
