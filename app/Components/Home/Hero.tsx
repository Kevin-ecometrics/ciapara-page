export default function Hero() {
    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-white text-black">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#1f2937_45%,#111827_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(17,24,39,0.92)_55%,rgba(0,0,0,1)_100%)]" />
                </div>
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/90 shadow-lg backdrop-blur-md">
                    Video placeholder
                </span>
                <h1 className="max-w-3xl text-4xl font-bold tracking-[0.18em] text-white md:text-6xl">
                    Enrique Ciapara
                </h1>
            </div>
        </section>
    )
}