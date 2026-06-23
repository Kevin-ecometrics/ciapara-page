"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Obras from "./Obras";
import Footer from "./Footer";

import { usePathname } from "next/navigation";

const obrasRoutes = ["/archivo-2000-09", "/catalogo-de-errores", "/serie-2015"];

function FooterRevealStack({
  isObraPage,
  isAboutPage,
}: {
  isObraPage: boolean;
  isAboutPage: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Works sube de 0 a -100% de su propia altura → se va por arriba
  const worksY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    /*
      200vh → 100vh de scroll real para completar la animación.
      Footer queda fijo detrás (z-0).
      Works arranca encima (z-10) y se levanta conforme se scrollea.
    */
    <div
      ref={containerRef}
      id="works"
      className="relative"
      style={{ height: "200dvh" }}
    >
      {/* Footer: siempre visible detrás, sticky al top */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ zIndex: 0, height: "100dvh" }}
      >
        <Footer />
      </div>

      {/* Works: encima del footer, sticky al top, se levanta al hacer scroll.
          En la página de about, el CV (mucho más alto que una pantalla) ya
          se renderizó en flujo normal antes de este componente, así que acá
          solo hace falta un panel blanco — del mismo color que el fondo del
          CV — que sirva de "tapa" y se levante para revelar el footer, sin
          recortar ni scrollear nada. */}
      <motion.div
        className="sticky overflow-hidden"
        style={{
          top: 0,
          zIndex: 10,
          marginTop: "-100vh",
          height: "100dvh",
          y: worksY,
        }}
      >
        {/* Misma estructura para home y páginas de obra aunque hoy ambas
            ramas rendericen Obras (que ya se auto-excluye en su propia
            página) — se mantiene separada para poder volver a cambiar el
            último componente del home sin tocar las páginas de obra. */}
        {isAboutPage ? (
          <div className="h-24 w-full bg-white" />
        ) : isObraPage ? (
          <Obras />
        ) : (
          <Obras />
        )}
      </motion.div>
    </div>
  );
}

export default function FooterReveal() {
  const pathname = usePathname();

  const normalizedPath =
    pathname.replace(/^\/en/, "").replace(/\/$/, "") || "/";
  const isObraPage = obrasRoutes.includes(normalizedPath);
  const isAboutPage = normalizedPath === "/about";

  return (
    <FooterRevealStack isObraPage={isObraPage} isAboutPage={isAboutPage} />
  );
}
