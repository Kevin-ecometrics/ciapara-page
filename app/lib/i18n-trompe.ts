import type { Locale } from './i18n'

export const translationsTrompe = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2013",
      title1: "Trompe",
      title2: "L'œil",
      explore: "Explorar",
      bgImageAlt: "Exposición Trompe-l'œil presentada en 2013 por Enrique Ciapara, artista visual de Baja California",
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
      title2: "L'œil",
      explore: "Explore",
      bgImageAlt: "Trompe-l'œil exhibition presented in 2013 by Enrique Ciapara, visual artist from Baja California",
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
      subtitle: "Œuvres · Enrique Ciapara · 2013",
      title1: "Trompe",
      title2: "L'œil",
      explore: "Explorer",
      bgImageAlt: "Exposition Trompe-l'œil présentée en 2013 par Enrique Ciapara, artiste visuel de Basse-Californie",
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
      subtitle: "Obres · Enrique Ciapara · 2013",
      title1: "Trompe",
      title2: "L'œil",
      explore: "Explorar",
      bgImageAlt: "Exposició Trompe-l'œil presentada el 2013 per Enrique Ciapara, artista visual de Baixa Califòrnia",
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

export function useTrompeT(locale: Locale) {
  return translationsTrompe[locale]
}
