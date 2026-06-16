export type Locale = "es" | "en";

export const translations = {
    es: {
    nav: {
        about: "Acerca de",
        collections: "Colecciones",
        news: "Prensa",
        contact: "Contacto",
        artistPage: "Artista",
        aboutPage: "Textos",
        },
    hero: {
        place: "Estudio · Tijuana, B.C. · Est. 2026",
        title: "Enrique Ciapara",
        subtitle: "Artista abstracto basado en Tijuana México",
        scroller: "Desplazar"   
        },
    about: {
        quote: "La pintura de Ciapara es una pintura vitalista, que sin explicitarlo, invita a gozar de la misma, de sus colores, de su espontaneidad,de sus líneas sensibles: nada rígido se encuentra en ella, es flexible, un deleite para los ojos; nada oscuro, ni tétrico, ni dramático, ni ideológico, se concibe en sus cuadros, sino el puro goce de ver, comer, beber, vivir.",
        speaker: "Luis Verdejo",
        text: "Su pintura encierra una iconografía que a primera vista nos es cotidiana. En una siguiente mirada nos sorprende al descubrir que cada objeto, cada intento de reconstrucción de su entorno ha fallado y a cambio permitió el nacimiento de otro paralelo. Hay un mundo nuevo, con formas y códigos autónomos de todo lo que hemos aprendido a nombrar. Santiago Espinosa de los Monteros",
        speaker2: "Santiago Espinosa de los Monteros",
        date: "Ciudad de México, Junio 2011",
        preArrow:"Lorem",
        postArrow:"Ipsum",
        more:'Más información sobre "errores"',
        },
    collections: {
        quoteBold: "Las pinturas de Enrique Ciapara proporcionan un auténtico placer. Este placer no está separado de los sentidos, sino que depende de ellos, y disfrutar de su pintura no dista mucho de lo que se experimenta al degustar una comida extraordinaria y preparada con mucho cariño.",
        quote: "Lo que ofrece es una narrativa diferente, tan sorprendente por su sinceridad como por su paradójica fugacidad. Ofrece pintura. Solo eso. Pintura, pero en su máxima expresión.",
        speaker: "Lucía Sanromán",
        date: "Junio 2011",
        items: [ 
            {
                title: "Archivo 2000-09",
                description: "En esta colección de más de nueve años, Enrique Ciapara se presenta como un hábil mediador entre lo que él quiere y lo que la pintura quiere. Descubre más.",
            },
            {
                title: "Serie 2015",
                description: "Explora la colección 2015 de Enrique Ciapara: pintura semiabstracta y sintética que celebra el paisaje del Norte, la luz de Tarragona y el alma de la frontera."  
            },
            {
                title: "Catalogo de ERRORES",
                description: '¿Error, despropósito o feliz acierto? Descubre "Catálogo de Errores", la enigmática colección de Enrique Ciapara inspirada en Sandro Botticelli y Boccaccio.',
            },
            ]
        },
        works: {
            title: "Selección de Proyectos",
            },
        footer: {
            studio: "Estudio",
            studioDesc: "Arte abstracto contemporáneo desde Tijuana, Baja California.",
            established: "Tijuana, México · Est. 2001",
            navigation: "Navegación",
            contact: "Contacto",
            location1: "Tijuana, Baja California",
            location2: "México",
            rights: "Todos los derechos reservados.",
            developedBy: "Desarrollado por",
            privacy: "Privacidad",
            credits: "Créditos",
        },
        },
        en: {
    nav: {
        about: "About",
        collections: "Collections",
        news: "News",
        contact: "Contact",
        artistPage: "Artist",
        aboutPage: "Texts",
        },
            hero: {
                place: "Studio · Tijuana, B.C. · Est. 2026",
                title: "Enrique Ciapara",
                subtitle: "Abstract artist based in Tijuana, Mexico",
                scroller: "scroller",  
            },
            about: {
                quote: "Ciapara’s painting is full of life; without explicitly stating it, it invites us to enjoy it—its colors, its spontaneity, its delicate lines. There is nothing rigid about it; it is flexible, a delight to the eyes. Nothing dark, gloomy, dramatic, or ideological can be found in his paintings, only the pure joy of seeing, eating, drinking, and living.",
                speaker: "Luis Verdejo",
                text: "His painting contains an iconography that, at first glance, seems familiar to us. Upon closer inspection, we are surprised to discover that every object, every attempt to reconstruct his surroundings, has failed—and in its place, a parallel world has emerged. There is a new world, with forms and codes entirely independent of everything we have learned to name. Santiago Espinosa de los Monteros",
                speaker2: "Santiago Espinosa de los Monteros",
                date: "Mexico City, June 2011",
                preArrow:"Lorem",
                postArrow:"Ipsum",
                more:'More information about "Errores"',
            },
            collections: {
                quoteBold: "Enrique Ciapara’s paintings give real pleasure. This pleasure is not divorced from the senses but rather dependent on them, and to enjoy his painting is not too far removed from what is experienced during a lovingly made, extraordinary meal.",
                quote: "What he offers is a different narrative as startling for its sincerity as for its paradoxical transience. He offers painting. Just that. Painting, but at its best.",
                speaker: "Lucía Sanromán",
                date: "June 2011",
                items: [ 
                    {
                        title: "2000-09 Archive",
                        description: "In this collection spanning more than nine years, Enrique Ciapara emerges as a skilled mediator between what he wants and what the painting wants. Learn more.",
                    },
                    {
                        title: "2015 Series",
                        description: "Discover Enrique Ciapara’s 2015 collection: semi-abstract and synthetic paintings that pay homage to the northern landscape, the light of Tarragona, and the spirit of the border."  
                    },
                    {
                        title: "Errores Catalogue",
                        description: "Mistake, absurdity, or stroke of genius? Discover “Catálogo de Errores,” Enrique Ciapara's enigmatic collection inspired by Sandro Botticelli and Boccaccio.",
                    },        
                ]
            },
            works: {
                title: "Projects Selection",
            },
            footer: {
                studio: "Studio",
                studioDesc: "Contemporary abstract art from Tijuana, Baja California.",
                established: "Tijuana, México · Est. 2001",
                navigation: "Navigation",
                contact: "Contact",
                location1: "Tijuana, Baja California",
                location2: "Mexico",
                rights: "All rights reserved.",
                developedBy: "Developed by",
                privacy: "Privacy",
                credits: "Credits",
            },
  },

};

export type Translations = {
    nav: {about: string; collections: string; news: string; contact: string; artistPage: string; aboutPage: string};
    hero: {place: string; title: string; subtitle: string; scroller: string;};
    about: {quote: string; speaker: string; text: string; speaker2: string; date: string; preArrow: string; postArrow: string; more: string;};
    collections: {quoteBold: string; quote: string; speaker: string; date: string; items:{title: string; description: string}[]};
    works: {title: string};
    footer: {studio: string; studioDesc: string; established: string; navigation: string; contact: string; location1: string; location2: string; rights: string; developedBy: string; privacy: string; credits: string};
};
