import type { Locale } from './i18n'

export const translationsVanitas = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara",
      title1: "Vanitas",
      title2: "",
      explore: "Explorar",
      bgImageAlt: "Vanitas, colección de grabados de Enrique Ciapara sobre la fragilidad y la vanidad",
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
      subtitle: "Works · Enrique Ciapara",
      title1: "Vanitas",
      title2: "",
      explore: "Explore",
      bgImageAlt: "Vanitas, a collection of prints by Enrique Ciapara on fragility and vanity",
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
  fr: {
    hero: {
      subtitle: "Œuvres · Enrique Ciapara",
      title1: "Vanitas",
      title2: "",
      explore: "Explorer",
      bgImageAlt: "Vanitas, une collection de gravures d'Enrique Ciapara sur la fragilité et la vanité",
    },
    nav: {
      back: "Retour",
    },
    gallery: {
      hint: "Passez le curseur sur une œuvre",
      description: "",
      labels: {
        title: "Titre",
        technique: "Technique",
        dimensions: "Dimensions",
        date: "Année",
        close: "Fermer",
      },
    },
  },
  ca: {
    hero: {
      subtitle: "Obres · Enrique Ciapara",
      title1: "Vanitas",
      title2: "",
      explore: "Explorar",
      bgImageAlt: "Vanitas, una col·lecció de gravats d'Enrique Ciapara sobre la fragilitat i la vanitat",
    },
    nav: {
      back: "Tornar",
    },
    gallery: {
      hint: "Passa el cursor per una obra",
      description: "",
      labels: {
        title: "Títol",
        technique: "Tècnica",
        dimensions: "Dimensions",
        date: "Any",
        close: "Tancar",
      },
    },
  },
}

export function useVanitasT(locale: Locale) {
  return translationsVanitas[locale]
}
