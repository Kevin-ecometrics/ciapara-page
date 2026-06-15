"use client";

export default function Quote1Errores() {
  return (
    <section className="mb-24">
      <div className="px-6">
        <h1 className="text-black/50 w-full text-start my-12 text-[clamp(2.5rem,5vw,7rem)] md:text-[clamp(3.5rem,5vw,7rem)] block font-bold tracking-tight leading-[0.95] uppercase">
          "Enrique Ciapara supone la manifestación de un deseo, el placer y el
          goce de pintar desde una aspiración a la libertad total, en la cual el
          error es pura manifestación imaginativa y alucinada, hecha de pura
          materia pictórica."
        </h1>
        <p className="text-black/90 w-full text-start mb-24 text-[clamp(1.5rem,3vw,5rem)] md:text-[clamp(2rem,3vw,5rem)] block font-bold tracking-tight">
          - Carlos E. Palacios
        </p>
      </div>

      <div className=" gap-0 items-stretch w-full">
        <div className="w-full h-[35rem] md:h-[50rem] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={
              "/images/errores/Pieza sin titulo catalogo de errores oleo sobre tela 183x 122 cm por artista del la frontera san diego tijuana Enrique Ciapara.webp"
            }
            alt="Pieza sin título de la colección  catálogo de errores óleo sobre tela 183x 122 cm por artista abstracto de la frontera San Diego Tijuana Enrique Ciapara"
          />
        </div>
      </div>
    </section>
  );
}
