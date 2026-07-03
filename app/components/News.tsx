"use client";

import { motion } from "motion/react";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

const news = [
  {
    img: "/images/News/Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana.webp",
    alt: "Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana En marzo de 2015",
    altEn: "Article titled 'The Frontier Artist Along the US-Mexico Border' featuring Enrique Ciapara in his Tijuana studio, March 2015",
    altFr: "Article intitulé 'L'artiste frontalier le long de la frontière États-Unis-Mexique' avec Enrique Ciapara dans son atelier de Tijuana, mars 2015",
    altCa: "Article titulat 'L'artista fronterer al llarg de la frontera EUA-Mèxic' amb Enrique Ciapara al seu taller de Tijuana, març 2015",
    title: "Acerca de Enrique Ciapara por borderartists",
    titleEn: "About Enrique Ciapara by borderartists",
    titleFr: "À propos d'Enrique Ciapara par borderartists",
    titleCa: "Sobre Enrique Ciapara per borderartists",
    link: "https://borderartists.com/2015/02/03/enrique-ciapara/",
    height: "h-72",
  },
  {
    img: "/images/News/periodico el sol de tijuana realiza nota sobre la obra del maestro Enrique Ciapara con la exposición trompe I oeil en el CECUT 2013.jpeg",
    alt: "Periodico El Sol de Tijuana realiza nota sobre la obra del maestro Enrique Ciapara con la exposicion trompe l'œil en el CECUT",
    altEn: "El Sol de Tijuana newspaper covers Enrique Ciapara's Trompe-l'œil exhibition at CECUT, 2013",
    altFr: "Le journal El Sol de Tijuana couvre l'exposition Trompe-l'œil d'Enrique Ciapara au CECUT, 2013",
    altCa: "El diari El Sol de Tijuana cobreix l'exposició Trompe-l'œil d'Enrique Ciapara al CECUT, 2013",
    title: 'Presenta CECUT la exposicion "Trompe-L\'Œil" de Enrique Ciapara, bajo la curaduria Fernando Delmar',
    titleEn: "CECUT presents Enrique Ciapara's \"Trompe-L'Œil\" exhibition, curated by Fernando Delmar",
    titleFr: "Le CECUT présente l'exposition « Trompe-l'œil » d'Enrique Ciapara, sous la direction de Fernando Delmar",
    titleCa: "El CECUT presenta l'exposició «Trompe-l'œil» d'Enrique Ciapara, sota la curaduría de Fernando Delmar",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-enlineabc-com.pdf",
    height: "h-85",
  },
  {
    img: "/images/News/Nota del centro cultural tijuana acerca de TrompeL oeil muestra retrospectiva de Ciapara.jpeg",
    alt: "Nota de CECUT sobre una muestra retrospectiva del maestro Ciapara",
    altEn: "CECUT press release on Ciapara's retrospective exhibition Trompe-L'Œil",
    altFr: "Communiqué de presse du CECUT sur l'exposition rétrospective Trompe-l'œil de Ciapara",
    altCa: "Nota de premsa del CECUT sobre l'exposició retrospectiva Trompe-l'œil de Ciapara",
    title: "Expone Enrique Ciapara en El Cubo",
    titleEn: "Enrique Ciapara exhibits at El Cubo",
    titleFr: "Enrique Ciapara expose à El Cubo",
    titleCa: "Enrique Ciapara exposa a El Cubo",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-oem-com-mx.pdf",
    height: "h-52",
  },
  {
    img: "/images/News/Fotografia de exposicion de Trompe I oeil por enrique ciapara.jpeg",
    alt: "Fotografia de exposicion de Trompe l'œil por Enrique Ciapara en Tijuana",
    altEn: "Installation view of Trompe-l'œil exhibition by Enrique Ciapara in Tijuana",
    altFr: "Vue d'installation de l'exposition Trompe-l'œil d'Enrique Ciapara à Tijuana",
    altCa: "Vista d'instal·lació de l'exposició Trompe-l'œil d'Enrique Ciapara a Tijuana",
    title: "Expone Enrique Ciapara en el CECUT",
    titleEn: "Enrique Ciapara exhibits at CECUT",
    titleFr: "Enrique Ciapara expose au CECUT",
    titleCa: "Enrique Ciapara exposa al CECUT",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-subastamex-us.pdf",
    height: "h-75",
  },
  {
    img: "/images/News/Fotografia de exposicion Trompe I oeil en la sala 3 de el cubo.jpg",
    alt: "Fotografia de exposicion Trompe l'œil en la sala 3 del Cubo en la ciudad de Tijuana",
    altEn: "Photograph of the Trompe-l'œil exhibition in Sala 3 at El Cubo cultural center, Tijuana",
    altFr: "Photographie de l'exposition Trompe-l'œil dans la Salle 3 du centre culturel El Cubo, Tijuana",
    altCa: "Fotografia de l'exposició Trompe-l'œil a la Sala 3 del centre cultural El Cubo, Tijuana",
    title: 'Presenta el CECUT la exposicion "Trompe-L\'Œil" de Enrique Ciapara',
    titleEn: "CECUT presents Enrique Ciapara's \"Trompe-L'Œil\"",
    titleFr: "Le CECUT présente le « Trompe-l'œil » d'Enrique Ciapara",
    titleCa: "El CECUT presenta el «Trompe-l'œil» d'Enrique Ciapara",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-tijuanainformativo-info.pdf",
    height: "h-65",
  },
  {
    img: "/images/News/Fotografia de parte de exhibición Trompe I oeil por enrique ciapara.jpg",
    alt: "Fotografia de parte de exhibicion Trompe l'œil por Enrique Ciapara 2013",
    altEn: "Detail photograph of the Trompe-l'œil exhibition by Enrique Ciapara, 2013",
    altFr: "Photographie de détail de l'exposition Trompe-l'œil d'Enrique Ciapara, 2013",
    altCa: "Fotografia de detall de l'exposició Trompe-l'œil d'Enrique Ciapara, 2013",
    title: 'Enrique Ciapara "engana al ojo" con su proxima exhibicion',
    titleEn: 'Enrique Ciapara "tricks the eye" with his upcoming exhibition',
    titleFr: 'Enrique Ciapara « trompe l\'œil » avec sa prochaine exposition',
    titleCa: 'Enrique Ciapara "enganya l\'ull" amb la seva propera exposició',
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/tijuanaculturalboletin-blogspot-mx.pdf",
    height: "h-75",
  },
  {
    img: "/images/News/Fotografia de serie de piezas en exhibicion de enrique ciapara.jpeg",
    alt: "Fotografia de serie de piezas en exhibicion de Enrique Ciapara titulada trompe l'œil",
    altEn: "Series of works on display in Enrique Ciapara's Trompe-l'œil exhibition",
    altFr: "Série d'œuvres exposées dans l'exposition Trompe-l'œil d'Enrique Ciapara",
    altCa: "Sèrie d'obres exposades a l'exposició Trompe-l'œil d'Enrique Ciapara",
    title: "Lleva el Cecut el Taller de Artista al Museo y Viceversa",
    titleEn: "CECUT brings the Artist's Studio to the Museum and Vice Versa",
    titleFr: "Le CECUT amène l'Atelier de l'Artiste au Musée et Vice Versa",
    titleCa: "El CECUT porta el Taller de l'Artista al Museu i Viceversa",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/www-conaculta-gob-mx.pdf",
    height: "h-56",
  },
  {
    img: "/images/News/Piezas de la la obra Trompe I oeil por ciapara.JPG",
    alt: "Piezas de la obra Trompe l'œil por ciapara exhibidas en El Cubo",
    altEn: "Works from Ciapara's Trompe-l'œil series exhibited at El Cubo",
    altFr: "Œuvres de la série Trompe-l'œil de Ciapara exposées à El Cubo",
    altCa: "Obres de la sèrie Trompe-l'œil de Ciapara exposades a El Cubo",
    title: "Exposicion de Ciapara en el Cecut",
    titleEn: "Ciapara exhibition at CECUT",
    titleFr: "Exposition de Ciapara au CECUT",
    titleCa: "Exposició de Ciapara al CECUT",
    link: "https://cecut.gob.mx/ciapara/wp-content/uploads/2013/08/eldebatebc-com.pdf",
    height: "h-65",
  },
];

export default function News() {
  const { t, locale } = useI18n();

  function getAlt(item: typeof news[0]) {
    if (locale === "fr") return item.altFr;
    if (locale === "ca") return item.altCa;
    if (locale === "en") return item.altEn;
    return item.alt;
  }

  function getTitle(item: typeof news[0]) {
    if (locale === "fr") return item.titleFr;
    if (locale === "ca") return item.titleCa;
    if (locale === "en") return item.titleEn;
    return item.title;
  }

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
                    alt={getAlt(item)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5" />
                )}
              </div>

              <p className="mt-3 text-sm font-semibold leading-snug group-hover:text-white/70 transition-colors duration-300">
                {getTitle(item)}
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
