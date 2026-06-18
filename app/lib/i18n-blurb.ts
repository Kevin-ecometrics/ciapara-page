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
      },
      items: [
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
      ],
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
      },
      items: [
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
        { title: "", technique: "", dimensions: "" },
      ],
    },
  },
}

export function useBlurbT(locale: Locale) {
  return blurbTranslations[locale]
}
