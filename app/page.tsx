import About from "./Components/Home/About";
import Hero from "./Components/Home/Hero";
import Banner from "./Components/Home/Banner";
import Contact from "./Components/Home/Contact";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <About />
      <Contact />
    </div>

    // <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-6 py-20 font-sans">
    //   <div className="max-w-xl w-full">

    //     {/* Header */}
    //     <div className="mb-12">
    //       <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B4513] mb-2">
    //         Tijuana · Tarragona
    //       </p>
    //       <h1 className="text-4xl font-bold text-gray-900 mb-1">Enrique Ciapara</h1>
    //       <p className="text-gray-500 italic text-sm">La alegría de vivir</p>
    //     </div>

    //     {/* Bio */}
    //     <div className="mb-12 space-y-4 text-gray-700 leading-relaxed">
    //       <p>
    //         Pintor con taller establecido en Tijuana, Baja California. Su obra transita entre lo
    //         abstracto y lo semi-abstracto, anclada en el paisaje norteño, la arquitectura espontánea
    //         de la ciudad fronteriza y los objetos cotidianos de la cocina.
    //       </p>
    //       <p>
    //         Ha vivido temporadas en Tarragona, Catalunya. Su taller de grabado lleva el nombre de{" "}
    //         <em>La Brigada</em>, en referencia a <em>La brigade de cuisine</em>.
    //       </p>
    //     </div>

    //     {/* Divider */}
    //     <div className="border-t border-[#E8E0D4] mb-12" />

    //     {/* Contact */}
    //     <div>
    //       <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8B4513] mb-6">
    //         Contacto
    //       </h2>
    //       <div className="space-y-3 text-sm text-gray-600">
    //         <p>
    //           <span className="font-medium text-gray-800">Correo: </span>
    //           <a href="mailto:contacto@ciapara.com" className="hover:text-[#8B4513] transition-colors">
    //             contacto@ciapara.com
    //           </a>
    //         </p>
    //         <p>
    //           <span className="font-medium text-gray-800">Ubicación: </span>
    //           Tijuana, Baja California, México
    //         </p>
    //       </div>
    //     </div>

    //     {/* Footer */}
    //     <p className="mt-16 text-xs text-gray-400">
    //       © 2026 Enrique Ciapara. Todos los derechos reservados.
    //     </p>
    //   </div>
    // </main>
  );
}
