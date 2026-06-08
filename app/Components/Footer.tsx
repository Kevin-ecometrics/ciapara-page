import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" bg-primary">
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
        </footer>
    )
}