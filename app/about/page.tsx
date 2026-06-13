'use client'

import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useI18n } from '../providers/i18nProvider'
import { useAboutT } from '../lib/i18n-about'

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

const cvItems = [
  [
    '1991–94 · Taller de pintura, Mtro. Luis Moret, Tijuana, BC',
    '1992–93 · Taller de dibujo y grabado, Mtro. Michel Shnor, Southwestern College, San Diego, CA',
    '1993 · Residencia artística, Taller de Ramón Ferran, Reus, Tarragona, España',
    '1993–94 · Taller de grabado, Mtro. Luis Lombardo, France Cultura, Tijuana, BC',
    '1995 · Taller de pintura, Mtro. Roger Von Guten, CECUT, Tijuana, BC',
  ],
  [
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
  [
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
  [
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
  [
    '2005 · Museo de Arte Contemporáneo de San Diego',
    '2005 · Instituto de Cultura de Baja California',
    '2000 · Museo de las Californias',
    '1995 · Instituto de Cultura de Baja California',
    '1991 · Instituto de Cultura de Baja California',
    '1991 · Museo de Arte de Sinaloa',
  ],
]

const otrasActividadesItems = [
  '2010 · Diseño de etiqueta para vino La Niña Au Rouge',
  '2008 · Gestión y organización de exhibición individual de Marta Palau, El Mitote, Grand Hotel Tijuana',
  '2001 · Diseño del espacio para la Compañía Jorge Domínguez, III Muestra Internacional de Danza Cuerpos en Tránsito, CECUT',
  '2001 · Diseño del espacio para Danzas para Transitar el Mundo, Teatro del CENART, México DF',
  '1999 · Portada de El Bilé y otras ensoñaciones, Alejandra Camposeco, Fondo Ed. Tierra Adentro',
  '1999 · Portada y selección de dibujos de Tramoya, Revista de Teatro No. 61, Universidad Veracruzana',
  '1999 · Diseño del espacio, Celebrate Dance Festival, Balboa Park, San Diego, CA',
  '1991 · Portada de Desencuentros del Blues, de los Amores, Francisco Morales, UABC',
  '1991 · Selección de apuntes para Hoja, Taller de Poesía de Tijuana, UABC',
]

export default function AboutPage() {
  const { locale } = useI18n()
  const t = useAboutT(locale)

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
                {t.hero.label}
              </motion.p>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
                className="text-[clamp(2.8rem,8vw,7rem)] font-bold tracking-tight text-white leading-[0.92]"
              >
                {t.hero.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
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
              {t.essay.title}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl">
            <div>
              <FadeIn>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                  {t.essay.p1}
                </p>
              </FadeIn>

              <FadeIn delay={0.05}>
                <blockquote className="border-l-2 border-[#8B3A2A] pl-6 mb-8">
                  <p className="text-sm text-[#1A1916] leading-[1.9] italic mb-4">
                    {t.essay.blockquote}
                  </p>
                  <cite className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] not-italic">
                    {t.essay.blockquoteAuthor}
                  </cite>
                </blockquote>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.08}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                  {t.essay.p2}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-sm text-[#6B6660] leading-[1.9] mb-6">
                  {t.essay.p3}
                </p>
              </FadeIn>

              <FadeIn delay={0.12}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">
                  {t.essay.p4}
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.1}>
            <p className="mt-12 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
              {t.essay.author}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MATERIALES / MOTIVOS ─────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-6">
              {t.motivos.label}
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              {t.motivos.question}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4DFD8]">
            {t.motivos.items.map((m, i) => (
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

            <FadeIn delay={0.35}>
              <div className="bg-[#8B3A2A] p-8 md:p-10 h-full flex flex-col justify-end">
                <p className="text-sm text-white/70 leading-[1.85] mb-4">
                  {t.motivos.sixthBody}
                </p>
                <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                  {t.motivos.sixthLabel}
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
            <span className="block text-5xl text-[#8B3A2A] font-bold leading-none mb-6 select-none">&ldquo;</span>
            <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-[1.5] max-w-4xl mb-8">
              {t.pullQuote.text}
            </blockquote>
            <p className="text-xs tracking-[0.35em] uppercase text-white/30">
              {t.pullQuote.attribution}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── TEXTOS CRÍTICOS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC] border-b border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-3">
              {t.criticalTexts.label}
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              {t.criticalTexts.title}
            </p>
          </FadeIn>

          {t.criticalTexts.sections.map((sec, si) => (
            <div
              key={sec.num}
              className={`grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 ${si < t.criticalTexts.sections.length - 1 ? 'mb-20 pb-20 border-b border-[#E4DFD8]' : ''}`}
            >
              <FadeIn>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-[#8B3A2A] mb-2">{sec.num}</p>
                  <p className="text-sm font-bold text-[#1A1916] mb-1">{sec.author}</p>
                  <p className="text-xs text-[#6B6660] tracking-[0.1em]">{sec.date}</p>
                </div>
              </FadeIn>
              <div>
                {sec.paragraphs.map((p, pi) => (
                  <FadeIn key={pi} delay={0.05 + pi * 0.02}>
                    <p className={`text-sm text-[#6B6660] leading-[1.9] ${pi < sec.paragraphs.length - 1 ? 'mb-6' : ''}`}>
                      {p}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEMBLANZA ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-[#8B3A2A] mb-3">
              {t.semblanza.label}
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1A1916] leading-[1.2] max-w-2xl mb-16">
              {t.semblanza.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </FadeIn>

          <div className="max-w-2xl space-y-8">
            {t.semblanza.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.04 + i * 0.02}>
                <p className="text-sm text-[#6B6660] leading-[1.9]">{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM VITAE ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1A1916]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] uppercase text-white/30 mb-3">
              {t.cv.label}
            </p>
            <p className="text-xl md:text-2xl font-bold text-white leading-[1.2] mb-16">
              {t.cv.title}
            </p>
          </FadeIn>

          <div className="divide-y divide-white/10">
            {t.cv.sectionTitles.map((title, si) => (
              <FadeIn key={title} delay={si * 0.05}>
                <div className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-white pt-1">
                    {title}
                  </p>
                  <ul className="space-y-3">
                    {cvItems[si].map((item) => (
                      <li key={item} className="text-sm text-white/55 leading-[1.7]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.25}>
              <div className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
                <p className="text-xs tracking-[0.25em] uppercase text-white pt-1">
                  {t.cv.otrasActividades}
                </p>
                <ul className="space-y-3 text-sm text-white/55 leading-[1.7]">
                  {otrasActividadesItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
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
