"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FaInstagram } from "react-icons/fa";
import { useI18n } from "../providers/i18nProvider";
import { scrollToSection } from "../lib/scrollToSection";

const expo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: expo, delay },
  }),
};

export default function Footer() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);

  // On non-home pages, prefix anchors with the home path so they navigate back
  const isHome = pathname === "/" || pathname === "/en";
  const homeBase = isHome ? "" : locale === "en" ? "/en" : "/";

  // Prensa aún no tiene un destino listo — oculto por ahora. Quitar este
  // flag cuando vuelva a estar disponible.
  const SHOW_NEWS_LINK = false;

  const aboutHref = locale === "en" ? "/en/about" : "/about";

  const navLinks = [
    { label: t.nav.about, href: aboutHref },
    { label: t.nav.collections, href: `${homeBase}#obras` },
    ...(SHOW_NEWS_LINK
      ? [{ label: t.nav.news, href: `${homeBase}#news` }]
      : []),
    { label: t.nav.contact, href: `${homeBase}#contacto` },
  ];

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    // Enlaces a página completa (como /about) navegan normal, sin interceptar.
    if (!href.includes("#")) return;

    if (!isHome) {
      sessionStorage.setItem("skip-intro", "1");
      return;
    }
    e.preventDefault();
    scrollToSection(href.replace(/.*#/, ""));
  }

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const titleY = useTransform(progress, [0, 1], ["6%", "0%"]);

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="relative bg-[#1A1916] text-white overflow-hidden min-h-screen flex flex-col"
    >
      {/* Hero background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: titleY }}>
        <img
          src="/CiaparaHeroImg.jpeg"
          alt=""
          className="w-full h-full object-cover object-top scale-110"
        />
        <div className="absolute inset-0 bg-[#1A1916]/85" />
      </motion.div>

      {/* Grain texture — matches Hero */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/3 w-[700px] h-[500px] pointer-events-none z-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, #8B3A2A 0%, transparent 70%)",
        }}
      />

      {/* ── LARGE TITLE — per-character clip reveal + scroll parallax ── */}
      <div className="relative z-10 pt-24 px-6 mx-auto">
        <motion.div style={{ y: titleY }} className="will-change-transform">
          <div className="flex">
            {"CIAPARA".split("").map((char, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.0, ease: expo, delay: i * 0.05 }}
                  className="inline-block text-[clamp(4.5rem,14vw,13rem)] font-bold tracking-tight text-white leading-[0.88] select-none"
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: expo, delay: 0.35 }}
          className="mt-10 w-full h-px bg-white/10 origin-left"
        />
      </div>

      {/* ── THREE COLUMNS ── */}
      <div className="relative z-10 mx-auto px-6 pt-20 pb-16 flex-1 flex flex-col justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10"
        >
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.4em] uppercase text-white"
            >
              C I A P A R A
            </motion.p>
            {/* <motion.p
              custom={0.08}
              variants={fadeUp}
              className="text-xs text-white/40 leading-relaxed max-w-xs"
            >
              {t.footer.studioDesc}
            </motion.p> */}
            <motion.div
              custom={0.16}
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-[#8B3A2A]/40 px-3 py-2 w-fit"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#8B3A2A]"
              />
              <span className="text-xs font-bold text-[#8B3A2A] tracking-[0.12em] uppercase">
                {t.footer.established}
              </span>
            </motion.div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <motion.p
              custom={0.06}
              variants={fadeUp}
              className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2"
            >
              {t.footer.navigation}
            </motion.p>
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                custom={0.12 + i * 0.06}
                variants={fadeUp}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: expo }}
                className="underline-hover text-sm text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                {label}
              </motion.a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <motion.p
              custom={0.1}
              variants={fadeUp}
              className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2"
            >
              {t.footer.contact}
            </motion.p>
            <motion.div
              custom={0.18}
              variants={fadeUp}
              className="space-y-3 text-sm text-white/60"
            >
              <p>
                <a
                  href="mailto:Ciaenriqueciapara@gmail.com"
                  className="underline-hover hover:text-white transition-colors duration-300"
                >
                  Ciaenriqueciapara@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+526642177876"
                  className="underline-hover hover:text-white transition-colors duration-300"
                >
                  +52 664 217 7876
                </a>
              </p>
            </motion.div>
            <motion.div custom={0.26} variants={fadeUp} className="mt-4">
              <motion.a
                href="https://www.instagram.com/enriqueciapara/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: expo }}
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={18} />
                <span>@enriqueciapara</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.0, ease: expo, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/20"
        >
          <p>
            &copy; {new Date().getFullYear()} Enrique Ciapara. {t.footer.rights}{" "}
            <span>
              {t.footer.developedBy}{" "}
              <a
                href="https://e-commetrics.com"
                className="underline-hover hover:text-white transition-colors duration-300"
              >
                E-commetrics
              </a>
              .
            </span>
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white/50 transition-colors duration-300"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="hover:text-white/50 transition-colors duration-300"
            >
              {t.footer.credits}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
