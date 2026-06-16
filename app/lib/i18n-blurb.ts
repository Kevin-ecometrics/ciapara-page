import type { Locale } from './i18n'

export const blurbTranslations = {
  es: {
    hero: {
      subtitle: "Colección · Enrique Ciapara · 2000-2009",
      title1: "Colección",
      title2: "2000-09",
      explore: "Explorar",
    },
    nav: {
      back: "Volver",
    },
    carousel: {
      title: "Las pinturas de Enrique Ciapara son un auténtico placer.",
    },
    quote1: {
      q: "Entrar al estudio de Enrique Ciapara es experimentar la extraña sensación de que se está en muchas partes al mismo tiempo.",
      author: "Santiago Espinosa de los Monteros",
    },
    quote2: {
      q: "Yo diría que los cuadros de Ciapara son líricos y sincopados, como el «Night Train» de John Coltrane; espontáneos, como los garabatos de los niños, pero con una gran conciencia de su ingenio compositivo; son naturales; y sus superficies expresan un placer tan hedonista en el proceso de su creación que no queda espacio para la nostalgia del pasado de la pintura.",
      author: "Lucía Sanromán",
      qBg: "Lo que ofrece es una narrativa diferente, tan sorprendente por su sinceridad como por su paradójica fugacidad. Ofrece pintura. Solo eso. Pintura, pero en su máxima expresión.",
    },
  },
  en: {
    hero: {
      subtitle: "Collection · Enrique Ciapara · 2000-2009",
      title1: "2000-09",
      title2: "Collection",
      explore: "Explore",
    },
    nav: {
      back: "Back",
    },
    carousel: {
      title: "Enrique Ciapara’s paintings give real pleasure.",
    },
    quote1: {
      q: "To enter Enrique Ciapara's studio is to experience the strange sensation of being in many places at once.",
      author: "Santiago Espinosa de los Monteros",
    },
    quote2: {
      q: "I say that Ciapara’s paintings are lyrical and syncopated like John Coltrane’s Night Train; loose like kids’ doodles but fully aware in their compositional wit; they are natural; and their surfaces express such hedonistic pleasure in the process of their making that there is no space left for nostalgia of painting’s past.",
      author: "Lucía Sanromán",
      qBg: "What he offers is a different narrative, as startling for its sincerity as for its paradoxical transience. He offers painting. Just that. Painting, but at its best.",
    },
  },
}

export function useBlurbT(locale: Locale) {
  return blurbTranslations[locale]
}
