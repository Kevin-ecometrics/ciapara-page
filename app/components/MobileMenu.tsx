"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaInstagram } from "react-icons/fa";
import type { Locale } from "../lib/i18n";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  locale: Locale;
  setLocale: (l: Locale) => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  locale,
  setLocale,
  onLinkClick,
}: Props) {
  const { t } = useI18n();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.55, ease: expo }}
          className="fixed inset-0 z-[100] bg-[#1A1916] flex flex-col overflow-hidden"
        >
          {/* ── Logo full-width ── */}
          <div className="px-6 pt-8">
            <img
              src="/logos/ecp1.png"
              alt="Enrique Ciapara"
              className="w-full h-auto"
            />
          </div>

          {/* ── Close + idioma ── */}
          <div className="px-6 pt-5 flex items-center justify-between">
            <button
              onClick={onClose}
              aria-label={t.nav.closeMenu}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300"
            >
              Close
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M1 1l8 8M9 1L1 9" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.15em]">
              {(["es", "en", "fr", "ca"] as Locale[]).map((l, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/20">/</span>}
                  <button
                    onClick={() => { setLocale(l); onClose(); }}
                    className={`uppercase cursor-pointer transition-colors duration-300 ${
                      locale === l
                        ? "text-white font-semibold"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* ── Links de navegación ── */}
          <nav className="flex-1 flex flex-col justify-center px-6">
            {links.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: expo, delay: 0.12 + i * 0.07 }}
                onClick={(e) => { onLinkClick(e, href); onClose(); }}
                className="block text-[clamp(2.8rem,11vw,4.5rem)] font-bold uppercase text-white hover:text-white/50 transition-colors duration-300 leading-tight py-3 border-b border-white/10 last:border-0"
                style={{ fontFamily: "var(--font-interstate-compressed)" }}
              >
                {label}
              </motion.a>
            ))}
          </nav>

          {/* ── Contacto + redes ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: expo, delay: 0.45 }}
            className="px-6 pb-10 pt-6 border-t border-white/10 flex flex-col gap-3"
          >
            <a
              href="https://www.instagram.com/enriqueciapara/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-white/50 hover:text-white transition-colors duration-300 w-fit"
            >
              <FaInstagram size={17} />
              <span>@enriqueciapara</span>
            </a>

            <p className="text-sm uppercase tracking-wide text-white/30">
              {t.footer.location1}, {t.footer.location2}
            </p>

            <a
              href="tel:+526642177876"
              className="text-sm uppercase tracking-wide text-white/60 hover:text-white transition-colors duration-300 w-fit"
            >
              +52 664 217 7876
            </a>

            <a
              href="mailto:Ciaenriqueciapara@gmail.com"
              className="text-sm uppercase tracking-wide text-white/60 hover:text-white transition-colors duration-300 w-fit"
            >
              Ciaenriqueciapara@gmail.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
