'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import ArtistNav, { ASIDE_W } from '../Components/ArtistNav'
import Footer from '../Components/Footer'

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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: expo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ArtistPage() {
  const [asideOpen, setAsideOpen] = useState(false)

  return (
    <>
      <ArtistNav open={asideOpen} onToggle={() => setAsideOpen(v => !v)} />

      {/* Content wrapper — se desplaza a la derecha cuando el aside abre */}
      <motion.div
        animate={{ marginLeft: asideOpen ? ASIDE_W : 0 }}
        transition={{ duration: 0.5, ease: expo }}
      >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: expo }}
          className="absolute inset-0"
        >
          <img
            src="/CiaparaHeroImg.jpeg"
            alt="Enrique Ciapara"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#1A1916]/55" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN }}
        />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
                className="text-xs tracking-[0.45em] uppercase text-white/45"
              >
                El Artista
              </motion.p>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
                className="block text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-tight text-white leading-[0.9]"
              >
                ENRIQUE
              </motion.span>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: expo, delay: 0.65 }}
                className="block text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-tight text-white leading-[0.9]"
              >
                CIAPARA
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.95 }}
              className="w-20 h-px bg-[#8B3A2A] origin-left"
            />
          </div>
        </div>
      </section>

      {/* ── OPENING STATEMENT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#F6F2EC] border-b border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl lg:text-[2.4rem] font-bold leading-[1.18] max-w-5xl text-[#1A1916] uppercase">
              Pintor tijuanense, Enrique Ciapara transita entre lo abstracto y lo
              semi-abstracto con una práctica enraizada en el paisaje fronterizo, la
              arquitectura espontánea de Tijuana y los objetos cotidianos de la cocina —
              una obra que redefine la relación entre lugar, memoria y materia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED IMAGE ───────────────────────────────────── */}
      <section className="bg-[#F6F2EC] px-6 md:px-10 pb-0">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.0, ease: expo }}
                src="/CiaparaHeroImg.jpeg"
                alt="Enrique Ciapara en su taller"
                className="w-full max-h-[70vh] object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B6660] tracking-[0.12em] uppercase">
              Enrique Ciapara en su taller, Tijuana, B.C.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BIOGRAPHY NARRATIVE ──────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">

            <FadeIn>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Enrique Ciapara nació y creció en Tijuana, Baja California, ciudad fronteriza
                que moldearía para siempre su mirada. La arquitectura espontánea, los colores
                violentos del paisaje urbano y la luz particular del norte de México se
                convirtieron desde temprana edad en el vocabulario visual de su obra. La frontera
                —como condición geográfica y como estado mental— es una presencia constante en
                su trabajo: no como tema explícito, sino como estructura subyacente que informa
                la tensión entre forma y materia, entre orden y desbordamiento.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                En su infancia, Ciapara desarrolla una fascinación precoz por los objetos
                cotidianos — los utensilios de la cocina familiar, las superficies domésticas
                gastadas por el uso, los fragmentos de paisaje que se filtran por las ventanas.
                Esta mirada hacia lo ordinario, cultivada desde los primeros años, se convertiría
                en el núcleo temático de su práctica adulta: no la grandilocuencia del gesto
                heroico, sino la dignidad silenciosa de lo que está siempre presente y raramente
                visto.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
                Formación · 1990s
              </p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Su formación artística se desarrolló entre México y el suroeste de Estados
                Unidos, donde entró en contacto con la tradición del grabado y con una generación
                de artistas comprometidos con una práctica rigurosa y autónoma. La exigencia
                técnica del grabado —la plancha, la mordida del ácido, la presión de la prensa—
                marcaría su modo de entender la pintura: como acto físico, como negociación con
                la resistencia de los materiales.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Las primeras obras de Ciapara oscilan entre la figuración reducida y la
                abstracción emergente. Los motivos recurrentes —utensilios de cocina, superficies
                domésticas, fragmentos de paisaje— aparecen filtrados por una sensibilidad que
                privilegia el proceso sobre el resultado. En estas piezas tempranas puede ya
                intuirse el principio que gobernará toda su trayectoria: la negativa a resolver
                la tensión entre referente y abstracción, la insistencia en mantener ambos
                registros simultáneamente activos.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#1A1916] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[700px] h-[450px] pointer-events-none opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #8B3A2A 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="block text-5xl text-[#8B3A2A] font-bold leading-none mb-6 select-none">
                
              </span>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-[1.5] mb-8">
                La obra de Ciapara presenta tres aspectos simultáneos: la textura como argumento,
                el color como memoria y el gesto como arquitectura. Las superficies acumulan
                tiempo — capas de pigmento que son, simultáneamente, registro del proceso y su
                ocultamiento. Lo que distingue a Ciapara es su negativa a resolver la tensión
                entre abstracción y referente: la cocina, el paisaje, la frontera permanecen
                como presencias insinuadas, nunca declaradas. Esta inestabilidad no es una
                limitación sino el principio organizador de todo su trabajo.
              </blockquote>
              <p className="text-xs tracking-[0.35em] uppercase text-white/30">
                Crítica de arte · Revista de Arte Contemporáneo, 2018
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BIOGRAPHY NARRATIVE CONT. ────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">

            <FadeIn>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
                La Brigada · 2001
              </p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                En 2001, Ciapara funda en Tijuana el taller de grabado La Brigada, nombre
                tomado de la brigade de cuisine — la jerarquía y el rigor de la cocina
                profesional como metáfora del trabajo artístico colectivo y metódico. El taller
                se convirtió en un centro de producción, investigación y encuentro para artistas
                de la región fronteriza. La práctica del grabado, con su exigencia técnica y sus
                posibilidades de multiplicación, enriqueció profundamente la obra pictórica de
                Ciapara, introduciéndole una conciencia renovada de la huella, la textura y la
                serialidad.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Durante los primeros años del taller, Ciapara desarrolla una serie de obras en
                las que la cocina doméstica ocupa el centro de la investigación visual. Los
                utensilios —cazuelas, cucharas, tablas de cortar— son sometidos a un proceso de
                abstracción progresiva hasta perder su legibilidad inmediata, conservando sin
                embargo su peso específico, su presencia material. Es una poética del objeto
                cotidiano elevado: no kitsch, no conceptual, sino simplemente honesto.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
                Tarragona · 2010s
              </p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                A lo largo de los años 2010, Ciapara desarrolla estancias prolongadas en
                Tarragona, Catalunya, que abren su obra a nuevos registros cromáticos y
                espaciales. La luz mediterránea, la arquitectura romana y la relación diferente
                con el tiempo influyen en un giro hacia composiciones más luminosas y una mayor
                libertad gestual. Lo que en Tijuana era tensión y contraste, en Tarragona se
                convierte en apertura y respiración.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Este diálogo entre el norte de México y el sur de Europa —dos extremos del mundo
                hispanohablante, dos geografías radicalmente distintas en su relación con el
                pasado y con la materia— sigue siendo una de las tensiones productivas que
                alimentan su práctica actual. Ciapara no intenta resolver la contradicción entre
                ambos mundos: la habita, la trabaja, la convierte en método.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── INLINE IMAGE ─────────────────────────────────────── */}
      <section className="bg-[#F6F2EC] px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.0, ease: expo }}
                src="/CiaparaHeroImg.jpeg"
                alt="Obra de Enrique Ciapara"
                className="w-full max-h-[60vh] object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B6660] tracking-[0.12em] uppercase">
              Enrique Ciapara · Obra reciente · Técnica mixta sobre tela
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── NARRATIVE FINAL ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F6F2EC] border-t border-[#E4DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">

            <FadeIn>
              <p className="mb-3 text-xs tracking-[0.35em] uppercase text-[#8B3A2A]">
                Práctica actual · 2020s
              </p>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-8">
                Hoy, Ciapara alterna entre Tijuana y Tarragona, manteniendo activo el taller
                La Brigada y participando en exposiciones colectivas e individuales en México,
                España y Estados Unidos. Su obra es una investigación continua sobre los límites
                de la imagen: dónde termina el gesto y dónde comienza la forma, dónde la pintura
                recuerda y dónde olvida.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-sm text-[#6B6660] leading-[1.9] mb-12">
                Las series más recientes profundizan en el paisaje del norte —la aridez, la
                extensión, la luz que aplana y al mismo tiempo revela— combinado con la
                arquitectura fragmentada de la ciudad fronteriza. Son pinturas que no describen
                un lugar sino que lo reconstruyen desde la memoria: imprecisas por principio,
                fieles por eso mismo.
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <a
                href="mailto:contacto@ciapara.com"
                className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#1A1916] border-b border-[#1A1916] pb-1 hover:text-[#8B3A2A] hover:border-[#8B3A2A] transition-colors duration-300"
              >
                Contactar al artista
                <svg className="w-3 h-3" viewBox="0 0 640 640" fill="currentColor">
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>
              </a>
            </FadeIn>

          </div>
        </div>
      </section>

      <Footer />

      </motion.div>
    </>
  )
}
