import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-transparent">
            {/* Container Principal com Glassmorphism Neutro */}
            <div
                className="
                    w-full
                    max-w-4xl
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    rounded-[2.5rem]
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                    p-8 md:p-16
                    text-center
                    transition-all
                    duration-300
                    hover:bg-white/10
                    hover:border-white/20
                "
            >
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white/90">
                    SmartHealth <span className="text-white/40 font-light">City</span>
                </h1>

                <p className="text-white/60 mt-8 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    Descubra como os hábitos tecnológicos e o ambiente urbano
                    influenciam sua saúde e qualidade de vida através de dados inteligentes.
                </p>

                <div className="mt-12">
                    <Link
                        to="/avaliacao"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            bg-white/10
                            hover:bg-white/90
                            text-white
                            hover:text-black
                            border border-white/20
                            px-10
                            py-5
                            rounded-2xl
                            text-lg
                            font-semibold
                            transition-all
                            duration-500
                            ease-in-out
                            transform
                            hover:scale-105
                            active:scale-95
                            shadow-lg
                        "
                    >
                        Iniciar Avaliação
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
