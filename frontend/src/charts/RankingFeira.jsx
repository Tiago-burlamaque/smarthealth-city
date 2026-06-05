function RankingFeira() {

  const ranking = [
    {
      nome: "João",
      turma: "301",
      pontuacao: 95
    },
    {
      nome: "Maria",
      turma: "302",
      pontuacao: 91
    },
    {
      nome: "Pedro",
      turma: "303",
      pontuacao: 87
    },
    {
      nome: "Ana",
      turma: "301",
      pontuacao: 85
    }
  ];

  return (
    <div>

      <h3 className="text-white text-xl font-semibold mb-6">
        Ranking da Feira
      </h3>

      <div className="overflow-x-auto">

        <table className="w-full text-white">

          <thead>
            <tr className="border-b border-white/20">
              <th className="p-3 text-left">Posição</th>
              <th className="p-3 text-left">Nome</th>
              <th className="p-3 text-left">Turma</th>
              <th className="p-3 text-left">Pontuação</th>
            </tr>
          </thead>

          <tbody>

            {
              ranking.map((aluno, index) => (
                <tr
                  key={index}
                  className="
                                        border-b
                                        border-white/10
                                        hover:bg-white/5
                                    "
                >
                  <td className="p-3">
                    #{index + 1}
                  </td>

                  <td className="p-3">
                    {aluno.nome}
                  </td>

                  <td className="p-3">
                    {aluno.turma}
                  </td>

                  <td className="p-3 font-bold text-cyan-300">
                    {aluno.pontuacao}
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RankingFeira;