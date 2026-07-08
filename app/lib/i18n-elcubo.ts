import type { Locale } from './i18n'

export const translationsElCubo = {
  es: {
    hero: {
      title: "Presenta CECUT la exposición \"Trompe-L'oeil\" de Enrique Ciapara",
      bgImageAlt:
        "Fotografía intervenida por Enrique Ciapara, parte de la exposición de su obra Trompe l'œil en El Cubo",
    },
  },
  en: {
    hero: {
      title: "CECUT presents the exhibition \"Trompe-L'oeil\" by Enrique Ciapara",
      bgImageAlt:
        "Manipulated photograph by Enrique Ciapara, part of his Trompe-l'œil exhibition at El Cubo",
    },
  },
  fr: {
    hero: {
      title: "Le CECUT présente l'exposition « Trompe-L'oeil » d'Enrique Ciapara",
      bgImageAlt:
        "Photographie manipulée par Enrique Ciapara, faisant partie de son exposition Trompe-l'œil à El Cubo",
    },
  },
  ca: {
    hero: {
      title: "El CECUT presenta l'exposició «Trompe-L'oeil» d'Enrique Ciapara",
      bgImageAlt:
        "Fotografia intervinguda per Enrique Ciapara, part de la seva exposició Trompe-l'œil a El Cubo",
    },
  },
}

export function useElCuboT(locale: Locale) {
  return translationsElCubo[locale]
}
