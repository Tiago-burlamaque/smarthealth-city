const numeroValido = (valor) => {
    return Number(valor) >= 0;
};

export const calcularPontuacao = ({
    nivel_sedentarismo,
    qualidade_sono,
    saude_postural,
    bem_estar_mental
}) => {

    let pontos = 0;

    const mapa = {
        Baixo: 1,
        Médio: 2,
        Alto: 3,
        Baixa: 1,
        Média: 2,
        Boa: 3
    };

    pontos += mapa[nivel_sedentarismo] || 0;
    pontos += mapa[qualidade_sono] || 0;
    pontos += mapa[saude_postural] || 0;
    pontos += mapa[bem_estar_mental] || 0;

    return pontos;
};

export const calcularSedentarismo = (
    atividade_fisica,
    horas_sentado
) => {

    if (!numeroValido(horas_sentado)) {
        return "Não informado";
    }

    if (atividade_fisica && horas_sentado < 4) {
        return "Baixo";
    }

    if (horas_sentado <= 8) {
        return "Médio";
    }

    return "Alto";
};

export const calcularQualidadeSono = (horas_sono) => {

    if (!numeroValido(horas_sono)) {
        return "Não informado";
    }

    if (horas_sono >= 8) {
        return "Boa";
    }

    if (horas_sono >= 6) {
        return "Média";
    }

    return "Baixa";
};

export const calcularSaudePostural = (horas_celular) => {

    if (!numeroValido(horas_celular)) {
        return "Não informado";
    }

    if (horas_celular < 3) {
        return "Boa";
    }

    if (horas_celular <= 6) {
        return "Média";
    }

    return "Baixa";
};

export const calcularBemEstarMental = (
    horas_sono,
    atividade_fisica,
    area_verde,
    celular_antes_dormir
) => {

    let pontuacao = 0;

    if (horas_sono >= 8) pontuacao += 1;
    if (atividade_fisica) pontuacao += 1;
    if (area_verde) pontuacao += 1;
    if (!celular_antes_dormir) pontuacao += 1;

    if (pontuacao >= 3) {
        return "Alto";
    }

    if (pontuacao >= 2) {
        return "Médio";
    }

    return "Baixo";
};