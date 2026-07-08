"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function Article2() {
  const { locale } = useI18n();

  if (locale === "en") {
    return (
      <section className="bg-[#F6F2EC]">
        <div className="px-6 lg:px-20">
          <div className="max-w-6xl">
            <h2 className="text-4xl max-w-2xl uppercase mb-6 indent-12 md:indent-32">
              Enrique Ciapara Exhibits at El Cubo
            </h2>
            <h3 className="uppercase mb-2 text-xl">
              July 2, 2013, El Sol de Tijuana
            </h3>
            <h3 className="uppercase mb-6 text-xl">by Cecilia E. Serrano</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              Tijuana.— In Sala 3 of the El Cubo gallery, the work of master
              painter Enrique Ciapara is on display in the exhibition
              &quot;Trompe l&apos;oeil,&quot; a different way of challenging
              contemporary art. Without a doubt, Ciapara&apos;s creativity
              lies in showing a distinct form of artistic expression, one
              that allows the essence of a visual artist&apos;s studio to be
              seen displayed inside a museum.
              <br />
              <br />
              CECUT director Pedro Ochoa inaugurated the exhibition,
              describing the work as a new way of exhibiting the artist&apos;s
              studio and the artist&apos;s studio at the museum.
              <br />
              <br />
              Of this unusual exhibition, curator Fernando Delmar defines the
              master&apos;s work as follows: &quot;Enrique Ciapara&apos;s
              painting reclaims what does not belong to painting and
              articulates itself as a language that obeys no defined grammar.
              The works gathered in this exhibition describe a threshold
              between all the possibilities that can be found, beyond what we
              manage to see, beyond the landscape, in the direction of lines,
              like writing in the dark.&quot;
              <br />
              <br />
              Ciapara&apos;s painting does not represent what we see, but
              rather what we might come to see, which is why the exhibition
              is aimed as much at the viewer&apos;s eye as, above all, at
              their imagination.
              <br />
              <br />
              Enrique Ciapara trained as an artist in independent workshops
              and in the studios of painters and printmakers in Tijuana, such
              as Felipe Almada, Luis Moret, Fernando Delmar himself, and
              teacher Marta Palau, among others.
              <br />
              <br />
              His work lets you see those images that appear when you are
              traveling — by train, car, or plane — and look through the
              window: at first they are shapes and colors, if you
              don&apos;t look straight outward, but when you do, you already
              see the form, the landscapes, little houses, towns, lights —
              and that is what his work projects, a way of seeing life
              painted in color.
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <img
              src="/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp"
              alt="Works from different periods by Enrique Ciapara on display in Trompe-l'œil"
              className="w-full md:w-2/3 aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    );
  }

  if (locale === "fr") {
    return (
      <section className="bg-[#F6F2EC]">
        <div className="px-6 lg:px-20">
          <div className="max-w-6xl">
            <h2 className="text-4xl max-w-2xl uppercase mb-6 indent-12 md:indent-32">
              Enrique Ciapara expose à El Cubo
            </h2>
            <h3 className="uppercase mb-2 text-xl">
              2 juillet 2013, El Sol de Tijuana
            </h3>
            <h3 className="uppercase mb-6 text-xl">par Cecilia E. Serrano</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              Tijuana.— Dans la salle 3 de la galerie El Cubo, on peut voir
              l&apos;œuvre du maître Enrique Ciapara, avec l&apos;exposition
              « Trompe l&apos;œil », une manière différente de défier l&apos;art
              contemporain. Sans aucun doute, la créativité de Ciapara
              consiste à montrer une forme distincte d&apos;expression
              artistique, qui permet de voir, exposée dans un musée,
              l&apos;essence même de l&apos;atelier d&apos;un artiste visuel.
              <br />
              <br />
              Le directeur du Cecut, Pedro Ochoa, a inauguré l&apos;exposition
              en soulignant que son œuvre représentait une nouvelle façon
              d&apos;exposer l&apos;atelier de l&apos;artiste et l&apos;atelier
              de l&apos;artiste au musée.
              <br />
              <br />
              À propos de cette exposition singulière, le commissaire
              Fernando Delmar définit ainsi le travail du maître : « La
              peinture d&apos;Enrique Ciapara récupère ce qui n&apos;appartient
              pas à la peinture et s&apos;articule comme un langage qui
              n&apos;obéit à aucune grammaire définie. Les œuvres réunies dans
              cette exposition décrivent une limite entre toutes les
              possibilités que l&apos;on peut trouver, au-delà de ce que nous
              parvenons à voir, au-delà du paysage, dans la direction des
              lignes, comme l&apos;écriture dans l&apos;obscurité. »
              <br />
              <br />
              La peinture de Ciapara ne représente pas ce que nous voyons,
              mais ce que nous pourrions en venir à voir, c&apos;est pourquoi
              l&apos;exposition s&apos;adresse autant au regard du spectateur
              qu&apos;à son imagination.
              <br />
              <br />
              Enrique Ciapara s&apos;est formé comme artiste dans des ateliers
              libres et auprès de peintres et graveurs de Tijuana, tels que
              Felipe Almada, Luis Moret, Fernando Delmar lui-même et la
              maîtresse Marta Palau, entre autres.
              <br />
              <br />
              Son œuvre permet de voir ces images que l&apos;on aperçoit
              lorsqu&apos;on voyage en mouvement, que ce soit en train, en
              voiture ou en avion, en regardant par la fenêtre : ce sont
              d&apos;abord des formes, des couleurs, si l&apos;on ne regarde
              pas directement vers l&apos;extérieur, mais lorsqu&apos;on le
              fait, on distingue déjà la forme, les paysages, les petites
              maisons, les villages, les lumières — et c&apos;est cela que
              projette son œuvre, une façon de voir la vie peinte en couleurs.
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <img
              src="/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp"
              alt="Œuvres de différentes époques d'Enrique Ciapara exposées dans Trompe l'œil"
              className="w-full md:w-2/3 aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    );
  }

  if (locale === "ca") {
    return (
      <section className="bg-[#F6F2EC]">
        <div className="px-6 lg:px-20">
          <div className="max-w-6xl">
            <h2 className="text-4xl max-w-2xl uppercase mb-6 indent-12 md:indent-32">
              Enrique Ciapara exposa a El Cubo
            </h2>
            <h3 className="uppercase mb-2 text-xl">
              2 de juliol de 2013, El Sol de Tijuana
            </h3>
            <h3 className="uppercase mb-6 text-xl">per Cecilia E. Serrano</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              Tijuana.— A la sala 3 de la galeria El Cubo, s&apos;exhibeix
              l&apos;obra del mestre Enrique Ciapara, amb l&apos;exposició
              «Trompe l&apos;oeil», una manera diferent de desafiar l&apos;art
              contemporani. Sens dubte, la creativitat de Ciapara consisteix a
              mostrar una forma diferent d&apos;expressió artística, que
              permet veure l&apos;essència de l&apos;estudi d&apos;un artista
              visual exposada en un museu.
              <br />
              <br />
              El director del Cecut, Pedro Ochoa, va inaugurar l&apos;exposició
              i va assenyalar la seva obra com una nova manera d&apos;exhibir
              l&apos;estudi de l&apos;artista i l&apos;estudi de l&apos;artista
              al museu.
              <br />
              <br />
              D&apos;aquesta singular exposició, el comissari Fernando Delmar
              defineix així l&apos;obra del mestre: «La pintura d&apos;Enrique
              Ciapara recupera allò que no pertany a la pintura i
              s&apos;articula com un llenguatge que no obeeix cap gramàtica
              definida. L&apos;obra que es reuneix en aquesta exposició
              descriu un límit entre totes les possibilitats que es poden
              trobar, més enllà del que aconseguim veure, més enllà del
              paisatge, en la direcció de les línies, com l&apos;escriptura en
              la foscor.»
              <br />
              <br />
              La pintura de Ciapara no representa el que veiem, sinó el que
              podríem arribar a veure, per això l&apos;exposició s&apos;adreça
              tant a la vista de l&apos;espectador com, sobretot, a la seva
              imaginació.
              <br />
              <br />
              Enrique Ciapara es va formar com a artista en tallers lliures i
              en estudis de pintors i gravadors de Tijuana, com Felipe Almada,
              Luis Moret, el mateix Fernando Delmar i la mestra Marta Palau,
              entre d&apos;altres.
              <br />
              <br />
              La seva obra et permet veure aquelles imatges que, quan viatges
              en moviment, ja sigui en tren, cotxe o avió, veus a través de la
              finestra: primer són formes, colors, si no gires la mirada
              directament cap enfora, però quan ho fas, ja veus la forma, els
              paisatges, les casetes, els pobles, els llums — i això és el que
              projecta la seva obra, una manera de veure la vida pintada en
              colors.
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <img
              src="/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp"
              alt="Obres de diferents èpoques d'Enrique Ciapara exposades a Trompe l'oeil"
              className="w-full md:w-2/3 aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F6F2EC]">
      <div className="px-6 lg:px-20">
        <div className="max-w-6xl">
          <h2 className="text-4xl max-w-2xl uppercase mb-6 indent-12 md:indent-32">
            Expone Enrique Ciapara en El Cubo
          </h2>
          <h3 className="uppercase mb-2 text-xl">
            2 de julio de 2013, El Sol de Tijuana
          </h3>
          <h3 className="uppercase mb-6 text-xl">por Cecilia E. Serrano</h3>

          <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
            Tijuana.- En la sala 3 de la galería El Cubo, se exhibe la obra del
            maestro Enrique Ciapara, con la exposición "Trompe I oeil", una
            manera diferente de desafiar al arte contemporáneo. Sin duda, la
            creatividad del Ciapara es mostrar una forma distinta de expresión
            artística, el cual permite ver la esencia de un estudio de una
            artista visual expuesto en un museo.
            <br />
            <br />
            El director del Cecut, PedroOchoa, inauguró la exposición donde
            señaló su obra como una nueva modalidad de exhibir el estudio del
            artista yestudio del artista al museo.
            <br />
            <br />
            Esta rara exposición, el jurado Fernando Delmar define la obra del
            maestro "La pintura de Enrique Ciapara recupera aquello que no le
            pertenece a la pintura yse articula, como un lenguaje que no obedece
            a una gramática definida. La obra que se reúne en esta exposición
            describe un límite entre las todas las posibilidades que se pueden
            encontrar, más allá de lo que alcanzamos a ver, más allá del
            paisaje, en la dirección de las líneas, como la escritura en la
            oscuridad"
            <br />
            <br />
            La pintura de Ciapara no representa lo que vemos, sino lo que
            podernos llegar a ver, de allí que la exposición esté dirigida tanto
            a la vista del espectador, pero sobre todo a su imaginación.
            <br />
            <br />
            Enrique Ciapara se formó como artista en talleres libres yen
            estudios de pintores y grabadores en Tijuana, como FelipeAlmada,
            Luis Moret, el propio Fernando Delmar yla maestra Marta Palau, entre
            otros.
            <br />
            <br />
            La obra te permite ver esas imágenes que cuando vas viajando en
            movimiento, ya sea en tren, auto, avión, ves a través de la ventana,
            primero son figuras, colores, si no volteas directamente hacia
            afuera, pero cuando lo haces, ves ya la forma, los paisajes,
            casitas, pueblos, luces, yeso es lo que proyecta su obra, una forma
            de ver la vida pintada en colores.
          </p>
        </div>

        <div className="flex justify-end mt-16 mb-20">
          <img
            src="/images/News/ElCubo/Trompe-L’oeil es una exposición que  comprende obra de distintas épocas de enrique ciapara.webp"
            alt="Trompe-L'oeil es una exposición que comprende obra de distintas épocas de Enrique Ciapara"
            className="w-full md:w-2/3 aspect-video object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
