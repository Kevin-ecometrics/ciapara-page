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

  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";

  function setLocale(l: Locale) {
    if (l === locale) return;
    sessionStorage.setItem("skip-intro", "1");
    if (l === "en") {
      router.push(`/en${pathname}`, { scroll: false });
    } else {
      router.push(pathname.replace(/^\/en/, "") || "/", { scroll: false });
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
