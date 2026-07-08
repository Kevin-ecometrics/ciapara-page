"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../providers/i18nProvider";
import { news, getNewsAlt, getNewsTitle, getNewsHref } from "../lib/news";

const expo = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: expo },
  },
};

export default function News() {
  const { t, locale } = useI18n();
  const pathname = usePathname();

  // No mostrar la noticia de la página en la que ya estás (p. ej. en /el-cubo).
  const normalizedPath =
    pathname.replace(/^\/(en|fr|ca)(?=\/|$)/, "").replace(/\/$/, "") || "/";
  const isNewsPage = news.some((item) => item.href === normalizedPath);
  const items = news.filter((item) => item.href !== normalizedPath);

  return (
    <section
      id="news"
      className={`py-10 px-6 ${isNewsPage ? "bg-[#F6F2EC]" : "bg-[#1A1916]"}`}
    >
      <div
        className={`mx-auto w-full ${isNewsPage ? "text-[#1A1916]" : "text-white"}`}
      >
        <div className="flex items-baseline justify-between mb-8">
          <h2
            className={`text-xs tracking-[0.3em] uppercase ${isNewsPage ? "text-[#1A1916]" : "text-white/40"}`}
          >
            {t.press.heading}
          </h2>
          <span
            className={`text-xs ${isNewsPage ? "text-[#1A1916]" : "text-white/30"}`}
          >
            {items.length} {t.press.articles}
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-start"
        >
          {items.map((item, i) => {
            const cardContent = (
              <>
                <div
                  className={`w-full overflow-hidden rounded-2xl ${item.height}`}
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={getNewsAlt(item, locale)}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5" />
                  )}
                </div>

                <p
                  className={`mt-3 text-sm font-semibold leading-snug transition-colors duration-300 ${isNewsPage ? "group-hover:text-[#1A1916]/70" : "group-hover:text-white/70"}`}
                >
                  {getNewsTitle(item, locale)}
                </p>
                <span
                  className={`mt-2 text-xs transition-colors duration-300 inline-flex items-center gap-1 ${isNewsPage ? "text-[#1A1916]" : "text-white/40 group-hover:text-white"}`}
                >
                  {t.press.cta}
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </>
            );

            const href = getNewsHref(item, locale);

            if (item.disabled) {
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  onClick={(e) => e.preventDefault()}
                  className="group flex flex-col cursor-pointer"
                >
                  {cardContent}
                </motion.div>
              );
            }

            if (href) {
              return (
                <motion.div key={i} variants={cardVariants}>
                  <Link href={href} className="group flex flex-col cursor-pointer">
                    {cardContent}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                variants={cardVariants}
                className="group flex flex-col cursor-pointer"
              >
                {cardContent}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
