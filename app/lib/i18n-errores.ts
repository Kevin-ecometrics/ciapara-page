import type { Locale } from './i18n'

export const erroresTranslations = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2018 — 2019",
      title1: "Catálogo de",
      title2: "Errores",
      explore: "Explorar",
      bgImageAlt: "Obra titulada Banquete en el pinar, acrílico sobre tela, 152 x 429 cm, por Enrique Ciapara, 2019",
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
      bgImageAlt: "Work titled Banquet in the Pine Forest, made in acrylic on canvas, 152 x 429 cm, by Enrique Ciapara, 2019",
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
      subtitle: "Œuvres · Enrique Ciapara · 2018 — 2019",
      title1: "Catalogue",
      title2: "d'Errores",
      explore: "Explorer",
      bgImageAlt: "Œuvre intitulée Banquete en el pinar (Banquet dans la pinède), acrylique sur toile, 152 x 429 cm, par Enrique Ciapara, 2019",
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
      subtitle: "Obres · Enrique Ciapara · 2018 — 2019",
      title1: "Catàleg",
      title2: "d'Errores",
      explore: "Explorar",
      bgImageAlt: "Obra titulada Banquete en el pinar (Banquet al pinar), acrílic sobre tela, 152 x 429 cm, per Enrique Ciapara, 2019",
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

export function useErroresT(locale: Locale) {
  return erroresTranslations[locale]
}
