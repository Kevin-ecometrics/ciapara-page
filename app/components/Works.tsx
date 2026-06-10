"use client";

import { motion } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;

const works = [
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-video" },
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-square" },
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-10/7" },
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-5/4" },
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-video" },
  { title: "Lorem ipsum dolor sit amet consectetur.", link: "/", img: "/CiaparaHeroImg.jpeg", aspect: "aspect-square" },
];

type Work = (typeof works)[number];

function WorkCard({
  work,
  className = "",
  aspect,
  rounded = true,
}: {
  work: Work;
  className?: string;
  aspect: string;
  rounded?: boolean;
}) {
  return (
    <motion.a
      href={work.link}
      target="_blank"
      rel="noreferrer"
      className={`group block ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: expo }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <figure className={`${aspect} w-full overflow-hidden ${rounded ? "rounded-2xl" : ""} mb-3`}>
        <img
          src={work.img}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </figure>
      <p className="uppercase font-bold text-sm leading-snug max-w-sm mb-1">
        {work.title}
      </p>
      <span className="text-xs tracking-[0.2em] uppercase flex items-center gap-1 text-[#1A1916]/50">
        Explore
        <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
          →
        </span>
      </span>
    </motion.a>
  );
}

export default function Works() {
  return (
    <section id="obras" className="py-10 md:py-16 bg-[#F6F2EC]">
      <div className="px-6 max-w-7xl mx-auto mb-10">
        <h1 className="text-xl md:text-2xl font-bold uppercase">
          Selección de proyectos
        </h1>
      </div>

      {/* ── Mobile: single column, full-bleed images ── */}
      <div className="flex flex-col gap-10 md:hidden">
        {works.map((work, i) => (
          <motion.a
            key={i}
            href={work.link}
            target="_blank"
            rel="noreferrer"
            className="group block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: expo }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* sin padding para imagen full-bleed */}
            <figure className="w-full aspect-video overflow-hidden mb-3">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
            <div className="px-6">
              <p className="uppercase font-bold text-sm leading-snug max-w-sm mb-1">
                {work.title}
              </p>
              <span className="text-xs tracking-[0.2em] uppercase flex items-center gap-1 text-[#1A1916]/50">
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── Desktop: staggered 2-column ── */}
      <div className="hidden md:flex flex-col gap-6 max-w-7xl mx-auto px-6">
        {/* row 1 */}
        <div className="flex gap-6 items-start">
          <WorkCard work={works[0]} className="w-1/2" aspect="aspect-square" />
          <WorkCard work={works[1]} className="w-1/2 mt-20" aspect="aspect-video" />
        </div>
        {/* row 2 — desplazada a la derecha */}
        <div className="flex gap-6 items-start pl-24">
          <WorkCard work={works[2]} className="w-5/12" aspect="aspect-10/7" />
          <WorkCard work={works[3]} className="w-5/12 mt-12" aspect="aspect-5/4" />
        </div>
        {/* row 3 */}
        <div className="flex gap-6 items-start">
          <WorkCard work={works[4]} className="w-1/2" aspect="aspect-video" />
          <WorkCard work={works[5]} className="w-1/2 mt-16" aspect="aspect-square" />
        </div>
      </div>
    </section>
  );
}
