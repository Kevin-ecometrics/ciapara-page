export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#1A1916] text-white px-6 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-white">
              C I A P A R A
            </p>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Estudio de pintura y grabado establecido en Tijuana, Baja California, México.
              Desde 2001 al servicio del arte.
            </p>
            <div className="inline-flex items-center gap-2 border border-[#8B3A2A]/40 px-3 py-2 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B3A2A]" />
              <span className="text-xs text-[#8B3A2A] tracking-[0.12em] uppercase">
                Taller Establecido
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2">Navegación</p>
            {['Obras', 'Sobre Mí', 'Noticias', 'Contacto'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="underline-hover text-sm text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2">Contacto</p>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                <a
                  href="mailto:contacto@ciapara.com"
                  className="underline-hover hover:text-white transition-colors duration-300"
                >
                  contacto@ciapara.com
                </a>
              </p>
              <p>Tijuana, Baja California, México</p>
              <p>Tarragona, Catalunya, España</p>
            </div>
            <div className="flex gap-5 mt-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map((net) => (
                <a
                  key={net}
                  href="#"
                  className="text-xs text-white/40 hover:text-white transition-colors duration-300 underline-hover"
                >
                  {net}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/25">
          <p>© 2026 Enrique Ciapara. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors duration-300">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-white/60 transition-colors duration-300">
              Créditos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
