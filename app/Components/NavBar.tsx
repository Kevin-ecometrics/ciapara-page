import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-[#FAF8F4] fixed top-0 z-50">
        <div className=" px-10 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-[0.2em] uppercase text-[#8B4513]">
                Enrique Ciapara
            </h1>
            <div className="text-sm text-gray-600">
                <Link href="/" className="hover:text-[#8B4513] transition-colors font-bold text-lg">
                    Inicio
                </Link>
            </div>
        </div>
    </nav>
  )
}