"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useI18n } from "../providers/i18nProvider";
import type { Locale } from "../lib/i18n";
import { scrollToSection } from "../lib/scrollToSection";

export default function NavbarLight() {
  const { t, locale, setLocale } = useI18n();
  const pathname = usePathname();

  // On non-home pages, prefix anchors with the home path so they navigate back
  const isHome = pathname === "/" || pathname === "/en";
  const homeBase = isHome ? "" : locale === "en" ? "/en" : "/";

  // Prensa aún no tiene un destino listo — oculto por ahora. Quitar este
  // flag cuando vuelva a estar disponible.
  const SHOW_NEWS_LINK = false;

  const aboutHref = locale === "en" ? "/en/about" : "/about";

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
    // Enlaces a página completa (como /about) navegan normal, sin interceptar.
    if (!href.includes("#")) return;

    if (!isHome) {
      sessionStorage.setItem("skip-intro", "1");
      return;
    }
    e.preventDefault();
    scrollToSection(href.replace(/.*#/, ""));
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[#E4DFD8] py-3">
      <div className="mx-auto px-6 flex items-center justify-between">
        {/* Izquierda: logo + links */}
        <div className="flex items-center gap-10">
          <a href={homeBase || "#"} className="flex items-center shrink-0">
            <Image
              src="/logos/ecp 3.2.png"
              alt="Ciapara"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-xs tracking-[0.18em] uppercase text-black/90 hover:text-[#1A1916] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em]">
          {(["es", "en"] as Locale[]).map((l, i) => (
            <span key={l} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-[#6B6660]/30">/</span>}
              <button
                onClick={() => setLocale(l)}
                className={`uppercase transition-colors duration-300 cursor-pointer ${
                  locale === l
                    ? "text-[#1A1916] font-semibold"
                    : "text-[#6B6660]/50 hover:text-[#6B6660]"
                }`}
              >
                {l}
              </button>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
