"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "../providers/i18nProvider";
import type { Locale } from "../lib/i18n";
import { scrollToSection } from "../lib/scrollToSection";
import MobileMenu from "./MobileMenu";

const expo = [0.16, 1, 0.3, 1] as const;

function LangSwitcher({
  locale,
  setLocale,
  scrolled,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  scrolled: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
      {(["es", "en", "fr", "ca"] as Locale[]).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && (
            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-[#6B6660]/30" : "text-white/20"
              }`}
            >
              /
            </span>
          )}
          <button
            onClick={() => setLocale(l)}
            className={`uppercase transition-colors duration-300 cursor-pointer ${
              locale === l
                ? scrolled
                  ? "text-[#1A1916] font-semibold"
                  : "text-white font-semibold"
                : scrolled
                  ? "text-[#6B6660]/50 hover:text-[#6B6660]"
                  : "text-white/30 hover:text-white/60"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

function HamburgerBtn({
  onClick,
  dark,
}: {
  onClick: () => void;
  dark: boolean;
}) {
  const { t } = useI18n();
  return (
    <button
      onClick={onClick}
      aria-label={t.nav.openMenu}
      className={`md:hidden flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
        dark ? "text-[#1A1916]/70 hover:text-[#1A1916]" : "text-white/70 hover:text-white"
      }`}
    >
      Menu
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M0 1h12M0 5h12M0 9h12" />
      </svg>
    </button>
  );
}

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome =
    pathname === "/" ||
    pathname === "/en" ||
    pathname === "/en/" ||
    pathname === "/fr" ||
    pathname === "/fr/" ||
    pathname === "/ca" ||
    pathname === "/ca/";
  const homeBase = isHome
    ? ""
    : locale === "en"
    ? "/en"
    : locale === "fr"
    ? "/fr"
    : locale === "ca"
    ? "/ca"
    : "/";

  const SHOW_NEWS_LINK = true;
  const aboutHref =
    locale === "en"
      ? "/en/about"
      : locale === "fr"
      ? "/fr/about"
      : locale === "ca"
      ? "/ca/about"
      : "/about";

  const links = [
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
    if (!href.includes("#")) return;
    if (!isHome) {
      return;
    }
    e.preventDefault();
    scrollToSection(href.replace(/.*#/, ""));
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setInHero(y < (isHome ? window.innerHeight * 1.5 : window.innerHeight));
      setScrolled(y > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ── Homepage: navbar único que se oculta en el hero ── */
  if (isHome) {
    return (
      <>
        <motion.nav
          initial={{ opacity: 0, y: -8, visibility: "hidden" }}
          animate={{ 
            opacity: inHero ? 0 : 1, 
            y: inHero ? -8 : 0,
            visibility: inHero ? "hidden" : "visible" 
          }}
          transition={{ duration: 0.5, ease: expo }}
          className={`fixed top-0 left-0 right-0 z-50 ${
            inHero ? "pointer-events-none opacity-0" : ""
          } ${
            scrolled
              ? "bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8] py-3"
              : "bg-transparent py-6"
          }`}
        >
          <div className="mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-10">
              <motion.a href="#" className="shrink-0">
                <Image
                  src="/logos/ecp 3.2.png"
                  alt="Ciapara"
                  width={80}
                  height={32}
                  className={`h-8 w-auto transition-all duration-500 ${
                    scrolled ? "" : "brightness-0 invert"
                  }`}
                />
              </motion.a>
              <HamburgerBtn onClick={() => setMenuOpen(true)} dark={scrolled} />
              <div
                className="hidden md:flex items-center gap-10"
                onMouseLeave={() => setHovered(null)}
              >
                {links.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    onMouseEnter={() => setHovered(href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: expo, delay: 0.3 + i * 0.06 }}
                    className={`relative text-xs tracking-[0.18em] uppercase transition-colors duration-500 ${
                      scrolled
                        ? "text-[#6B6660] hover:text-[#1A1916]"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {label}
                    {hovered === href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-current"
                        transition={{ duration: 0.3, ease: expo }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: expo, delay: 0.6 }}
            >
              <LangSwitcher locale={locale} setLocale={setLocale} scrolled={scrolled} />
            </motion.div>
          </div>
        </motion.nav>

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={links}
          locale={locale}
          setLocale={setLocale}
          onLinkClick={handleNavClick}
        />
      </>
    );
  }

  /* ── Páginas de obras: dos navbars independientes ── */
  return (
    <>
      {/* 1. Navbar del hero: transparente, con logo ecp 3.3.1, texto blanco */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: inHero ? 1 : 0, y: inHero ? 0 : -8 }}
        transition={{ duration: 0.4, ease: expo }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6"
        style={{ pointerEvents: inHero ? "auto" : "none" }}
      >
        <div className="mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-10">
            <a
              href={homeBase || "/"}
              className="shrink-0"
            >
              <Image
                src="/logos/ecp 3.3.1.png"
                alt="Ciapara"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <HamburgerBtn onClick={() => setMenuOpen(true)} dark={false} />
            <div
              className="hidden md:flex items-center gap-10"
              onMouseLeave={() => setHovered(null)}
            >
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  onMouseEnter={() => setHovered(href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: expo, delay: 0.2 + i * 0.06 }}
                  className="relative text-xs tracking-[0.18em] uppercase text-white hover:font-bold transition-all duration-200"
                >
                  {label}
                  {hovered === href && (
                    <motion.span
                      layoutId="hero-nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-current"
                      transition={{ duration: 0.3, ease: expo }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          <LangSwitcher locale={locale} setLocale={setLocale} scrolled={false} />
        </div>
      </motion.nav>

      {/* 2. Navbar scrolled: entra desde arriba al salir del hero, con logo y fondo crema */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inHero ? -100 : 0, opacity: inHero ? 0 : 1 }}
        transition={{ duration: 0.5, ease: expo }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8] py-3"
        style={{ pointerEvents: inHero ? "none" : "auto" }}
      >
        <div className="mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-10">
            <a
              href={homeBase || "/"}
              className="shrink-0"
            >
              <Image
                src="/logos/ecp 3.2.png"
                alt="Ciapara"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <HamburgerBtn onClick={() => setMenuOpen(true)} dark={true} />
            <div
              className="hidden md:flex items-center gap-10"
              onMouseLeave={() => setHovered(null)}
            >
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  onMouseEnter={() => setHovered(href)}
                  className="relative text-xs tracking-[0.18em] uppercase text-[#6B6660] hover:text-[#1A1916] transition-colors duration-300"
                >
                  {label}
                  {hovered === href && (
                    <motion.span
                      layoutId="scrolled-nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-current"
                      transition={{ duration: 0.3, ease: expo }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <LangSwitcher locale={locale} setLocale={setLocale} scrolled={true} />
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        locale={locale}
        setLocale={setLocale}
        onLinkClick={handleNavClick}
      />
    </>
  );
}
