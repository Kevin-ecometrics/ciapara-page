"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { translations, type Locale, type Translations } from "../lib/i18n";

type I18nContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  t: translations.es,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const locale: Locale = pathname.startsWith("/fr")
    ? "fr"
    : pathname.startsWith("/ca")
    ? "ca"
    : pathname.startsWith("/en")
    ? "en"
    : "es";

  function stripLocalePrefix(path: string): string {
    return path.replace(/^\/(en|fr|ca)(?=\/|$)/, "") || "/";
  }

  function setLocale(l: Locale) {
    if (l === locale) return;
    sessionStorage.setItem("skip-intro", "1");
    const base = stripLocalePrefix(pathname);
    if (l === "es") {
      router.push(base, { scroll: false });
    } else {
      router.push(`/${l}${base === "/" ? "" : base}`, { scroll: false });
    }
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
