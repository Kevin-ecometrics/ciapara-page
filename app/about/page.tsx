'use client'

import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const expo = [0.16, 1, 0.3, 1] as const

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, ease: expo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const motivos = [
  {
    letter: 'a',
    title: 'El paisaje',
    body: 'El campo de Baja California con pocos árboles. Los espacios vacíos con escasos elementos, como una naturaleza muerta de mínima composición.',
  },
  {
    letter: 'b',
    title: 'La arquitectura',
    body: 'Los colores desgastados de algunas paredes de Tijuana; los tonos deslucidos, la sutileza de colores quemados por el sol; el verde tierra que migra hacia un verde pálido por los veranos e inviernos de la frontera.',
  },
  {
    letter: 'c',
    title: 'La materia encontrada',
    body: 'Los planos yuxtapuestos de triplay y plástico, hierro y aluminio que conforman la arquitectura provisional o espontánea de muchas colonias de Tijuana.',
  },
  {
    letter: 'd',
    title: 'Los objetos de cocina',
    body: 'Ollas, cazuelas, sartenes, palas, cucharas, cucharones, pelaverduras, batidores. Instrumentos que invitan a pintar: planos, no imitativos, esquemáticos, sintéticos.',
  },
  {
    letter: 'e',
    title: 'Los rótulos y letreros',
    body: 'Los dibujos de rótulos que aún perviven en Tijuana; las palabras chuecas en letreros comerciales. Un estímulo visual que expresa una visión de la vida, una manera de ser de una zona precisa.',
  },
]

