export function calcularSemaforo(resultado) {

    let pontuacao = 0;

    const valores = [
        resultado.nivel_sedentarismo,
        resultado.qualidade_sono,
        resultado.saude_postural,
        resultado.bem_estar_mental
    ];

    valores.forEach(valor => {

        if (
            valor === "Boa" ||
            valor === "Baixo" ||
            valor === "Alto"
        ) {
            pontuacao += 2;
        }

        else if (
            valor === "Média" ||
            valor === "Médio"
        ) {
            pontuacao += 1;
        }

    });

    if (pontuacao >= 7) {
        return {
            cor: "verde",
            mensagem: "Saúde excelente"
        };
    }

    if (pontuacao >= 4) {
        return {
            cor: "amarelo",
            mensagem: "Atenção aos hábitos"
        };
    }

    return {
        cor: "vermelho",
        mensagem: "Hábitos precisam melhorar"
    };
}