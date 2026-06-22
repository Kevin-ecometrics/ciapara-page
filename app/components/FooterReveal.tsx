"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Obras from "./Obras";
import ObrasFooter from "./ObrasFooter";
import Footer from "./Footer";

import { usePathname } from "next/navigation";

const obrasRoutes = ["/archivo-2000-09", "/catalogo-de-errores", "/serie-2015"];

function FooterRevealStack({ showObras }: { showObras: boolean }) {
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

      {/* Works: encima del footer, sticky al top, se levanta al hacer scroll */}
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
        {showObras ? <ObrasFooter /> : <Obras />}
      </motion.div>
    </div>
  );
}

export default function FooterReveal() {
  const pathname = usePathname();

  // En home: Works. En las páginas de colección: Obras en su lugar.
  const normalizedPath =
    pathname.replace(/^\/en/, "").replace(/\/$/, "") || "/";
  const showObras = obrasRoutes.includes(normalizedPath);

  return <FooterRevealStack showObras={showObras} />;
}
