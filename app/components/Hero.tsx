'use client'

import { useRef, type MouseEvent } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  // Un solo scrollYProgress sobre el contenedor alto (250vh)
  // offset 'end end' → progreso 0→1 sobre los 150vh de scroll disponibles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Spring-smoothing del progreso — quita la sensación "escalonada" del scroll
  // crudo y le da a todo el movimiento una inercia suave y cinematográfica.
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 })

  // ── Capa 1 · fondo lejano — drift lento + desenfoque cinematográfico al salir
  const bgY = useTransform(progress, [0, 0.6], ['0%', '28%'])
  const bgScale = useTransform(progress, [0, 0.6], [1, 1.14])
  const bgBlurPx = useTransform(progress, [0, 0.5], [0, 10])
  const bgFilter = useTransform(bgBlurPx, (v) => `blur(${v}px)`)

  // ── Capa 2 · resplandor / plano medio — drift más rápido, se desvanece antes
  const glowY = useTransform(progress, [0, 0.55], ['0%', '50%'])
  const glowOpacity = useTransform(progress, [0, 0.4], [1, 0])

  // ── Primer plano de texto — "push-through": escala, eleva, desenfoca y funde
  const textScale = useTransform(progress, [0, 0.42], [1, 1.22])
  const textY = useTransform(progress, [0, 0.4], ['0%', '-16%'])
  const textOpacity = useTransform(progress, [0, 0.3], [1, 0])
  const textBlurPx = useTransform(progress, [0, 0.36], [0, 7])
  const textFilter = useTransform(textBlurPx, (v) => `blur(${v}px)`)

  // ── Revelado tipo iris — cortina circular que sustituye al overlay plano,
  //    abriéndose desde el centro-inferior y fundiendo con el color de "About"
  const irisClip = useTransform(
    progress,
    [0.46, 1],
    ['circle(0% at 50% 100%)', 'circle(150% at 50% 100%)']
  )

  // ── Hilo indicador de progreso de scroll (borde derecho)
  const threadScale = useTransform(progress, [0, 1], [0, 1])

  // ── Parallax reactivo al cursor para los resplandores — añade profundidad
  //    e interactividad sutil sin depender únicamente del scroll
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const orbX = useSpring(mvX, { stiffness: 40, damping: 18 })
  const orbY = useSpring(mvY, { stiffness: 40, damping: 18 })
  const orbXInverse = useTransform(orbX, (v) => v * -0.6)
  const orbYInverse = useTransform(orbY, (v) => v * -0.6)

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    mvX.set(((e.clientX - left) / width - 0.5) * 50)
    mvY.set(((e.clientY - top) / height - 0.5) * 50)
  }

  return (
    // Contenedor de 250vh — da "recorrido" al scroll para que el sticky dure
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '250vh' }}
    >
      {/* Sticky viewport — se queda fijo mientras el scroll avanza */}
      <div
        className="sticky top-0 h-screen overflow-hidden bg-[#1a1412]"
        onMouseMove={handlePointerMove}
      >

        {/* ── Capa 1 · fondo — parallax lento + blur progresivo de salida ── */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: bgY,
            scale: bgScale,
            filter: bgFilter,
            transformOrigin: 'center bottom',
            background:
              'linear-gradient(150deg, #1a1412 0%, #2d1a0e 28%, #3d2215 52%, #1e1512 76%, #120e0c 100%)',
          }}
        />

        {/* Textura de grano — sutil, da sensación de lienzo pintado */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── Capa 2 · resplandores — parallax de scroll + drift por cursor ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ y: glowY, opacity: glowOpacity }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              x: orbX,
              y: orbY,
              backgroundImage:
                'radial-gradient(ellipse 60% 50% at 25% 45%, #8B3A2A30 0%, transparent 70%)',
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              x: orbXInverse,
              y: orbYInverse,
              backgroundImage:
                'radial-gradient(ellipse 40% 60% at 75% 55%, #4a2a1a24 0%, transparent 60%)',
            }}
          />
        </motion.div>


        {/* ── Texto — "push-through" cinematográfico (escala + elevación + blur + fundido) ── */}
        <motion.div
          className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20"
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            filter: textFilter,
            transformOrigin: 'left bottom',
          }}
        >
          {/* Label — clip reveal */}
          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.3 }}
              className="text-xs tracking-[0.35em] uppercase text-white/45"
            >
              Estudio · Tijuana, B.C. · Est. 2001
            </motion.p>
          </div>

          {/* Heading — two lines with staggered clip reveal */}
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.5 }}
              className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-white leading-[0.9]"
            >
              ENRIQUE
            </motion.span>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: expo, delay: 0.65 }}
              className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-white leading-[0.9]"
            >
              CIAPARA
            </motion.span>
          </div>

          {/* Divider — expand from left */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: expo, delay: 0.95 }}
            className="w-16 h-px bg-white/25 mb-8 origin-left"
          />

          {/* Subtitle — clip reveal */}
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: expo, delay: 1.05 }}
              className="text-base md:text-lg text-white/55 tracking-[0.12em] uppercase"
            >
              Pintor contemporáneo
            </motion.p>
          </div>

          {/* Description — clip reveal */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: expo, delay: 1.2 }}
              className="max-w-md text-sm text-white/40 leading-relaxed"
            >
              Arte que transita entre lo abstracto y lo figurativo, anclado en el paisaje
              fronterizo, la arquitectura espontánea de Tijuana y los objetos cotidianos de la
              cocina.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: expo, delay: 1.75 }}
            className="mt-20 flex items-center gap-4 text-white/25 text-xs tracking-[0.25em] uppercase"
          >
            <div className="w-10 h-px bg-white/25" />
            Desplazar
          </motion.div>
        </motion.div>

        {/* ── Hilo de progreso de scroll — detalle editorial en el borde derecho ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 h-44">
          <span
            className="text-[10px] tracking-[0.3em] text-white/30 uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div className="relative w-px flex-1 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-full bg-white/50 origin-top"
              style={{ scaleY: threadScale }}
            />
          </div>
        </div>

        {/* ── Revelado tipo iris — cortina circular que descubre el MISMO
              contenido del hero, ahora en paleta invertida (claro/oscuro),
              como si el lienzo cambiara de tono al abrirse ── */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          style={{ clipPath: irisClip }}
        >
          <div className="absolute inset-0 bg-[#F6F2EC]" />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
            <p className="text-xs tracking-[0.35em] uppercase text-[#1A1916]/40 mb-8">
              Estudio · Tijuana, B.C. · Est. 2001
            </p>

            <span className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-[#1A1916] leading-[0.9] mb-2">
              ENRIQUE
            </span>
            <span className="block text-[clamp(4rem,12vw,11rem)] font-bold tracking-tight text-[#1A1916] leading-[0.9] mb-8">
              CIAPARA
            </span>

            <div className="w-16 h-px bg-[#1A1916]/25 mb-8" />

            <p className="text-base md:text-lg text-[#1A1916]/55 tracking-[0.12em] uppercase mb-6">
              Pintor contemporáneo
            </p>

            <p className="max-w-md text-sm text-[#1A1916]/40 leading-relaxed">
              Arte que transita entre lo abstracto y lo figurativo, anclado en el paisaje
              fronterizo, la arquitectura espontánea de Tijuana y los objetos cotidianos de la
              cocina.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
