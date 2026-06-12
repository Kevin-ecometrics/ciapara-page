"use client";

import { motion } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;

const news = [
  {
    img: "/Otras obras VANITAS.png",
    tag: "Exposición",
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "2024",
    Link: "/",
  },
  {
    img: "/Otras obras TROMPE.jpg",
    tag: "Grabado",
    title: "Lorem ipsum dolor sit amet.",
    date: "2024",
    Link: "/",
  },
  {
    img: "/Otras obras sin nombre.png",
    tag: "Restauración",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    date: "2023",
    Link: "/",
  },
];

export default function News() {
  const imageHeights = ["h-20 md:h-155", "h-20 md:h-175", "h-20 md:h-150"];
  return (
    <section id="noticias" className="py-8 px-6 bg-[#1A1916]  flex flex-col">
      <div className=" mx-auto text-white w-full flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-5 shrink-0">
          <h2 className="text-xs tracking-[0.3em] uppercase text-white/40">
            Últimas noticias
          </h2>
          <span className="text-xs text-white/30">{news.length} artículos</span>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col md:flex-row gap-0 md:gap-6 flex-1 min-h-0"
        >
          {news.map((item, i) => (
            <motion.a
              key={i}
              href={item.Link}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: expo },
                },
              }}
              className="group flex flex-row md:flex-col gap-4
                         border-t border-white/20 pt-4 pb-4 md:pb-0
                         md:flex-1 cursor-pointer"
            >
              {/* Imagen */}
              <div
                className={`shrink-0 w-20 md:w-full overflow-hidden rounded-lg ${imageHeights[i % imageHeights.length]}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] tracking-widest uppercase text-white/40">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-white/30">
                      {item.date}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold leading-snug line-clamp-2
                                group-hover:text-white/70 transition-colors duration-300"
                  >
                    {item.title}
                  </p>
                </div>
                <span
                  className="text-xs text-white/40 group-hover:text-white
                                 transition-colors duration-300 mt-2 md:mt-3 inline-flex items-center gap-1"
                >
                  Leer más
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
