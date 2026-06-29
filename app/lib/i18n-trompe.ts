import type { Locale } from './i18n'

export const translationsTrompe = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2013",
      title1: "Trompe",
      title2: "L'oeil",
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
      subtitle: "Works · Enrique Ciapara · 2013",
      title1: "Trompe",
      title2: "L'oeil",
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

export function useTrompeT(locale: Locale) {
  return translationsTrompe[locale]
}
