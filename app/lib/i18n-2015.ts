import type { Locale } from './i18n'

export const translations2015 = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "",
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
      subtitle: "Works · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "Series",
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

export function use2015T(locale: Locale) {
  return translations2015[locale]
}
