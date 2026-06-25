"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function Description2015() {
  const { locale } = useI18n();

  if (locale === "en") {
    return (
      <div className="text-[#1A1916]/45 leading-relaxed text-sm space-y-4">
        {/* English description — add your text here */}
        <p></p>
      </div>
    );
  }

  return (
    <div className="text-[#1A1916]/45 leading-relaxed max-w-5xl text-lg flex flex-col gap-4 [&_p]:text-justify">
      <h3 className="text-bold text-2xl">
        Enrique Ciapara (o The joy of living o la joie de vivre o la alegría de
        vivr)
      </h3>
      <h4 className="text-end">
        Nunca se sacia el ojo de ver, ni el oído de oír
      </h4>
      <h2 className="text-end">Eclesiastés </h2>
      <p className="text-justify">
        He visto y seguido con atención, durante nueve años seguidos, en mis
        viajes a Tijuana, dos veces al año, el proceso creativo, plástico,
        visual, de Enrique Ciapara. También he visto cuadros que pintó antes de
        ese tiempo. He encontrado, a partir de esa observación, algo fundamental
        en todo su recorrido hasta ahora: una gran coherencia artística. Esto no
        significa que no haya cambiado su trabajo en todo ese tiempo, sino que
        sus obras, aunque distintas, tienen el sello Ciapara. ¿En qué consiste
        ese sello? He aquí algunas ideas.
      </p>
      <h4>1. Hacia la monotonía en Ciapara. </h4>
      <p>
        La palabra monotonía casi siempre tiene una connotación negativa,
        peyorativa. Sin embargo, si tomamos la cita del poeta argentino Hugo
        Gola (cuando escribe sobre Juan L. Ortiz), y con ella definimos la obra
        de un pintor, tal pintor tendría que sentirse halagado de ser un pintor
        monótono. La cita de Gola:
      </p>
      <p>
        “En su ensayo “Tienen razón los literatos”, Cesare Pavese dice: “Todo
        auténtico escritor es espléndidamente monótono en cuanto en sus páginas
        rige un molde al que acude, una ley formal de fantasía que transforma el
        más diverso material en figuras y situaciones que son casi siempre las
        mismas”. Si esta afirmación es verdadera, como realmente lo creemos,
        Juan L. Ortiz es, sin dudas, un auténtico escritor. Su tarea consistió
        siempre en transformar el diverso material a su alcance, vasto y
        renovado, en figuras y situaciones que son casi siempre las mismas,
        dando pruebas de una espléndida monotonía.”
      </p>
      <p>
        Tomamos al pie de la letra la cita de Gola y afirmamos que Enrique
        Ciapara es un auténtico pintor, ya que en sus cuadros rige una ley
        formal de fantasía que transforma el diverso material a su alcance en
        formas, espacios, figuras y líneas, que son casi siempre las mismas,
        dando pruebas de una espléndida monotonía, o coherencia formal.
      </p>
      <h4>
        2. ¿Cuál es el material a su alcance o los motivos con los que trabaja
        Ciapara?
      </h4>
      <p>
        a) El paisaje de Baja California. El campo con pocos árboles. Los
        espacios vacíos del campo con pocas cosas que lo pueblan, como una
        naturaleza muerta con mínimos elementos.
      </p>
      <p>
        b) La arquitectura de Tijuana, los colores desgastados de algunas
        paredes, los colores deslucidos, la sutileza de los colores quemados por
        el sol. El verde tierra que cambió de tono hacia un verde pálido por el
        terrible sol del verano, por el rocío de invierno en Tijuana.
      </p>
      <p>
        c) La arquitectura de nuevo: los planos yuxtapuestos de materiales
        encontrados, diversos, de triplay y plástico, hierro y aluminio que
        Ciapara ve, sin descanso, en la arquitectura provisional o espontánea en
        muchas de las colonias de Tijuana.
      </p>
      <p>
        d) Otro material: los objetos de cocina: ollas, cazuelas, sartenes,
        palas para freír, cucharas, cucharones, pela verduras, batidores, son
        instrumentos que lo invitan a pintar. A veces encontramos estos
        instrumentos en sus cuadros, de forma plana, no imitativos, en dos
        dimensiones, esquemáticos, sintéticos. No es casual que su taller de
        grabado se llame La Brigada, refiriéndose a La brigade de cuisine, (la
        brigada de cocina) y que el logotipo de la misma sea el hueso de una
        pata de jamón serrano, obviamente, ya comido.
      </p>
      <p>
        e) Los dibujos de rótulos que aún perviven en Tijuana, son fuente de
        inspiración para el pintor: denotan-connotan un espacio determinado, su
        lugar. También los letreros comerciales, las palabras chuecas escritas
        en los mismos, son un estímulo visual: diremos que los rotulistas o los
        dependientes de las tiendas en la ciudad que hacen esos letreros,
        expresan una visión de la vida, una manera de ser de una zona precisa,
        algo que Ciapara, como experto del ver, recoge y condensa en obras que
        llamaremos, de una belleza imperfecta, como quería Hugo Padeletti. Lo
        anterior, ya lo dijo de manera contundente el gran cineasta C.T. Dreyer,
        y esto se alínea a lo que hace el pintor tijuanense:
      </p>
      <p>
        “Sin duda, estamos todos de acuerdo en que el cine, tal como lo
        conocemos hoy en día, no es perfecto. Pero eso es motivo de alegría,
        porque lo imperfecto postula la evolución. Lo imperfecto vive; lo
        perfecto está muerto, fuera de competición, no nos tenemos que preocupar
        por ello. En lo imperfecto hay miles de posibilidades en conflicto…
      </p>
      <p>
        Nosotros, como espectadores de pintura, decimos que la belleza
        imperfecta en la obra de Ciapara, es un motivo de alegría.
      </p>
    </div>
  );
}
