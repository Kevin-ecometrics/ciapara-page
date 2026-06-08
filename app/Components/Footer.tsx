export default function Footer() {
    return (
        <footer className="w-full bg-primary py-6 mt-auto">
            
            <div className="flex flex-col items-center justify-center gap-2 max-w-4xl mx-auto text-center text-sm text-[#FAF8F4]">
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                <p>Desarrollado por e-commetrics.com</p>    
            </div>
        </footer>
    )
}