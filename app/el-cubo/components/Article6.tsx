"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function Article6() {
  const { locale } = useI18n();

  if (locale === "en") {
    return (
      <section className="bg-[#F6F2EC]">
        <div className="px-6 lg:px-20">
          <div className="max-w-6xl">
            <h2 className="text-4xl max-w-2xl uppercase mb-6 indent-12 md:indent-32">
              Cecut Brings the Artist&apos;s Studio to the Museum and Vice
              Versa
            </h2>
            <h3 className="uppercase mb-2 text-xl">July 1, 2013</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              With Enrique Ciapara&apos;s exhibition Trompe l&apos;oeil,
              Centro Cultural Tijuana launches a new exhibition format that
              consists of bringing &quot;the museum to the artist&apos;s
              studio and the artist&apos;s studio to the museum,&quot;
              announced Pedro Ochoa Palacio, CECUT&apos;s general director,
              moments before inaugurating, last Friday, June 28, the
              Tijuana-born painter&apos;s show on display in Sala 3 of the El
              Cubo gallery.
              <br />
              <br />
              The official explained that this new way of working with local
              artists consists of the fact that, while most of the work is
              exhibited at El Cubo, another part will remain in the
              painter&apos;s studio, where he himself will also have a piece
              in progress that the public will be able to observe starting
              Saturday, July 6, the date scheduled for the start of visits to
              Ciapara&apos;s studio.
              <br />
              <br />
              Getting to know an artist&apos;s work in the very laboratory
              where it is created will undoubtedly allow the public a much
              richer experience and the chance to admire the artistic work
              from another perspective, said Ochoa Palacio, while
              acknowledging the exhibition&apos;s curator, Fernando Delmar,
              for his work selecting and installing Enrique Ciapara&apos;s
              pieces, who was also present on the occasion.
              <br />
              <br />
              More than a retrospective show, this is an anthological
              exhibition of Enrique Ciapara, curator Delmar clarified in
              turn, beginning by explaining that the title &quot;Trompe
              l&apos;oeil&quot; is a French expression meaning &quot;to
              deceive the eye,&quot; which within the art of painting refers
              to an academic approach to figuration that attempts to convince
              the eye, through a play of perspective, of an illusion of
              something we see that does not actually exist.
              <br />
              <br />
              &quot;In Ciapara&apos;s exhibition you won&apos;t find a
              literal &apos;trompe l&apos;oeil,&apos; however, there is a
              great deal of visual artifice in his painting,&quot; Delmar
              affirmed, maintaining that this artist &quot;teaches us to see
              things that we can only see through painting.&quot;
              <br />
              <br />
              Another feature of Ciapara&apos;s work, as can be observed in
              &quot;Trompe l&apos;oeil,&quot; is the freedom with which he
              approaches painting and the enormous playful power his works
              display, the curator of the show noted, pointing out that
              &quot;this artist&apos;s work runs against the current of the
              theories about the death of painting that some have repeated
              for decades, and which in his case turn out to be entirely
              false.&quot;
              <br />
              <br />
              In Ciapara&apos;s work, painting frees itself from the power of
              representation to reveal itself in its freest possible form,
              expressed above all through the use of large masses of color,
              and its figures, when present, are silhouettes barely
              perceptible through undefined strokes.
              <br />
              <br />
              Ciapara&apos;s painting does not represent what we see, but
              rather what we might come to see, which is why the exhibition
              is aimed as much at the viewer&apos;s eye as, above all, at
              their imagination. From this Tijuana-based artist&apos;s
              perspective, painting is part of nature, one more element that
              completes reality.
              <br />
              <br />
              Born in Tijuana in 1972 and with initial studies at
              Southwestern College in Chula Vista, California, Enrique
              Ciapara trained as an artist in independent workshops and in
              the studios of painters and printmakers in Tijuana, such as
              Felipe Almada, Luis Moret, Fernando Delmar himself, and teacher
              Marta Palau, among others.
              <br />
              <br />
              An artist with international reach, Ciapara has held several
              solo exhibitions abroad to date, including &quot;Ciapara&quot;
              at Take It Easy in San Diego, California, in 2010, and
              &quot;Enrique Ciapara&quot; at Galería 3art in Barcelona,
              Spain, in 1998, while in Tijuana he has exhibited &quot;Obra
              sobre papel&quot; at Galería 256 in 2009, and &quot;Ciapara&quot;
              at La Caja Galería in 2006.
              <br />
              <br />
              This is not the first time Ciapara has exhibited at CECUT; in
              2001 he presented the show &quot;Detritus&quot; there, and a
              decade later took part in &quot;Obra Negra, una aproximación a
              la construcción de la cultura visual de Tijuana,&quot; the only
              exhibition to date to have occupied all three halls of El Cubo.
              <br />
              <br />
              &quot;Trompe l&apos;oeil&quot; will remain on view in Sala 3 of
              El Cubo over the following months. If you are interested in the
              rest of our activities, please check www.cecut.gob.mx
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <div className="w-full md:w-2/3">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5">
                <img
                  src="/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp"
                  alt="Exhibition in Sala 3 of El Cubo gallery by Enrique Ciapara, 2013"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
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
              Le Cecut amène l&apos;atelier de l&apos;artiste au musée, et
              réciproquement
            </h2>
            <h3 className="uppercase mb-2 text-xl">1er juillet 2013</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              Avec l&apos;exposition Trompe l&apos;œil d&apos;Enrique Ciapara,
              le Centro Cultural Tijuana met en place un nouveau mode
              d&apos;exposition consistant à amener « le musée à l&apos;atelier
              de l&apos;artiste et l&apos;atelier de l&apos;artiste au musée »,
              a annoncé Pedro Ochoa Palacio, directeur général du CECUT,
              quelques instants avant d&apos;inaugurer, le vendredi 28 juin
              dernier, l&apos;exposition du peintre tijuanais déployée dans
              la salle 3 de la galerie El Cubo.
              <br />
              <br />
              Le responsable a expliqué que cette nouvelle méthode de travail
              avec les artistes locaux consiste en ce que, si la majeure
              partie de l&apos;œuvre est exposée à El Cubo, une autre partie
              restera dans l&apos;atelier du peintre, où celui-ci disposera
              par ailleurs d&apos;une pièce en cours de réalisation que le
              public pourra observer à partir du samedi 6 juillet, date à
              laquelle ont été programmées les visites de l&apos;atelier de
              Ciapara.
              <br />
              <br />
              Découvrir l&apos;œuvre d&apos;un artiste dans le laboratoire
              même où elle est créée permettra sans aucun doute au public une
              expérience bien plus riche et la possibilité d&apos;admirer le
              travail artistique sous un autre angle, a souligné Ochoa
              Palacio, en rendant hommage au commissaire de l&apos;exposition,
              Fernando Delmar, pour son travail de sélection et de mise en
              espace de l&apos;œuvre d&apos;Enrique Ciapara, également présent
              à cette occasion.
              <br />
              <br />
              Plus qu&apos;une exposition rétrospective, il s&apos;agit
              d&apos;une exposition anthologique d&apos;Enrique Ciapara, a
              précisé à son tour le commissaire Delmar, qui a d&apos;abord
              expliqué que le titre « Trompe l&apos;œil » est une expression
              française qui désigne, dans l&apos;art de la peinture, un
              procédé académique de la figuration qui cherche à faire croire
              au regard, par un jeu de perspective, à l&apos;illusion de
              quelque chose que l&apos;on voit mais qui n&apos;existe pas
              réellement.
              <br />
              <br />
              « Dans l&apos;exposition de Ciapara, vous ne trouverez pas de
              véritable &quot;trompe-l&apos;œil&quot;, mais il y a dans sa
              peinture une grande dose d&apos;artifice visuel », a affirmé
              Delmar, soutenant que cet artiste « nous apprend à voir des
              choses que l&apos;on ne peut voir qu&apos;à travers la
              peinture ».
              <br />
              <br />
              Un autre trait du travail de Ciapara, que l&apos;on peut
              observer dans « Trompe l&apos;œil », est la liberté avec
              laquelle il aborde la peinture et l&apos;immense pouvoir ludique
              que dégagent ses œuvres, a précisé le commissaire de
              l&apos;exposition, en faisant remarquer que « le travail de cet
              artiste va à contre-courant des thèses sur la mort de la
              peinture que certains répètent depuis des décennies et qui,
              dans son cas, s&apos;avèrent totalement fausses ».
              <br />
              <br />
              Dans l&apos;œuvre de Ciapara, la peinture se libère du pouvoir
              de représentation pour se montrer sous sa forme la plus libre
              possible et s&apos;exprime, surtout, à travers l&apos;usage de
              grandes masses de couleur ; ses figures, lorsqu&apos;il y en a,
              sont des silhouettes à peine perceptibles au moyen de traits
              indéfinis.
              <br />
              <br />
              La peinture de Ciapara ne représente pas ce que nous voyons,
              mais ce que nous pourrions en venir à voir, c&apos;est pourquoi
              l&apos;exposition s&apos;adresse autant au regard du spectateur
              qu&apos;à son imagination. Du point de vue de cet artiste
              tijuanais, la peinture fait partie de la nature, comme un
              élément de plus qui complète la réalité.
              <br />
              <br />
              Né à Tijuana en 1972 et après des études initiales au
              Southwestern College de Chula Vista, en Californie, Enrique
              Ciapara s&apos;est formé comme artiste dans des ateliers libres
              et auprès de peintres et graveurs de Tijuana, tels que Felipe
              Almada, Luis Moret, Fernando Delmar lui-même et la maîtresse
              Marta Palau, entre autres.
              <br />
              <br />
              Artiste à rayonnement international, Ciapara compte à ce jour
              plusieurs expositions individuelles à l&apos;étranger, parmi
              lesquelles « Ciapara », au Take It Easy de San Diego, en
              Californie, en 2010, et « Enrique Ciapara », à la Galería 3art
              de Barcelone, en Espagne, en 1998, tandis qu&apos;à Tijuana il a
              exposé « Obra sobre papel » à la Galería 256 en 2009, et
              « Ciapara » à La Caja Galería en 2006.
              <br />
              <br />
              Ce n&apos;est pas la première fois que Ciapara expose au CECUT ;
              en 2001, il y avait déjà présenté l&apos;exposition
              « Detritus », puis, une décennie plus tard, il a fait partie de
              « Obra Negra, una aproximación a la construcción de la cultura
              visual de Tijuana », la seule exposition à avoir occupé
              jusqu&apos;à présent les trois salles d&apos;El Cubo.
              <br />
              <br />
              « Trompe l&apos;œil » restera visible dans la salle 3 d&apos;El
              Cubo au cours des mois suivants. Pour connaître le reste de nos
              activités, veuillez consulter www.cecut.gob.mx
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <div className="w-full md:w-2/3">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5">
                <img
                  src="/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp"
                  alt="Exposition dans la salle 3 de la galerie El Cubo par Enrique Ciapara, 2013"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
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
              El Cecut porta el taller de l&apos;artista al museu i viceversa
            </h2>
            <h3 className="uppercase mb-2 text-xl">1 de juliol de 2013</h3>

            <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
              Amb l&apos;exposició Trompe l&apos;oeil d&apos;Enrique Ciapara,
              el Centro Cultural Tijuana posa en marxa una nova modalitat
              d&apos;exhibició que consisteix a portar «el museu a l&apos;estudi
              de l&apos;artista i l&apos;estudi de l&apos;artista al museu»,
              va anunciar Pedro Ochoa Palacio, director general del CECUT,
              moments abans d&apos;inaugurar, el divendres 28 de juny passat,
              la mostra del pintor tijuanenc desplegada a la sala 3 de la
              galeria El Cubo.
              <br />
              <br />
              El responsable va explicar que aquest nou mètode de treball amb
              artistes de la localitat consisteix en el fet que, si bé la
              major part de l&apos;obra s&apos;exposa a El Cubo, una altra
              part romandrà al taller del pintor, on, a més, ell mateix
              tindrà una peça en desenvolupament que el públic podrà observar
              a partir del dissabte 6 de juliol, data en què s&apos;ha
              programat l&apos;inici de les visites a l&apos;estudi de
              Ciapara.
              <br />
              <br />
              Conèixer l&apos;obra d&apos;un artista al mateix laboratori on
              es crea permetrà sens dubte una experiència molt més rica al
              públic i la possibilitat d&apos;admirar el treball artístic des
              d&apos;una altra perspectiva, va assenyalar Ochoa Palacio en
              reconèixer la feina del comissari de l&apos;exposició, Fernando
              Delmar, per la seva tasca en la selecció i el muntatge de
              l&apos;obra d&apos;Enrique Ciapara, present també en
              l&apos;ocasió.
              <br />
              <br />
              Més que una mostra retrospectiva, es tracta d&apos;una
              exposició antològica d&apos;Enrique Ciapara, va aclarir al seu
              torn el comissari Delmar, que va començar explicant que el
              títol «Trompe l&apos;oeil» és una expressió francesa que
              significa «enganyar l&apos;ull» o trampanoi, que dins l&apos;art
              de la pintura es refereix a un tipus de tractament acadèmic de
              la figuració que intenta fer creure a la vista, mitjançant un
              joc de perspectiva, una il·lusió d&apos;alguna cosa que veiem
              però que en realitat no existeix.
              <br />
              <br />
              «A l&apos;exposició de Ciapara no trobareu un &quot;trompe
              l&apos;oeil&quot; literal, però sí que hi ha en la seva pintura
              una gran dosi d&apos;artifici visual», va assegurar Delmar, que
              va sostenir que aquest artista «ens ensenya a veure coses que
              només podem veure a través de la pintura».
              <br />
              <br />
              Un altre tret del treball de Ciapara, tal com es pot observar a
              «Trompe l&apos;oeil», és la llibertat amb què aborda la pintura
              i l&apos;enorme poder lúdic que mostren les seves obres, va
              precisar el comissari de la mostra en advertir que «l&apos;obra
              d&apos;aquest artista se situa a contracorrent de les tesis
              sobre la mort de la pintura que alguns repeteixen des de fa
              dècades i que, en el seu cas, resulten totalment falses».
              <br />
              <br />
              En l&apos;obra de Ciapara, la pintura s&apos;allibera del poder
              de representació per mostrar-se en la seva forma més lliure
              possible i s&apos;expressa, sobretot, mitjançant l&apos;ús de
              grans masses de color; les seves figures, quan n&apos;hi ha,
              són siluetes tot just perceptibles per mitjà de traços
              indefinits.
              <br />
              <br />
              La pintura de Ciapara no representa el que veiem, sinó el que
              podríem arribar a veure, per això l&apos;exposició s&apos;adreça
              tant a la vista de l&apos;espectador com, sobretot, a la seva
              imaginació. Des de la perspectiva d&apos;aquest artista
              tijuanenc, la pintura forma part de la naturalesa, com un
              element més que completa la realitat.
              <br />
              <br />
              Nascut a Tijuana el 1972 i amb estudis inicials al Southwestern
              College de Chula Vista, Califòrnia, Enrique Ciapara es va
              formar com a artista en tallers lliures i en estudis de
              pintors i gravadors de Tijuana, com Felipe Almada, Luis Moret,
              el mateix Fernando Delmar i la mestra Marta Palau, entre
              d&apos;altres.
              <br />
              <br />
              Artista amb projecció internacional, Ciapara compta fins avui
              amb diverses exposicions individuals a l&apos;estranger, entre
              elles, «Ciapara», al Take It Easy de San Diego, Califòrnia, el
              2010, i «Enrique Ciapara», a la Galería 3art de Barcelona,
              Espanya, el 1998, mentre que a Tijuana ha exposat «Obra sobre
              papel», a la Galería 256 el 2009, i «Ciapara», a La Caja
              Galería el 2006.
              <br />
              <br />
              No és aquesta la primera vegada que Ciapara exposa al CECUT; el
              2001 hi va presentar la mostra «Detritus» i una dècada després
              va formar part de «Obra Negra, una aproximación a la
              construcción de la cultura visual de Tijuana», l&apos;única
              exposició que fins avui ha ocupat les tres sales d&apos;El
              Cubo.
              <br />
              <br />
              «Trompe l&apos;oeil» romandrà a la sala 3 d&apos;El Cubo al
              llarg dels mesos següents. Si us interessa la resta de les
              nostres activitats, consulteu www.cecut.gob.mx
            </p>
          </div>

          <div className="flex justify-end mt-16 mb-20">
            <div className="w-full md:w-2/3">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5">
                <img
                  src="/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp"
                  alt="Exposició a la sala 3 de la galeria El Cubo d'Enrique Ciapara, 2013"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
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
            Lleva el Cecut el Taller de Artista al Museo y Viceversa
          </h2>
          <h3 className="uppercase mb-2 text-xl">01 de julio de 2013</h3>

          <p className="text-lg max-w-6xl text-[#1A1916]/70 leading-relaxed">
            Con la exposición de Enrique Ciapara Trompe l’oeil, el Centro
            Cultural Tijuana pone en marcha una nueva modalidad de exhibición
            que consiste en llevar “el museo al estudio del artista y el estudio
            del artista al museo”, anunció Pedro Ochoa Palacio, director general
            del CECUT, momentos antes de inaugurar, el pasado viernes 28 de
            junio, la muestra del pintor tijuanense desplegada en la sala 3 de
            la galería El Cubo.
            <br />
            <br />
            El funcionario explicó que este nuevo método de trabajo con artistas
            de la localidad consiste en que si bien la mayor parte de la obra se
            expone en El Cubo, otra parte permanecerá en el taller del pintor,
            donde, además, él mismo tendrá una pieza en desarrollo que el
            público podrá observar a partir del sábado 6 de julio, fecha en que
            se ha programado el inicio de las visitas al estudio de Ciapara.
            <br />
            <br />
            Conocer la obra de un artista en el laboratorio mismo donde se crea
            permitirá sin duda una experiencia mucho más rica al público y la
            posibilidad de admirar el trabajo artístico desde otra perspectiva,
            señaló Ochoa Palacio al hacer un reconocimiento al curador de la
            exposición, Fernando Delmar, por su trabajo en la selección y
            montaje de la obra de Enrique Ciapara, presente también en la
            ocasión.
            <br />
            <br />
            Más que una muestra retrospectiva, se trata de una exposición
            antológica de Enrique Ciapara, aclaró a su vez el curador Delmar,
            quien comenzó por explicar que el título “Trompe l’oeil” es una
            expresión francesa que significa «engañar al ojo» o trampantojo, que
            dentro del arte de la pintura se refiere a un tipo de manejo
            académico de la figuración que intenta aparentar a la vista, a
            través de un juego de perspectiva, una ilusión de algo que vemos
            pero que en realidad no existe.
            <br />
            <br />
            “En la exposición de Ciapara no van a encontrar un ‘trompe l’oeil’,
            sin embargo, hay en su pintura una gran dosis de artificio visual”,
            aseguró Delmar, quien sostuvo que este artista “nos enseña a ver
            cosas que no podemos ver sino a través de la pintura”.
            <br />
            <br />
            Otro rasgo del trabajo de Ciapara, según se puede observar en
            “Trompe l’oeil”, es la libertad con que acomete la pintura y el
            enorme poder lúdico que muestran sus obras, precisó el curador de la
            muestra al advertir que “la obra de este artista se sitúa a
            contracorriente de las tesis sobre la muerte de la pintura que desde
            hace décadas repiten algunos y que en su caso resulta totalmente
            falsa”.
            <br />
            <br />
            En la obra de Ciapara, la pintura se libera del poder de
            representación para mostrarse en su forma más libre posible y se
            expresa, sobre todo, a través del uso de grandes masas de color y
            sus figuras, cuando las hay, son siluetas apenas perceptibles por
            medio de trazos indefinidos.
            <br />
            <br />
            La pintura de Ciapara no representa lo que vemos, sino lo que
            podernos llegar a ver, de allí que la exposición esté dirigida tanto
            a la vista del espectador, pero sobre todo a su imaginación. Desde
            la perspectiva de este artista tijuanense, la pintura forma parte de
            la naturaleza, como un elemento más que completa la realidad.
            <br />
            <br />
            Nacido en Tijuana en 1972 y con estudios iniciales en Southwestern
            College de Chula Vista, California, Enrique Ciapara se formó como
            artista en talleres libres y en estudios de pintores y grabadores en
            Tijuana, como Felipe Almada, Luis Moret, el propio Fernando Delmar y
            la maestra Marta Palau, entre otros.
            <br />
            <br />
            Artista con proyección internacional, Ciapara cuenta a la fecha con
            varias exposiciones individuales en el extranjero, entre ellas,
            “Ciapara”, en el Take it Easy de San Diego, California, en 2010, y
            “Enrique Ciapara”, en la Galería 3art de Barcelona, España, en 1998,
            mientras que en Tijuana ha expuesto “Obra sobre papel”, en la
            Galería 256 en 2009, y “Ciapara”, en La Caja Galería en 2006.
            <br />
            <br />
            No es ésta la primera vez que Ciapara expone en el CECUT; en 2001
            presentó allí la muestra “Detritus” y una década después formó parte
            de “Obra Negra, una aproximación a la construcción de la cultura
            visual de Tijuana”, la única exposición que ha ocupado hasta la
            fecha las tres salas de El Cubo.
            <br />
            <br />
            “Trompe l’oeil” permanecerá en la sala 3 de El Cubo a lo largo de
            los siguientes meses. Si se interesa en el resto de nuestras
            actividades favor de consultar www.cecut.gob.mx
          </p>
        </div>

        <div className="flex justify-end mt-16 mb-20">
          <div className="w-full md:w-2/3">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/15 ring-1 ring-black/5">
              <img
                src="/images/News/ElCubo/Exhibicion en sala 3 de la galeria el cubo de enrique ciapara en 2013.webp"
                alt="Exhibición en sala 3 de la galería El Cubo de Enrique Ciapara en 2013"
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
