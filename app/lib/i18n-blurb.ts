import type { Locale } from './i18n'

export const blurbTranslations = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2000-2009",
      title1: "Archivo",
      title2: "2000-09",
      explore: "Explorar",
      bgImageAlt: "Pieza titulada Caminata, técnica mixta sobre tela, 183 x 305 cm, elaborada en 2008 por el artista Enrique Ciapara",
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
      bgImageAlt: "Piece titled Walk, mixed media on canvas, 183 x 305 cm, made in 2008 by artist Enrique Ciapara",
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
      items: Array.from({ length: 40 }, () => ({
        title: "",
        technique: "",
        dimensions: "",
      })),
    },
  },
  fr: {
    hero: {
      subtitle: "Œuvres · Enrique Ciapara · 2000-2009",
      title1: "2000-09",
      title2: "Archive",
      explore: "Explorer",
      bgImageAlt: "Pièce intitulée Caminata (Promenade), technique mixte sur toile, 183 x 305 cm, réalisée en 2008 par l'artiste Enrique Ciapara",
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
      items: Array.from({ length: 40 }, () => ({
        title: "",
        technique: "",
        dimensions: "",
      })),
    },
  },
  ca: {
    hero: {
      subtitle: "Obres · Enrique Ciapara · 2000-2009",
      title1: "2000-09",
      title2: "Arxiu",
      explore: "Explorar",
      bgImageAlt: "Peça titulada Caminata (Caminada), tècnica mixta sobre tela, 183 x 305 cm, realitzada el 2008 per l'artista Enrique Ciapara",
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
