import type { Locale } from './i18n'

export const erroresTranslations = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2018 — 2019",
      title1: "Catálogo de",
      title2: "Errores",
      explore: "Explorar",
    },
    nav: {
      back: "Volver",
    },
    gallery: {
      hint: "Pasa el cursor sobre una obra",
      description: "",
      labels: {
        title: "Título",
        technique: "Técnica",
        dimensions: "Dimensiones",
        date: "Año",
        close: "Cerrar",
      },
    },
  },
  en: {
    hero: {
      subtitle: "Works · Enrique Ciapara · 2018 — 2019",
      title1: "Errores",
      title2: "Catalogue",
      explore: "Explore",
    },
    nav: {
      back: "Back",
    },
    gallery: {
      hint: "Hover over a piece",
      description: "",
      labels: {
        title: "Title",
        technique: "Technique",
        dimensions: "Dimensions",
        date: "Year",
        close: "Close",
      },
    },
  },
}

export function useErroresT(locale: Locale) {
  return erroresTranslations[locale]
}