const cvSections = [
  {
    title: 'Formación',
    items: [
      '1991–94 · Taller de pintura, Mtro. Luis Moret, Tijuana, BC',
      '1992–93 · Taller de dibujo y grabado, Mtro. Michel Shnor, Southwestern College, San Diego, CA',
      '1993 · Residencia artística, Taller de Ramón Ferran, Reus, Tarragona, España',
      '1993–94 · Taller de grabado, Mtro. Luis Lombardo, France Cultura, Tijuana, BC',
      '1995 · Taller de pintura, Mtro. Roger Von Guten, CECUT, Tijuana, BC',
    ],
  },
  {
    title: 'Exposiciones individuales (selección)',
    items: [
      '2019 · Paisajes en tránsito, Museo Pedro Coronel, Zacatecas',
      '2015 · Enrique Ciapara, Galería Estación Coyoacán Arte Contemporáneo, CDMX',
      "2013 · Trompe-L'œil, El Cubo, Centro Cultural Tijuana",
      '2010 · Enrique Ciapara, Take It Easy, San Diego, CA',
      '2009 · Obra sobre papel, Galería Arte256, Tijuana, BC',
      '2009 · La brigade, Manzanilla, Ensenada, BC',
      '2006 · Pintura, Galería Arte256, Tijuana, BC',
      '2006 · Ciapara, Galería La Caja, Tijuana, BC',
      '2005 · Taller, Galería 4, Tijuana, BC',
      '2003 · Cara y lugar, Pasillos del Arte, Televisa, Tijuana, BC',
      '2001 · Detritus, Centro Cultural Tijuana (catálogo)',
      '2000 · Habitual Stops, Moctezuma Gallery, San Diego, CA',
      '1998 · Enrique Ciapara, Galería 3art, Barcelona, España',
      '1998 · Papers, La Rosa de Foc, Barcelona, España',
      '1996 · Crisálida, Centro Cultural Tijuana',
      '1994 · Ocio y trabajo, Instituto Veracruzano de Cultura, Veracruz',
      '1992 · Galería Carmen Cuenca, Tijuana, BC',
      '1991 · Ciapara, Rendezvous Bar, Tijuana, BC',
    ],
  },
  {
    title: 'Exposiciones colectivas (selección)',
    items: [
      '2011 · Obra Negra, El Cubo, Centro Cultural Tijuana (catálogo)',
      '2010 · Sexta Bienal Internacional de Estandartes, CECUT (itinerante)',
      '2010 · Beyond the Border, Feria Internacional de Arte Contemporáneo, San Diego',
      '2006 · Strange New World, MCASD · Santa Mónica Museum of Art · Mexican Institute Washington DC (itinerante)',
      '2005 · XV Bienal Plástica de Baja California, CEART, Mexicali (itinerante)',
      '2001 · Pintura Fresca, Luckman Gallery, Los Ángeles, CA',
      '1999 · Presencia Nacional de Creadores, Centro Nacional de las Artes, México DF',
      "1997 · Tall a l'ull, Galería Moret, Reus, Tarragona, España",
      '1997 · BWA Gallery, Zielona Góra, Polonia',
      '1997 · Certamen Nacional de Dibujo Gregorio Prieto, Madrid (itinerante)',
      '1997 · XVII Encuentro Nacional de Arte Joven, Pinacoteca de Nuevo León',
      '1996 · ES96, Salón Internacional de Estandartes, CECUT (itinerante)',
      '1995 · X Bienal Plástica de Baja California, ICBC, Mexicali (itinerante)',
      '1993 · IV Bienal del Noroeste, Culiacán (itinerante)',
      '1992 · Yokohama Citizens Gallery, Yokohama, Japón (catálogo)',
      '1991 · VIII Bienal Plástica de Baja California, ICBC, Mexicali (catálogo)',
      '1991 · III Bienal del Noroeste, Culiacán (itinerante)',
    ],
  },
  {
    title: 'Distinciones',
    items: [
      '2019 · Primer lugar, VI Bienal de Pintura Pedro Coronel, Zacatecas',
      '2019–22 · Sistema Nacional de Creadores de Arte, FONCA',
      '2005 · Primer lugar en dibujo, XV Bienal Plástica de Baja California',
      '1997 · Mención honorífica, Concurso BID de Pintura Joven en México',
      '1997 · Beca Creadores con Trayectoria, Fondo Estatal para la Cultura y las Artes',
      '1995 · Primer lugar en gráfica, X Bienal Plástica de Baja California',
      '1995 · Mención honorífica en pintura, V Bienal del Noroeste',
      '1995 · Beca Jóvenes Creadores, FONCA',
      '1993 · Mención honorífica en pintura y dibujo, IV Bienal del Noroeste',
      '1991 · Tercer lugar en técnicas mixtas, VIII Bienal Plástica de BC',
      '1991 · Tercer lugar en obra en papel, III Bienal del Noroeste',
    ],
  },
  {
    title: 'Adquisiciones',
    items: [
      '2005 · Museo de Arte Contemporáneo de San Diego',
      '2005 · Instituto de Cultura de Baja California',
      '2000 · Museo de las Californias',
      '1995 · Instituto de Cultura de Baja California',
      '1991 · Instituto de Cultura de Baja California',
      '1991 · Museo de Arte de Sinaloa',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: expo }}
          className="absolute inset-0"
        >
          <img
            src="/CiaparaHeroImg.jpeg"
            alt="Obra de Enrique Ciapara"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1A1916]/65" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN }}
        />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
            <div className="overflow-hidden mb-3">
              <motion.p
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
                className="text-xs tracking-[0.45em] uppercase text-white/45"
              >
                Textos sobre la obra
              </motion.p>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
                className="text-[clamp(2.8rem,8vw,7rem)] font-bold tracking-tight text-white leading-[0.92]"
              >
                Hacia la<br />monotonía
              </motion.h1>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.9 }}
              className="w-20 h-px bg-[#8B3A2A] origin-left"
            />
          </div>
        </div>
      </section>

      {/* ── ENSAYO PRINCIPAL ─────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#F6F2EC] border-b border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold leading-[1.18] max-w-5xl text-[#1A1916] uppercase mb-16">
              Hacia la monotonía en Ciapara
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl">
            <div>
              <FadeIn>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                  La palabra monotonía casi siempre tiene una connotación negativa, peyorativa.
                  Sin embargo, si tomamos la cita del poeta argentino Hugo Gola —cuando escribe
                  sobre Juan L. Ortiz— y con ella definimos la obra de un pintor, tal pintor
                  tendría que sentirse halagado de ser un pintor monótono.
                </p>
              </FadeIn>

              <FadeIn delay={0.05}>
                <blockquote className="border-l-2 border-[#8B3A2A] pl-6 mb-8">
                  <p className="text-sm text-[#1A1916] leading-[1.9] italic mb-4">
                    &ldquo;En su ensayo <em>Tienen razón los literatos</em>, Cesare Pavese dice:
                    &lsquo;Todo auténtico escritor es espléndidamente monótono en cuanto en sus páginas
                    rige un molde al que acude, una ley formal de fantasía que transforma el más
                    diverso material en figuras y situaciones que son casi siempre las mismas.&rsquo;
                    Si esta afirmación es verdadera, como realmente lo creemos, Juan L. Ortiz es,
                    sin dudas, un auténtico escritor. Su tarea consistió siempre en transformar
                    el diverso material a su alcance, vasto y renovado, en figuras y situaciones
                    que son casi siempre las mismas, dando pruebas de una espléndida monotonía.&rdquo;
                  </p>
                  <cite className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] not-italic">
                    Hugo Gola
                  </cite>
                </blockquote>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.08}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                  Tomamos al pie de la letra la cita de Gola y afirmamos que Enrique Ciapara
                  es un auténtico pintor, ya que en sus cuadros rige una ley formal de fantasía
                  que transforma el diverso material a su alcance en formas, espacios, figuras
                  y líneas que son casi siempre las mismas, dando pruebas de una espléndida
                  monotonía, o coherencia formal.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  En cuanto a los colores, la paleta de Ciapara consiste siempre en una colorística
                  tonal de gran sutileza. El rojo que utiliza, por ejemplo, es un rojo indio con
                  un poco de amarillo canario, un poco de blanco, hasta llegar a una especie de
                  mamey o de salmón. Así Ciapara va reformulando los colores industriales,
                  alterándolos, creando una paleta personal sin estridencias, tendiendo al tono mate.
                </p>
              </FadeIn>

              <FadeIn delay={0.12}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">
                  La pintura de Ciapara es una pintura vitalista que, sin explicitarlo, invita
                  a gozar de sus colores, de su espontaneidad, de sus líneas sensibles. Nada
                  rígido se encuentra en ella; es flexible, un deleite para los ojos. Nada oscuro,
                  ni tétrico, ni dramático, ni ideológico se concibe en sus cuadros, sino el puro
                  goce de ver, comer, beber, vivir.
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.1}>
            <p className="mt-12 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
              Luis Verdejo
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MATERIALES / MOTIVOS ─────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-6">
              Los materiales a su alcance
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              ¿Cuál es el material a su alcance o los motivos con los que trabaja Ciapara?
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4DFD8]">
            {motivos.map((m, i) => (
              <FadeIn key={m.letter} delay={i * 0.07}>
                <div className="bg-[#F6F2EC] p-8 md:p-10 h-full">
                  <p className="text-[3rem] font-bold text-[#E4DFD8] leading-none mb-5 select-none">
                    {m.letter}
                  </p>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase text-[#1A1916] mb-3">
                    {m.title}
                  </p>
                  <p className="text-sm text-[#6B6660] leading-[1.85]">{m.body}</p>
                </div>
              </FadeIn>
            ))}

            {/* Sexta celda — alegría */}
            <FadeIn delay={0.35}>
              <div className="bg-[#8B3A2A] p-8 md:p-10 h-full flex flex-col justify-end">
                <p className="text-sm text-white/70 leading-[1.85] mb-4">
                  Nosotros, como espectadores de pintura, decimos que la belleza imperfecta
                  en la obra de Ciapara es un motivo de alegría.
                </p>
                <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                  La belleza imperfecta
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE — SANROMÁN ───────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#1A1916] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[700px] h-[450px] pointer-events-none opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #8B3A2A 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="block text-5xl text-[#8B3A2A] font-bold leading-none mb-6 select-none">

            </span>
            <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-[1.5] max-w-4xl mb-8">
              I say that Ciapara&apos;s paintings are lyrical and syncopated like John Coltrane&apos;s
              Night Train; loose like kids&apos; doodles but fully aware in their compositional wit;
              they are natural; and their surfaces express such hedonistic pleasure in the process
              of their making that there is no space left for nostalgia of painting&apos;s past.
            </blockquote>
            <p className="text-xs tracking-[0.35em] uppercase text-white/30">
              Lucía Sanromán · June 2011
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── TEXTOS CRÍTICOS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC] border-b border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-3">
              Textos críticos
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              Escritos sobre la obra de Enrique Ciapara
            </p>
          </FadeIn>

          {/* Espinosa de los Monteros */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-20 pb-20 border-b border-[#E4DFD8]">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] mb-2">I</p>
                <p className="text-sm font-bold text-[#1A1916] mb-1">
                  Santiago Espinosa de los Monteros
                </p>
                <p className="text-xs text-[#6B6660] tracking-[0.1em]">
                  Ciudad de México, junio 2011
                </p>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.05}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  Algunas de las mejores piezas de su producción se acercan de manera frontal a
                  una narrativa en la que las palabras juegan un papel fundamental. Se trata de
                  palabras imaginadas. No porque se les haya pensado sencillamente y de ahí se
                  les haya llevado a la tela, sino porque son palabras hechas imagen y, aun
                  conservando códigos representativos de la escritura y diciéndonos —refiriéndonos—
                  a algunos de los objetos que denotan, ahora son otra cosa. Han pasado a ser parte
                  de sus telas y de sus papeles para convertirse, al igual que una cuchara, un plato
                  hondo o un zapato, en dibujos que habitan el espacio y forman parte de un todo visual.
                </p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">
                  El trabajo de Enrique Ciapara apunta en dirección a la pintura. Cuando parecerían
                  correr malos tiempos para ella y cuando convive como nunca le había sucedido de
                  manera especialmente incómoda con otras disciplinas, este trabajo replantea no
                  sólo su pertinencia sino su vigencia y constante renovación. Su pintura encierra
                  una iconografía que a primera vista nos es cotidiana. En una siguiente mirada nos
                  sorprende al descubrir que cada objeto, cada intento de reconstrucción de su entorno
                  ha fallado y a cambio permitió el nacimiento de otro paralelo. Hay un mundo nuevo,
                  con formas y códigos autónomos de todo lo que hemos aprendido a nombrar.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Sanromán */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-20 pb-20 border-b border-[#E4DFD8]">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] mb-2">II</p>
                <p className="text-sm font-bold text-[#1A1916] mb-1">Lucía Sanromán</p>
                <p className="text-xs text-[#6B6660] tracking-[0.1em]">June 2011</p>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.05}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  Enrique Ciapara&apos;s paintings give real pleasure. This pleasure is not divorced
                  from the senses but rather dependent on them, and to enjoy his painting is not
                  too far removed from what is experienced during a lovingly made, extraordinary meal.
                </p>
              </FadeIn>
              <FadeIn delay={0.07}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  What he offers is a different narrative as startling for its sincerity as for its
                  paradoxical transience. He offers painting. Just that. Painting, but at its best.
                  Good painting is difficult to describe with language and one must circle around it,
                  through metaphor and simile, in order to translate it into text.
                </p>
              </FadeIn>
              <FadeIn delay={0.09}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  Painting for his entire adult life, Ciapara was in his late teens when he began
                  attending the workshops that Spanish painter Luis Moret taught in Tijuana in the
                  1980s. Closer to Art Informel than American School abstract expressionism,
                  Ciapara&apos;s pictorial language has evolved into an alphabet of markings that express
                  an awareness of painting&apos;s representational origins while not being tied to either
                  realism or abstraction.
                </p>
              </FadeIn>
              <FadeIn delay={0.11}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  Sometimes reminiscent of Cy Twombly and at others of early Philip Guston, Ciapara
                  is most himself when he is at his most hedonistic — when pleasure guides the
                  pictorial decisions being made in real time, in the studio.
                </p>
              </FadeIn>
              <FadeIn delay={0.13}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">
                  Ciapara&apos;s persistent return to pleasure, even amidst a social order that is intent
                  on dissolution, is neither banal nor ornamental, but evidences one more form
                  of resistance.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Dilger */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] mb-2">III</p>
                <p className="text-sm font-bold text-[#1A1916] mb-1">Alberto Dilger</p>
                <p className="text-xs text-[#6B6660] tracking-[0.1em]">Curador</p>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.05}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  La pintura de Enrique Ciapara recupera aquello que no le pertenece a la pintura
                  y se articula como un lenguaje que no obedece a una gramática definida. Las
                  palabras que vienen a nuestra mente cuando observamos su obra establecen un
                  vocabulario de contornos y colores donde el círculo puede ser el origen de una
                  idea, una manzana o una estrella.
                </p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">
                  Ciapara parte de una certeza para convertirla en una mentira. El color es la
                  medida de todas las cosas: el día es negro, la noche blanca y el cielo azul
                  como una naranja. Pero antes de la pintura no hay nada definido. La pintura de
                  Ciapara no representa lo que vemos sino lo que podemos llegar a ver. Como si
                  las figuras o las formas perdieran su dimensión y el equilibrio, y tuviéramos
                  que empezar de nuevo.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEMBLANZA ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-3">
              Semblanza
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              Enrique Ciapara<br />Tijuana, Baja California, 1972
            </p>
          </FadeIn>

          <div className="max-w-2xl space-y-8">
            <FadeIn delay={0.04}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                Desde principios de los años dos mil ha sido uno de los artistas más destacados
                de la zona fronteriza Tijuana–San Diego, presentando su trabajo en numerosas
                muestras colectivas y exposiciones individuales en museos y galerías de Tijuana,
                San Diego, Ciudad de México, Barcelona, Los Ángeles y Washington DC, entre otras sedes.
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                Su obra aparece en distintos catálogos de exposiciones nacionales e internacionales,
                tales como <em>Obra Negra, una aproximación a la cultura visual de Tijuana</em> (2011,
                Centro Cultural Tijuana) y <em>Strange New World</em> (2006, Museum of Contemporary Art
                San Diego). Su trabajo ha sido reseñado en los libros <em>De aquellos páramos sin
                cultura…</em> (Roberto Rosique, 2016) y <em>Cambio y permanencia</em> (Gabriel Trujillo
                Muñoz, 2017).
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                Ha sido galardonado con premios y distinciones en diversos certámenes, incluyendo
                la III Bienal del Noroeste (1991), la Bienal Plástica de Baja California (1993, 2005)
                y el primer lugar en la VI Bienal de Pintura Pedro Coronel (2019). Formó parte del
                Sistema Nacional de Creadores de Arte, FONCA, edición 2019–2022.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                Enrique Ciapara nació bajo el signo de cáncer, de padre sonorense y madre
                chilango-bajacaliforniana. Como muchos artistas se acercó desde temprana edad
                a las artes, probando destreza en la música y tomando perfil definitivo en el
                dibujo y la pintura. En una ciudad sin estudios artísticos profesionales, se
                formó en talleres libres. A fines de los ochenta y principios de los noventa,
                Felipe Almada fue su mentor y el Nopal Centenario su pandilla y generación,
                ambiente en que se desarrollaron jóvenes que destacaron en teatro, performance,
                literatura, activismo binacional y pintura.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                Más tarde, una influencia determinante fue la cercanía con el maestro Luis Moret
                y la maestra Marta Palau. En 1993 realizó su primera residencia en Europa,
                viajando por España, Francia y Alemania, quedándose tres meses en Tarragona.
                Esta experiencia le dejó un gusto por la cultura mediterránea y desarrolló su
                natural habilidad gastronómica. En 1997 realizó su segunda estancia en Tarragona,
                donde nació su segunda hija, y se afianzó la gestualidad como camino de expresión.
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="text-sm text-[#6B6660] leading-[1.9]">
                A su vuelta conoció al artista Fernando Delmar, con quien empata en sensibilidad
                y búsqueda de intencionalidad creativa. Desde entonces y hasta la fecha, ha
                desarrollado una complicidad en proyectos de gráfica, libros de artista y pintura
                alimón. Trabaja y radica desde Tijuana, México.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM VITAE ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1A1916]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-white/30 mb-3">
              Curriculum Vitae
            </p>
            <p className="text-xl md:text-2xl font-bold text-white leading-[1.2] mb-16">
              Enrique Ciapara · Tijuana, B.C. · 1972
            </p>
          </FadeIn>

          <div className="divide-y divide-white/10">
            {cvSections.map((sec, si) => (
              <FadeIn key={sec.title} delay={si * 0.05}>
                <div className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-white pt-1">
                    {sec.title}
                  </p>
                  <ul className="space-y-3">
                    {sec.items.map((item) => (
                      <li key={item} className="text-sm text-white/55 leading-[1.7]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}

            {/* Otras actividades */}
            <FadeIn delay={0.25}>
              <div className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
                <p className="text-xs tracking-[0.25em] uppercase text-white pt-1">
                  Otras actividades
                </p>
                <ul className="space-y-3 text-sm text-white/55 leading-[1.7]">
                  <li>2010 · Diseño de etiqueta para vino La Niña Au Rouge</li>
                  <li>2008 · Gestión y organización de exhibición individual de Marta Palau, El Mitote, Grand Hotel Tijuana</li>
                  <li>2001 · Diseño del espacio para la Compañía Jorge Domínguez, III Muestra Internacional de Danza Cuerpos en Tránsito, CECUT</li>
                  <li>2001 · Diseño del espacio para <em>Danzas para Transitar el Mundo</em>, Teatro del CENART, México DF</li>
                  <li>1999 · Portada de <em>El Bilé y otras ensoñaciones</em>, Alejandra Camposeco, Fondo Ed. Tierra Adentro</li>
                  <li>1999 · Portada y selección de dibujos de <em>Tramoya</em>, Revista de Teatro No. 61, Universidad Veracruzana</li>
                  <li>1999 · Diseño del espacio, Celebrate Dance Festival, Balboa Park, San Diego, CA</li>
                  <li>1991 · Portada de <em>Desencuentros del Blues, de los Amores</em>, Francisco Morales, UABC</li>
                  <li>1991 · Selección de apuntes para <em>Hoja</em>, Taller de Poesía de Tijuana, UABC</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
