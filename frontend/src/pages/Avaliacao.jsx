import Questionario from "../components/Questionario";

function Avaliacao() {
    return (
        <section className="px-4 py-8">

            <div
                className="
                    max-w-4xl
                    mx-auto
                    bg-white/10
                    backdrop-blur-xl
                    border border-white/20
                    rounded-3xl
                    p-6 md:p-10
                    shadow-2xl
                "
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    Avaliação de Saúde
                </h1>

                <p className="text-white/70 mb-8">
                    Responda às perguntas abaixo para descobrir como seus hábitos
                    tecnológicos podem impactar sua saúde.
                </p>

                <Questionario />
            </div>

        </section>
    );
}

export default Avaliacao;