"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from "motion/react";
import { FaInstagram } from "react-icons/fa";
import { useI18n } from "../providers/i18nProvider";

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
  const { t } = useI18n();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const bgY = useTransform(progress, [0, 1], ["6%", "0%"]);

  // Logo: MotionValue + animate() — sin restricciones de ciclo de vida
  const logoY = useMotionValue(260);
  const logoShown = useRef(false);

  useEffect(() => {
    const handle = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const ratio = window.scrollY / total;

      if (ratio > 0.82 && !logoShown.current) {
        logoShown.current = true;
        const finalY = window.innerWidth < 768 ? 18 : 70;
        animate(logoY, finalY, { duration: 0.75, ease: expo });
      } else if (ratio < 0.72 && logoShown.current) {
        logoShown.current = false;
        logoY.set(260);
      }
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [logoY]);

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="relative bg-[#1A1916] text-white overflow-hidden min-h-screen flex flex-col"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/images/HeroBW.jpeg"
          alt=""
          className="w-full h-full object-cover object-top scale-110"
        />
        <div className="absolute inset-0 bg-[#1A1916]/85" />
      </motion.div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[700px] h-[500px] pointer-events-none z-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, #8B3A2A 0%, transparent 70%)",
        }}
      />

      {/* Spacer = zona oculta del footer (lo que tapa el componente de arriba) */}
      <div className="h-[50dvh] md:h-[30dvh] flex-shrink-0" />

      {/* ── CONTENT — ocupa el área visible: 50dvh mobile / 70dvh desktop ── */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-8 md:pt-10 flex flex-col flex-1">
        {/* Contact row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-start"
        >
          {/* Location */}
          <motion.div custom={0} variants={fadeUp}>
            <p className="text-base sm:text-lg md:text-xl font-bold uppercase text-white leading-tight">
              Tijuana, Baja California,
              <br />
              México
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div custom={0.1} variants={fadeUp}>
            <a
              href="tel:+526642177876"
              className="text-base sm:text-lg md:text-xl font-bold uppercase text-white hover:text-white/70 transition-colors duration-300"
            >
              Tel +52 664 217 7876
            </a>
          </motion.div>

          {/* Email */}
          <motion.div custom={0.2} variants={fadeUp} className="md:text-right">
            <a
              href="mailto:Ciaenriqueciapara@gmail.com"
              className="text-base sm:text-lg md:text-xl font-bold uppercase text-white hover:text-white/70 transition-colors duration-300"
            >
              Ciaenriqueciapara@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom bar — debajo del contacto con gap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.0, ease: expo, delay: 0.2 }}
          className="mt-10 md:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-6 pt-5"
        >
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/enriqueciapara/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: expo }}
            className="inline-flex items-center gap-3 text-sm md:text-base uppercase tracking-wide text-white/70 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={20} />
            <span>@enriqueciapara</span>
          </motion.a>

          {/* Copyright + links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs md:text-sm uppercase tracking-wide text-white/70">
            <p suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Enrique Ciapara.{" "}
              {t.footer.rights} {t.footer.developedBy}{" "}
              <a
                href="https://www.ecommetrica.com/"
                className="hover:text-white transition-colors duration-300"
              >
                Ecommetrica
              </a>
              .
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-white/60 transition-colors duration-300"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="hover:text-white/60 transition-colors duration-300"
              >
                {t.footer.credits}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logo — posición absoluta en el fondo, parcialmente cortado */}
      <motion.div
        style={{ y: logoY }}
        className="absolute bottom-0 left-0 right-0 z-10 pl-6 pr-3 will-change-transform"
      >
        <img
          src="/logos/ecp 1.png"
          alt="Enrique Ciapara"
          className="w-full h-auto object-contain select-none"
          draggable={false}
        />
      </motion.div>
    </footer>
  );
}
