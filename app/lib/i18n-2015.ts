import type { Locale } from './i18n'

export const translations2015 = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "",
      explore: "Explorar",
      bgImageAlt: "Portada de la exposición 2015 del artista mexicano Enrique Ciapara",
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
      title2: "",
      explore: "Explore",
      bgImageAlt: "Cover of the 2015 exhibition by Mexican artist Enrique Ciapara",
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
      title2: "",
      explore: "Explorer",
      bgImageAlt: "Couverture de l'exposition 2015 de l'artiste mexicain Enrique Ciapara",
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
      title2: "",
      explore: "Explorar",
      bgImageAlt: "Portada de l'exposició 2015 de l'artista mexicà Enrique Ciapara",
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
