"use client";

export default function TextGallery() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold mb-24 leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          A finales de la década de los años ochenta y principios de los noventa
          el artista Felipe Almada fue su mentor y el Nopal Centenario su
          pandilla y generación. En cuyo ambiente se desarrollaron los jóvenes
          que destacaron en teatro (Edward Coward), performance (Hugo Sánchez),
          literatura (Gerardo Navarro), activismo binacional (Carmela Castrejón)
          y en pintura (Ciapara). Después una influencia determinante en su
          formación fue la cercanía con el maestro Luís Moret y la maestra Marta
          Palau.
        </h4>
      </div>
      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
        <div className="flex w-full flex-col gap-10 md:w-180 md:gap-14">
          <figure className="mr-auto">
            <img
              src="/images/about/Exposicion en el cubo trompe l oeil con piezas y television con video los 15 errores mas comunes en la pintura.webp"
              alt="Exposición en tijuana en El Cubo titulada Trompe l' oeil con piezas y una pieza intervenida de una televisión presentando: los 15 errores más comunes en la pintura por el artista Enrique Ciapara"
              className="h-auto w-full"
            />
          </figure>
          <figure className="ml-20 md:ml-auto">
            <img
              src="/images/about/Retrado de Enrique Ciapara en 2011 en anterior estudio en Tijuana.webp"
              alt="Retratado del artista Enrique Ciapara sentado en un sofa detrás de un televisor antiguo en su anterior estudio en Tijuana en el año 2011"
              className="w-full h-auto md:w-150"
            />
          </figure>
        </div>

        <figure className="mr-20 md:mr-0">
          <img
            src="/images/about/Poliptico de mas de 300 dibujos en tinta por enrique ciapara expuestos en CECUT anio 2013.webp"
            alt="Políptico de más de 300 dibujos en técnica de tinta sobre papel por artista Enrique Ciapara expuestos en colección Trompe-l'oeil en el Centro Cultural Tijuana"
            className="w-full h-auto md:w-140"
          />
        </figure>
      </div>
    </section>
  );
}
