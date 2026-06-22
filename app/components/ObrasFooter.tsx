"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

const collectionsMeta = [
  {
    img: "/images/blurb/Pieza caminata en tecnica mixta sobre tela 183x 305 cm 2008 por enrique ciapara.webp",
    href: "/archivo-2000-09",
    hrefEn: "/en/archivo-2000-09",
  },
  {
    img: "/images/2015/Pieza sunnyday en acrilico sobre tela 122x 107 cm por artista enrique ciapara.webp",
    href: "/serie-2015",
    hrefEn: "/en/serie-2015",
  },
  {
    img: "/images/errores/Pieza 9 Banquete en el pinar acrilico sobre tela 152 x 429 cm por enrique ciapara 2019.webp",
    href: "/catalogo-de-errores",
    hrefEn: "/en/catalogo-de-errores",
  },
];

export default function ObrasFooter() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const normalizedPath =
    pathname.replace(/^\/en/, "").replace(/\/$/, "") || "/";

  const collections = collectionsMeta
    .map((meta, i) => ({
      ...meta,
      title: t.collections.items[i].title,
    }))
    // No mostrar la colección de la página en la que ya estás
    .filter((s) => s.href !== normalizedPath);

  return (
    <section className="py-8 px-6 bg-[#1A1916] flex flex-col">
      <div className="mx-auto text-white w-full flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-5 shrink-0">
          <h2 className="text-xs tracking-[0.3em] uppercase text-white/40">
            {t.nav.collections}
          </h2>
          <span className="text-xs text-white/30">
            {collections.length} {t.worksFooter.works}
          </span>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col md:flex-row gap-0 md:gap-6 flex-1 min-h-0"
        >
          {collections.map((s) => (
            <motion.div
              key={s.href}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: expo },
                },
              }}
              className="md:flex-1"
            >
              <Link
                href={locale === "en" ? s.hrefEn : s.href}
                className="group flex flex-row md:flex-col gap-4
                           border-t border-white/20 pt-4 pb-4 md:pb-0
                           cursor-pointer"
              >
                {/* Imagen */}
                <div className="shrink-0 w-20 h-20 md:w-full md:h-60 overflow-hidden rounded-lg">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Texto */}
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-snug uppercase group-hover:text-white/70 transition-colors duration-300">
                    {s.title}
                  </p>
                  <span
                    className="text-xs text-white/40 group-hover:text-white
                                   transition-colors duration-300 mt-2 inline-flex items-center gap-1"
                  >
                    {t.worksFooter.seeMore}
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
