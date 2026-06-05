import { useEffect, useState } from "react";
import api from "../services/api";

import GraficoSedentarismo from "../charts/GraficoSedentarismo";
import GraficoSono from "../charts/GraficoSono";

function Dashboard() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        carregarRanking();
    }, []);

    async function carregarRanking() {
        try {
            const response = await api.get("/dashboard/ranking");
            setRanking(response.data);
        } catch (error) {
            console.error(error?.response?.data || error.message);
        }
    }

    return (
        <div className="min-h-screen pt-24 sm:pt-28 px-3 sm:px-6 ">

            {/* HEADER */}
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    Dashboard SmartHealth City
                </h1>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Análise de saúde dos alunos em tempo real
                </p>
            </div>

            {/* GRÁFICOS */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-5 overflow-hidden">
                    <GraficoSedentarismo />
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-5 overflow-hidden">
                    <GraficoSono />
                </div>

            </div>

            {/* RANKING */}
            <div className="max-w-6xl mx-auto px-1 sm:px-0">

                <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">
                    Ranking Geral 🏆
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                    {ranking.map((aluno, index) => (
                        <div
                            key={`${aluno.nome}-${aluno.pontuacao}`}
                            className="
                                bg-white/10
                                backdrop-blur-md
                                border border-white/10
                                rounded-2xl
                                p-4 sm:p-5
                                text-white
                                shadow-lg
                                hover:scale-[1.02]
                                transition
                            "
                        >
                            <div className="text-xs sm:text-sm text-gray-400">
                                #{index + 1}
                            </div>

                            <h3 className="text-base sm:text-lg font-bold mt-1">
                                {aluno.nome}
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm">
                                Turma {aluno.turma}
                            </p>

                            <div className="mt-2 sm:mt-3 text-cyan-300 font-semibold text-sm sm:text-base">
                                Pontuação: {aluno.pontuacao ?? 0}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Dashboard;