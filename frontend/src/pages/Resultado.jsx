import { useEffect, useState } from "react";
import CardResultado from "../components/CardResultado";

function Resultado() {

    const [dados, setDados] =
        useState(null);

    useEffect(() => {

        const resultado =
            JSON.parse(
                localStorage.getItem(
                    "resultado"
                )
            );

        setDados(resultado);

    }, []);

    if (!dados) {
        return (
            <h1 className="text-white">
                Carregando...
            </h1>
        );
    }

    return (
        <section className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-white mb-8">
                Resultado da Avaliação
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <CardResultado
                    titulo="Sedentarismo"
                    valor={dados.nivel_sedentarismo}
                />

                <CardResultado
                    titulo="Qualidade do Sono"
                    valor={dados.qualidade_sono}
                />

                <CardResultado
                    titulo="Saúde Postural"
                    valor={dados.saude_postural}
                />

                <CardResultado
                    titulo="Bem-estar Mental"
                    valor={dados.bem_estar_mental}
                />

            </div>

        </section>
    );
}

export default Resultado;