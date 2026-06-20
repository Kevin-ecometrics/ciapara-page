import type { Locale } from './i18n'

export const blurbTranslations = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2000-2009",
      title1: "Archivo",
      title2: "2000-09",
      explore: "Explorar",
    },
    nav: {
      back: "Volver",
    },
    gallery: {
      hint: "Pasa el cursor sobre una obra",
      labels: {
        title: "Título",
        technique: "Técnica",
        dimensions: "Dimensiones",
        date: "Año",
        close: "Cerrar",
      },
      items: Array.from({ length: 40 }, () => ({
        title: "",
        technique: "",
        dimensions: "",
      })),
    },
  },
  en: {
    hero: {
      subtitle: "Works · Enrique Ciapara · 2000-2009",
      title1: "2000-09",
      title2: "Archive",
      explore: "Explore",
    },
    nav: {
      back: "Back",
    },
    gallery: {
      hint: "Hover over a piece",
      labels: {
        title: "Title",
        technique: "Technique",
        dimensions: "Dimensions",
        date: "Year",
        close: "Close",
      },
      items: Array.from({ length: 40 }, () => ({
        title: "",
        technique: "",
        dimensions: "",
      })),
    },
  },
}

export function useBlurbT(locale: Locale) {
  return blurbTranslations[locale]
}
