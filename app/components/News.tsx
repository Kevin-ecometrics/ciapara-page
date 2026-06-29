"use client";

import { motion } from "motion/react";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

const news = [
  {
    img: "/images/News/Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana.webp",
    alt: "Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana En marzo de 2015",
    altEn:
      "Article titled 'The Frontier Artist Along the US-Mexico Border' featuring Enrique Ciapara in his Tijuana studio, March 2015",
    title: "Acerca de Enrique Ciapara por borderartists",
    titleEn: "About Enrique Ciapara by borderartists",
    link: "https://borderartists.com/2015/02/03/enrique-ciapara/",
    height: "h-72",
  },
  {
    img: "/images/News/periodico el sol de tijuana realiza nota sobre la obra del maestro Enrique Ciapara con la exposición trompe I oeil en el CECUT 2013.jpeg",
    alt: "Periodico El Sol de Tijuana realiza nota sobre la obra del maestro Enrique Ciapara con la exposicion trompe I oeil en el CECUT",
    altEn:
      "El Sol de Tijuana newspaper covers Enrique Ciapara's Trompe-l'oeil exhibition at CECUT, 2013",
    title:
      'Presenta CECUT la exposicion "Trompe-L\'oeil" de Enrique Ciapara, bajo la curaduria Fernando Delmar',
    titleEn:
      "CECUT presents Enrique Ciapara's \"Trompe-L'oeil\" exhibition, curated by Fernando Delmar",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-enlineabc-com.pdf",
    height: "h-85",
  },
  {
    img: "/images/News/Nota del centro cultural tijuana acerca de TrompeL oeil muestra retrospectiva de Ciapara.jpeg",
    alt: "Nota de CECUT sobre una muestra retrospectiva del maestro Ciapara",
    altEn:
      "CECUT press release on Ciapara's retrospective exhibition Trompe-L'oeil",
    title: "Expone Enrique Ciapara en El Cubo",
    titleEn: "Enrique Ciapara exhibits at El Cubo",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-oem-com-mx.pdf",
    height: "h-52",
  },
  {
    img: "/images/News/Fotografia de exposicion de Trompe I oeil por enrique ciapara.jpeg",
    alt: "Fotografia de exposicion de Trompe I oeil por Enrique Ciapara en Tijuana",
    altEn:
      "Installation view of Trompe-l'oeil exhibition by Enrique Ciapara in Tijuana",
    title: "Expone Enrique Ciapara en el CECUT",
    titleEn: "Enrique Ciapara exhibits at CECUT",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-subastamex-us.pdf",
    height: "h-75",
  },
  {
    img: "/images/News/Fotografia de exposicion Trompe I oeil en la sala 3 de el cubo.jpg",
    alt: "Fotografia de exposicion Trompe I oeil en la sala 3 del Cubo en la ciudad de Tijuana",
    altEn:
      "Photograph of the Trompe-l'oeil exhibition in Sala 3 at El Cubo cultural center, Tijuana",
    title:
      'Presenta el CECUT la exposicion "Trompe-L\'oeil" de Enrique Ciapara',
    titleEn: "CECUT presents Enrique Ciapara's \"Trompe-L'oeil\"",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-tijuanainformativo-info.pdf",
    height: "h-65",
  },
  {
    img: "/images/News/Fotografia de parte de exhibición Trompe I oeil por enrique ciapara.jpg",
    alt: "Fotografia de parte de exhibicion Trompe I oeil por Enrique Ciapara 2013",
    altEn:
      "Detail photograph of the Trompe-l'oeil exhibition by Enrique Ciapara, 2013",
    title: 'Enrique Ciapara "engana al ojo" con su proxima exhibicion',
    titleEn: 'Enrique Ciapara "tricks the eye" with his upcoming exhibition',
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/tijuanaculturalboletin-blogspot-mx.pdf",
    height: "h-75",
  },
  {
    img: "/images/News/Fotografia de serie de piezas en exhibicion de enrique ciapara.jpeg",
    alt: "Fotografia de serie de piezas en exhibicion de Enrique Ciapara titulada trompe I oeil",
    altEn:
      "Series of works on display in Enrique Ciapara's Trompe-l'oeil exhibition",
    title: "Lleva el Cecut el Taller de Artista al Museo y Viceversa",
    titleEn: "CECUT brings the Artist's Studio to the Museum and Vice Versa",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-conaculta-gob-mx.pdf",
    height: "h-56",
  },
  {
    img: "/images/News/Piezas de la la obra Trompe I oeil por ciapara.JPG",
    alt: "Piezas de la obra Trompe I oeil por ciapara exhibidas en El Cubo",
    altEn: "Works from Ciapara's Trompe-l'oeil series exhibited at El Cubo",
    title: "Exposicion de Ciapara en el Cecut",
    titleEn: "Ciapara exhibition at CECUT",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/eldebatebc-com.pdf",
    height: "h-65",
  },
];

export default function News() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section id="news" className="py-10 px-6 bg-[#1A1916]">
      <div className="mx-auto text-white w-full">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs tracking-[0.3em] uppercase text-white/40">
            {t.press.heading}
          </h2>
          <span className="text-xs text-white/30">
            {news.length} {t.press.articles}
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-start"
        >
          {news.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
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
              className="group flex flex-col cursor-pointer"
            >
              <div
                className={`w-full overflow-hidden rounded-2xl ${item.height}`}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={isEn ? item.altEn : item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5" />
                )}
              </div>

              <p className="mt-3 text-sm font-semibold leading-snug group-hover:text-white/70 transition-colors duration-300">
                {isEn ? item.titleEn : item.title}
              </p>
              <span className="mt-2 text-xs text-white/40 group-hover:text-white transition-colors duration-300 inline-flex items-center gap-1">
                {t.press.cta}
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
