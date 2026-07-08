import type { Locale } from "./i18n";

export type NewsItem = {
  img: string;
  alt: string;
  altEn: string;
  altFr: string;
  altCa: string;
  title: string;
  titleEn: string;
  titleFr: string;
  titleCa: string;
  height: string;
  disabled: boolean;
  link?: string;
  href?: string;
  hrefEn?: string;
  hrefFr?: string;
  hrefCa?: string;
};

export const news: NewsItem[] = [
  {
    img: "/images/News/Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana.webp",
    alt: "Nota titulada la frontera artist along the us mexico border con Enrique ciapara en su estudio en Tijuana En marzo de 2015",
    altEn: "Article titled 'The Frontier Artist Along the US-Mexico Border' featuring Enrique Ciapara in his Tijuana studio, March 2015",
    altFr: "Article intitulé 'L'artiste frontalier le long de la frontière États-Unis-Mexique' avec Enrique Ciapara dans son atelier de Tijuana, mars 2015",
    altCa: "Article titulat 'L'artista fronterer al llarg de la frontera EUA-Mèxic' amb Enrique Ciapara al seu taller de Tijuana, març 2015",
    title: "Acerca de Enrique Ciapara por borderartists",
    titleEn: "About Enrique Ciapara by borderartists",
    titleFr: "À propos d'Enrique Ciapara par borderartists",
    titleCa: "Sobre Enrique Ciapara per borderartists",
    link: "https://borderartists.com/2015/02/03/enrique-ciapara/",
    height: "h-72",
    disabled: false,
  },
  {
    img: "/images/News/ElCubo/Fotografia intervenida por enrique ciapara parte de la exposicion de su obra trompe l´oeil.jpg",
    alt: "Fotografía intervenida por Enrique Ciapara, parte de la exposición de su obra Trompe l'œil en El Cubo",
    altEn: "Manipulated photograph by Enrique Ciapara, part of his Trompe-l'œil exhibition at El Cubo",
    altFr: "Photographie manipulée par Enrique Ciapara, faisant partie de son exposition Trompe-l'œil à El Cubo",
    altCa: "Fotografia intervinguda per Enrique Ciapara, part de la seva exposició Trompe-l'œil a El Cubo",
    title: "Presenta CECUT la exposición \"Trompe-L'oeil\" de Enrique Ciapara",
    titleEn: "CECUT presents the exhibition \"Trompe-L'oeil\" by Enrique Ciapara",
    titleFr: "Le CECUT présente l'exposition « Trompe-L'oeil » d'Enrique Ciapara",
    titleCa: "El CECUT presenta l'exposició «Trompe-L'oeil» d'Enrique Ciapara",
    href: "/el-cubo",
    hrefEn: "/en/el-cubo",
    hrefFr: "/fr/el-cubo",
    hrefCa: "/ca/el-cubo",
    height: "h-96",
    disabled: false,
  },
];

export function getNewsAlt(item: NewsItem, locale: Locale) {
  if (locale === "fr") return item.altFr;
  if (locale === "ca") return item.altCa;
  if (locale === "en") return item.altEn;
  return item.alt;
}

export function getNewsTitle(item: NewsItem, locale: Locale) {
  if (locale === "fr") return item.titleFr;
  if (locale === "ca") return item.titleCa;
  if (locale === "en") return item.titleEn;
  return item.title;
}

export function getNewsHref(item: NewsItem, locale: Locale) {
  if (locale === "fr") return item.hrefFr;
  if (locale === "ca") return item.hrefCa;
  if (locale === "en") return item.hrefEn;
  return item.href;
}
