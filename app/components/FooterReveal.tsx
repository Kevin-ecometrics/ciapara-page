"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function FooterReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isAboutPage =
    (pathname.replace(/^\/en/, "").replace(/\/$/, "") || "/") === "/about";

  /*
    offset ["start end", "end end"]:
      progress=0 → top del container llega al bottom del viewport (container entra desde abajo)
      progress=1 → bottom del container llega al bottom del viewport

    Con un container de 200dvh y viewport de 100dvh:
      La zona sticky (containerTop en viewportTop) ocurre en progress≈0.5
      → el footer ya lleva la mitad del viaje cuando el usuario lo ve por primera vez.
      No hay fase "negra vacía".
  */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Footer sube desde 100dvh debajo hasta su posición natural.
  // En progress=0.5 (inicio de sticky) ya está en y=50dvh → mitad visible.
  const footerY = useTransform(scrollYProgress, [0, 1], ["100dvh", "0dvh"]);

  // About: tapa blanca se queda quieta hasta que empieza el sticky, luego sube.
  const coverY = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);

  return (
    <div
      ref={containerRef}
      id="contacto"
      className="relative"
      style={{ height: "200dvh" }}
    >
      {/* Footer sticky detrás — siempre presente */}
      <div
        className="sticky top-0 overflow-hidden bg-[#1A1916]"
        style={{ zIndex: 0, height: "100dvh" }}
      >
        <motion.div style={{ y: isAboutPage ? undefined : footerY }}>
          <Footer />
        </motion.div>
      </div>

      {/* About: tapa blanca encima que se levanta para revelar el footer */}
      {isAboutPage && (
        <motion.div
          className="sticky overflow-hidden bg-white"
          style={{
            top: 0,
            zIndex: 10,
            marginTop: "-100dvh",
            height: "100dvh",
            y: coverY,
          }}
        />
      )}
    </div>
  );
}
