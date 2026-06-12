"use client";

import { motion } from "motion/react";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

const works = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-video",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-square",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-10/7",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-5/4",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-video",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    link: "/",
    img: "/CiaparaHeroImg.jpeg",
    aspect: "aspect-square",
  },
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
      <figure
        className={`${aspect} w-full overflow-hidden ${rounded ? "rounded-2xl" : ""} mb-3`}
      >
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
  const { t } = useI18n();
  return (
    <section id="obras" className="pt-10 md:pt-16 bg-[#F6F2EC]">
      <div className="px-6 mx-auto mb-10">
        <h1 className="text-xl md:text-2xl font-bold uppercase">
          {t.works.title}
        </h1>
      </div>

      {/* ── Mobile: single column, full-bleed images ── */}
      {/* <div className="flex flex-col gap-10 md:hidden">
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
          > */}
      {/* sin padding para imagen full-bleed */}
      {/* <figure className="w-full aspect-video overflow-hidden mb-3">
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
      </div> */}

      {/* ── Desktop: staggered 2-column ── */}
      <div className="md:flex flex-col gap-6 mx-auto px-6">
        {/* row 1 */}
        <div className=" flex flex-col md:flex-row gap-6 items-start">
          <WorkCard
            work={works[0]}
            className="md:w-1/2"
            aspect="aspect-square"
          />
          <WorkCard
            work={works[1]}
            className="md:w-1/2 md:mt-20 mr-5 md:mr-0"
            aspect="aspect-video"
          />
        </div>
        {/* row 2 — desplazada a la derecha */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:pl-24 mt-6 md:mt-0">
          <WorkCard
            work={works[2]}
            className="md:w-5/12 ml-20 md:ml-0"
            aspect="aspect-10/7"
          />
          <WorkCard
            work={works[3]}
            className="md:w-5/12 md:mt-12 mr-15 md:mr-0"
            aspect="aspect-5/4"
          />
        </div>
        {/* row 3 */}
        <div className="flex flex-col md:flex-row gap-6 items-start mt-6 md:mt-0">
          <WorkCard
            work={works[4]}
            className="md:w-1/2 mr-5 md:mr-0"
            aspect="aspect-video"
          />
          <WorkCard
            work={works[5]}
            className="md:w-1/2 md:mt-16"
            aspect="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
