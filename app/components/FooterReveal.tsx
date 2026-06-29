"use client";

import Footer from "./Footer";

/*
  El footer vive en position:fixed detrás del contenido (z-index:0).
  El contenido de cada página se envuelve en relative z-[1], lo que lo
  apila encima y tapa al footer mientras el usuario hace scroll.
  Al llegar al final del contenido, el spacer transparente (100dvh) actúa
  como espacio de scroll: no tiene fondo, así que el footer fijo se ve a
  través de él. El resultado: el footer siempre está desplegado completo
  abajo y el contenido lo va descubriendo de forma natural al subir.
*/
export default function FooterReveal() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Footer />
      </div>

      {/* Spacer transparente — crea la distancia de scroll para que el
          último componente pueda abandonar el viewport por completo. */}
      <div id="contacto" className="h-[50dvh] md:h-[70dvh]" />
    </>
  );
}
