"use client";

import { motion } from "motion/react";
import { div, img } from "motion/react-client";

const expo = [0.16, 1, 0.3, 1] as const;

const news = [
  {
    img: "/CiaparaHeroImg.jpeg",
    title: "Lorem ipsum dolor sit amet.",
    Link: "/",
    aspectRatio: "aspect-square",
  },
  {
    img: "/CiaparaHeroImg.jpeg",
    title: "Lorem ipsum dolor sit amet.",
    Link: "/",
    aspectRatio: "aspect-video",
  },
  {
    img: "/CiaparaHeroImg.jpeg",
    title: "Lorem ipsum dolor sit amet.",
    Link: "/",
    aspectRatio: "aspect-[4/5]",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: expo } },
};

export default function News() {
  return (
    <section id="noticias" className="py-28 md:py-8 px-6 bg-[#1A1916]">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">
          Noticias
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-4 items-start justify-evenly w-full"
        >
          <div className="flex flex-col gap-2 flex-1">
            <figure
              className={`${news[0].aspectRatio} w-full overflow-hidden rounded-2xl`}
            >
              <img
                src={news[0].img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </figure>
            <p className="max-w-xs uppercase font-semibold">
              Lorem ipsum dolor sit amet.
            </p>
            <a href="/" target="blank" className="hover:underline">
              Leer más
            </a>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <figure
              className={`${news[1].aspectRatio} w-full overflow-hidden rounded-2xl`}
            >
              <img
                src={news[1].img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </figure>
            <p className="max-w-xs uppercase font-semibold">
              Lorem ipsum dolor sit amet consectetur. vero.
            </p>
            <a href="/" target="blank" className="hover:underline">
              Leer más
            </a>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <figure
              className={`${news[2].aspectRatio} w-full overflow-hidden rounded-2xl`}
            >
              <img
                src={news[2].img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </figure>
            <p className="max-w-xs uppercase font-semibold">
              Lorem ipsum dolor sit amet.
            </p>
            <a href="/" target="blank" className="hover:underline">
              Leer más
            </a>
          </div>
        </motion.div>
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8B3A2A] mb-2">
              Actualidad
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1916]">
              Noticias
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {news.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="news-item border-t border-[#E4DFD8] pt-8 flex flex-col gap-4 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.18em] uppercase text-[#8B3A2A]">
                  {item.tag}
                </span>
                <span className="text-xs text-[#6B6660]">{item.date}</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A1916] [@media(hover:hover)]:group-hover:text-[#8B3A2A] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6660] leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4">
                <span className="underline-hover text-xs tracking-[0.15em] uppercase text-[#1A1916]">
                  Leer más
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div> */}
    </section>
  );
}
