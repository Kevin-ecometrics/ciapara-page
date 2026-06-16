import type { Locale } from './i18n'

export const erroresTranslations = {
    es:
    {
        hero: {
            subtitle: "Colección · Enrique Ciapara · 2018 — 2019",
            title:'Catálogo de Errores',
            title2:'Errores',
            explore: 'Explorar',
        },
        quotes: {
            q1: 'Enrique Ciapara supone la manifestación de un deseo, el placer y el goce de pintar desde una aspiración a la libertad total, en la cual el error es pura manifestación imaginativa y alucinada, hecha de pura materia pictórica.',
            s1: 'Carlos E. Palacios',
            q2: 'Habría que decir que estos últimos cuadros de “Catálogo de errores” están retando nuestros prejuicios como espectadores, algo que pocas veces sucede en el terreno de la pintura actual.',
            s2: 'Carlos E. Palacios',
        }
    },
    en:
    {
        hero: {
            title:'Catálogo de Errores',
            subtitle: 'Los errores como deseos de Enrique Ciapara'
        },
        quotes: {
            q1: 'Enrique Ciapara supone la manifestación de un deseo, el placer y el goce de pintar desde una aspiración a la libertad total, en la cual el error es pura manifestación imaginativa y alucinada, hecha de pura materia pictórica.',
            s1: 'Carlos E. Palacios',
            q2: 'Habría que decir que estos últimos cuadros de “Catálogo de errores” están retando nuestros prejuicios como espectadores, algo que pocas veces sucede en el terreno de la pintura actual.',
            s2: 'Carlos E. Palacios',
        }
    }
    

}

export function useErroresT(locale: Locale) {
  return erroresTranslations[locale]
}
