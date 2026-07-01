import type { Locale } from './i18n'

export const translations2015 = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "",
      explore: "Explorar",
      bgImageAlt: "Pieza dulce del día de brujas, acrílico sobre tela 122x141 cm, por el pintor Enrique Ciapara",
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
      bgImageAlt: "Sweet piece, Halloween-themed, acrylic on canvas 122x141 cm by painter Enrique Ciapara",
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
      subtitle: "Œuvres · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "Série",
      explore: "Explorer",
      bgImageAlt: "Pièce sucrée sur le thème d'Halloween, acrylique sur toile 122x141 cm, du peintre Enrique Ciapara",
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
      subtitle: "Obres · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "Sèrie",
      explore: "Explorar",
      bgImageAlt: "Peça dolça temàtica de Halloween, acrílic sobre tela 122x141 cm, del pintor Enrique Ciapara",
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

export function use2015T(locale: Locale) {
  return translations2015[locale]
}
