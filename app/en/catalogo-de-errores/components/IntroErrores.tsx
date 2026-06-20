"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../../../providers/i18nProvider";
import { useErroresT } from "../../../lib/i18n-errores";

const expo = [0.16, 1, 0.3, 1] as const;
// Curva simétrica para el giro de página — acelera y luego frena, como una
// hoja de papel cayendo por su propio peso. La curva "expo" (arriba) es un
// ease-out fuerte pensado para revelar texto, no para un giro físico.
const pageFlipEase = [0.45, 0.05, 0.55, 0.95] as const;

// Cuántas páginas interiores se usan (en parejas, como páginas dobles).
// Cambia este número para que el hojeo dure más o menos.
const SOURCE_PAGE_COUNT = 30;
const SPREAD_COUNT = SOURCE_PAGE_COUNT / 2;

const COVER_SRC = "/images/errores/cuaderno/pagina-01.webp";
// pagina-01 es la portada; las páginas interiores empiezan en pagina-02.
const PAGES = Array.from(
  { length: SOURCE_PAGE_COUNT },
  (_, i) => `/images/errores/cuaderno/pagina-${String(i + 2).padStart(2, "0")}.webp`,
);
const SPREADS = Array.from({ length: SPREAD_COUNT }, (_, i) => [
  PAGES[i * 2],
  PAGES[i * 2 + 1],
]);
const ALL_SRCS = [COVER_SRC, ...PAGES];

// El libro cerrado mide una página; abierto, mide el doble (la pareja de
// hojas), pero la altura no cambia — así se ve horizontal al abrirse.
const BOOK_H_VMIN = 48;
const SINGLE_W_VMIN = +((BOOK_H_VMIN * 618) / 760).toFixed(1);
const DOUBLE_W_VMIN = +(SINGLE_W_VMIN * 2).toFixed(1);

const NAME_MS = 1500;
const OPEN_DELAY_MS = 300;
const OPEN_CLOSE_DURATION = 0.5;
// FLIP_MS debe ser mayor que FLIP_DURATION (en ms): si el intervalo dispara
// la siguiente página antes de que la anterior termine de girar, esa
// animación se corta a mitad de camino y salta a su posición final — eso es
// lo que se sentía "trabado". Con el intervalo más holgado, cada hoja
// completa su arco antes de que empiece la próxima.
const FLIP_MS = 260;
const FLIP_DURATION = 0.24;
const CLOSE_DELAY_MS = 150;
const HOLD_MS = 550;

// Cuántas páginas futuras se mantienen montadas por adelantado. Solo se
// renderizan las hojas cercanas al índice actual (en vez de las 15 a la
// vez) para que el navegador no tenga que componer ~30 imágenes en 3D al
// mismo tiempo — eso era lo que causaba el trabajo al girar las páginas.
const LOOKAHEAD = 2;

