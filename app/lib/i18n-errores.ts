import type { Locale } from './i18n'

export const erroresTranslations = {
  es: {
    hero: {
      subtitle: "Obras · Enrique Ciapara · 2018 — 2019",
      title1: "Catálogo de",
      title2: "Errores",
      explore: "Explorar",
    },
    nav: {
      back: "Volver",
    },
    carousel: {
      title: "Los errores como deseos de Enrique Ciapara",
    },
    quote1: {
      q: "Enrique Ciapara supone la manifestación de un deseo, el placer y el goce de pintar desde una aspiración a la libertad total, en la cual el error es pura manifestación imaginativa y alucinada, hecha de pura materia pictórica.",
      author: "Carlos E. Palacios",
    },
    quote2: {
      q: 'Habría que decir que estos últimos cuadros de "Catálogo de errores" están retando nuestros prejuicios como espectadores, algo que pocas veces sucede en el terreno de la pintura actual.',
      author: "Carlos E. Palacios",
    },
  },
  en: {
    hero: {
      subtitle: "Works · Enrique Ciapara · 2018 — 2019",
      title1: "Errores",
      title2: "Catalogue",
      explore: "Explore",
    },
    nav: {
      back: "Back",
    },
    carousel: {
      title: "Errors as Desires by Enrique Ciapara",
    },
    quote1: {
      q: "Enrique Ciapara represents the manifestation of desire — the pleasure and joy of painting from an aspiration toward total freedom, in which the error is pure imaginative and hallucinatory expression, made of pure pictorial matter.",
      author: "Carlos E. Palacios",
    },
    quote2: {
      q: 'One must say that these latest paintings from "Catalog of Errors" are challenging our prejudices as viewers, something that rarely happens in the realm of contemporary painting.',
      author: "Carlos E. Palacios",
    },
  },
}

export function useErroresT(locale: Locale) {
  return erroresTranslations[locale]
}
