import type { Locale } from './i18n'

export const translations2015 = {
  es: {
    hero: {
      subtitle: "Colección · Enrique Ciapara · 2015",
      title1: "Catálogo",
      title2: "2015",
      explore: "Explorar",
    },
    nav: {
      back: "Volver",
    },
    carousel: {
      title: "En su obra se encuentra una síntesis cultural entre lo bajacaliforniano y lo mediterráneo",
    },
    quote1: {
      q: "La pintura de Ciapara es una pintura vitalista, que sin explicitarlo, invita a gozar de la misma, de sus colores, de su espontaneidad, de sus líneas sensibles: nada rígido se encuentra en ella, es flexible, un deleite para los ojos; nada oscuro, ni tétrico, ni dramático, ni ideológico se concibe en sus cuadros, sino el puro goce de ver, comer, beber, vivir.",
      author: "Luis Verdejo",
    },
    quote2: {
      q: "Su obra, aunque abstracta, semi-abstracta o sintética, celebra el paisaje, la luz de una geografía particular, de una manera de ser y de vivir en el Norte del país.",
      author: "Luis Verdejo",
    },
  },
  en: {
    hero: {
      subtitle: "Collection · Enrique Ciapara · 2015",
      title1: "2015",
      title2: "Catalogue",
      explore: "Explore",
    },
    nav: {
      back: "Back",
    },
    carousel: {
      title: "His work reflects a cultural synthesis of Baja California and Mediterranean influences",
    },
    quote1: {
      q: "Ciapara's painting is full of life; without explicitly stating it, it invites us to enjoy it — its colors, its spontaneity, its delicate lines. There is nothing rigid about it; it is flexible, a delight to the eyes. Nothing dark, gloomy, dramatic, or ideological can be found in his paintings, only the pure joy of seeing, eating, drinking, and living.",
      author: "Luis Verdejo",
    },
    quote2: {
      q: "His work, whether abstract, semi-abstract, or synthetic, celebrates the landscape, the light of a particular geography, a way of being and living in the North of the country.",
      author: "Luis Verdejo",
    },
  },
}

export function use2015T(locale: Locale) {
  return translations2015[locale]
}