export default function IntroErrores() {
  const { locale } = useI18n();
  const eT = useErroresT(locale);

  const [visible, setVisible] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);
  const [nameTimerDone, setNameTimerDone] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadedMask, setLoadedMask] = useState<boolean[]>(
    Array(ALL_SRCS.length).fill(false),
  );

  const phase: "name" | "book" = nameTimerDone && allLoaded ? "book" : "name";
  const isOpen = opened && !closing;

  // Precarga la portada y todas las páginas en paralelo.
  useEffect(() => {
    let loadedCount = 0;
    ALL_SRCS.forEach((src, i) => {
      const img = new window.Image();
      const settle = (ok: boolean) => {
        loadedCount++;
        setLoadedMask((prev) => {
          const next = [...prev];
          next[i] = ok;
          return next;
        });
        if (loadedCount >= ALL_SRCS.length) setAllLoaded(true);
      };
      img.onload = () =>
        img
          .decode()
          .catch(() => {})
          .finally(() => settle(true));
      img.onerror = () => settle(false);
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setNameTimerDone(true), NAME_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prevent = (e: TouchEvent) => e.preventDefault();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", prevent, { passive: false });
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", prevent);
    };
  }, [visible]);

  const endIntro = () => {
    setVisible(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  // Coreografía: portada cerrada -> se abre en doble página -> hojea
  // rápido las páginas -> cierra la portada -> termina la intro.
  useEffect(() => {
    if (phase !== "book") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let interval: ReturnType<typeof setInterval> | null = null;

    timers.push(
      setTimeout(() => {
        setOpened(true);

        timers.push(
          setTimeout(() => {
            let i = 0;
            interval = setInterval(() => {
              i++;
              setPageIndex(i);
              if (i >= SPREAD_COUNT) {
                if (interval) clearInterval(interval);
                timers.push(
                  setTimeout(() => {
                    setClosing(true);
                    timers.push(
                      setTimeout(
                        endIntro,
                        OPEN_CLOSE_DURATION * 1000 + HOLD_MS,
                      ),
                    );
                  }, CLOSE_DELAY_MS),
                );
              }
            }, FLIP_MS);
          }, OPEN_CLOSE_DURATION * 1000),
        );
      }, OPEN_DELAY_MS),
    );

    return () => {
      timers.forEach(clearTimeout);
      if (interval) clearInterval(interval);
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-errores"
          className="fixed inset-0 z-9999 bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: expo }}
        >
          {/* Fase de título */}
          <AnimatePresence mode="sync">
            {phase === "name" && (
              <motion.div
                key="name"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center"
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: expo }}
              >
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight uppercase leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.1 }}
                  >
                    {eT.hero.title1}
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight uppercase leading-[0.88]"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.25 }}
                  >
                    {eT.hero.title2}
                  </motion.span>
                </div>
                <motion.div
                  className="w-16 h-px bg-white/30 mt-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: expo, delay: 0.7 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fase de libro — portada única, se abre en doble página y vuelve a cerrar */}
          {phase === "book" && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "2200px" }}
            >
              <motion.div
                className="relative shadow-2xl shadow-black/60 rounded-md"
                style={{ height: `${BOOK_H_VMIN}vmin`, willChange: "width" }}
                animate={{
                  width: `${isOpen ? DOUBLE_W_VMIN : SINGLE_W_VMIN}vmin`,
                }}
                transition={{ duration: OPEN_CLOSE_DURATION, ease: expo }}
              >
                {/* Base — queda al descubierto cuando todas las páginas se han pasado */}
                <div className="absolute inset-0 rounded-md bg-[#15140f]" />

                {/* Páginas dobles, encimadas — la de arriba se pasa primero.
                    Solo se montan la que se está pasando y unas pocas por
                    adelantado; las ya pasadas se desmontan (siguen ocultas
                    igual, pero dejan de pesarle al navegador). */}
                {SPREADS.map(([leftSrc, rightSrc], i) => {
                  // Se mantiene un colchón hacia atrás para que la hoja que
                  // todavía está terminando su giro (FLIP_DURATION) no se
                  // desmonte a la mitad de la animación.
                  if (i < pageIndex - 2 || i > pageIndex + LOOKAHEAD)
                    return null;
                  if (!loadedMask[i * 2 + 1] || !loadedMask[i * 2 + 2])
                    return null;
                  const flipped = i < pageIndex;
                  return (
                    <motion.div
                      key={leftSrc}
                      className="absolute inset-0 flex overflow-hidden rounded-md"
                      style={{
                        zIndex: SPREADS.length - i,
                        transformOrigin: "0% 50%",
                        backfaceVisibility: "hidden",
                        willChange: "transform",
                      }}
                      initial={false}
                      animate={{ rotateY: flipped ? -178 : 0 }}
                      transition={
                        i === pageIndex - 1
                          ? { duration: FLIP_DURATION, ease: pageFlipEase }
                          : { duration: 0 }
                      }
                    >
                      <div className="w-1/2 h-full overflow-hidden">
                        <img
                          src={leftSrc}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-1/2 h-full overflow-hidden border-l border-black/10">
                        <img
                          src={rightSrc}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Portada — una sola página; se abre y se vuelve a cerrar sobre el lomo */}
                {loadedMask[0] && (
                  <motion.div
                    className="absolute inset-0 overflow-hidden rounded-md"
                    style={{
                      zIndex: SPREADS.length + 2,
                      transformOrigin: "0% 50%",
                      backfaceVisibility: "hidden",
                      willChange: "transform",
                    }}
                    animate={{ rotateY: isOpen ? -178 : 0 }}
                    transition={{ duration: OPEN_CLOSE_DURATION, ease: expo }}
                  >
                    <img
                      src={COVER_SRC}
                      alt={`${eT.hero.title1} ${eT.hero.title2}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {/* Lomo */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3%] rounded-l-md bg-linear-to-r from-black/70 to-transparent"
                  style={{ zIndex: SPREADS.length + 3 }}
                />
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
