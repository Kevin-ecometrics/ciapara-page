"use client";

export default function Quote1Errores() {
  return (
    <section className="">
      <div className="px-6">
        <h1 className="text-black/50 w-full text-start my-12 text-[clamp(2.5rem,5vw,7rem)] md;text-[clamp(3rem,5vw,7rem)] md:text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          "Habría que decir que estos últimos cuadros de “Catálogo de errores”
          están retando nuestros prejuicios como espectadores, algo que pocas
          veces sucede en el terreno de la pintura actual. "
        </h1>
        <p className="text-black/90 w-full text-start mb-24 text-[clamp(1.5rem,3vw,5rem)] md:text-[clamp(2rem,3vw,5rem)] md: block font-bold tracking-tight">
          - Carlos E. Palacios
        </p>
      </div>

      <div className=" gap-0 items-stretch w-full">
        <div className="w-full h-[35rem] md:h-[50rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={"/images/errores/Pieza 61 colección errores.webp"}
            alt="Ultima Pieza número 61 sin título del catálogo de errores en acrílico sobre tela 122 x 80 cm por artista enrique Ciapara en Tijuana Baja California"
          />
        </div>
      </div>
    </section>
  );
}
