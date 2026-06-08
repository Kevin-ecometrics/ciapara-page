"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <footer className="bg-primary">
            <div className="py-6 mt-auto mx-10">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-lg font-semibold tracking-[0.2em] uppercase text-[#FAF8F4] mb-4">
                        Enrique Ciapara
                    </h1>
                    <div className="text-sm text-[#FAF8F4]">
                        <Link href="/" className="hover:text-amber-500 transition-colors font-bold text-lg">
                            Inicio
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end mb-4">
                    <button
                        type="button"
                        onClick={() => setIsPrivacyOpen(true)}
                        className="text-sm font-semibold text-[#FAF8F4] transition-colors hover:text-amber-500 hover:cursor-pointer"
                    >
                        Política de privacidad
                    </button>
                </div>
                <hr className="border-[#FAF8F4]" />
                <div className="flex flex-col items-center justify-center gap-2 max-w-4xl mx-auto text-center text-sm text-[#FAF8F4] mt-4">
                    <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                    <div>
                        <span className="">Desarrollado por </span>
                        <a href="https://e-commetrics.com/" className="text-amber-500 hover:text-amber-600 transition-colors">
                            e-commetrics
                        </a>
                    </div>
                </div>
            </div>

            {isPrivacyOpen && (
                <div className="popup-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setIsPrivacyOpen(false)}>
                    <div className="popup-card w-full rounded-2xl bg-[#FAF8F4] p-6 shadow-2xl md:w-[50vw] md:max-w-2xl max-h-175 overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>                        
                        <div className="mb-4 flex items-start justify-between gap-4 max-h-125">
                            <div>
                                <h2 className="text-4xl">Política de privacidad</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsPrivacyOpen(false)}
                                className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                aria-label="Cerrar política de privacidad"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-3">
                            <p>
                                En nuestro sitio web, accesible desde este portal, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento contiene los tipos de información que recopilamos y registramos, y cómo la usamos.
                            </p>
                            <h1 className="text-2xl">Uso de la información</h1>
                            <p>
                                Podemos comunicarnos con usted directamente o a través de socios autorizados, incluyendo servicio de atención al cliente, para brindarle actualizaciones, información relacionada con el sitio, y fines promocionales y de marketing. También podemos enviar correos electrónicos e implementar medidas para prevenir fraude.
                            </p>
                            <h1 className="text-2xl">Archivos de registro</h1>
                            <p>
                                Seguimos un procedimiento estándar de uso de archivos de registro, que registran a los visitantes cuando acceden al sitio. La información recopilada incluye direcciones IP, tipo de navegador, proveedor de servicios de Internet (ISP), marca de fecha y hora, páginas de referencia/salida y número de clics. Estos datos no están vinculados a ninguna información personal identificable. El propósito es analizar tendencias, administrar el sitio y recopilar información demográfica.
                            </p>
                            <h1 className="text-2xl">Cookies y tecnologías similares</h1>
                            <p>
                                Como cualquier otro sitio web, utilizamos cookies para almacenar información, incluidas las preferencias de los visitantes y las páginas visitadas. La información se emplea para optimizar la experiencia de los usuarios, personalizando el contenido según el navegador y otra información.
                            </p>
                            <h1 className="text-2xl">Publicidad de terceros</h1>
                            <p>
                                Algunos anunciantes pueden utilizar cookies y tecnologías como JavaScript o Web Beacons para medir la efectividad de sus campañas y personalizar los anuncios que aparecen en nuestro sitio. Tenga en cuenta que no tenemos acceso ni control sobre estas cookies utilizadas por terceros.
                            </p>
                            <p>
                               Recomendamos consultar las políticas de privacidad de cada proveedor de servicios o anunciante externo para obtener información más detallada.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}