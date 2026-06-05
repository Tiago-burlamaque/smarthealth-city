import * as calculoSaude from "../services/calculoSaude.service.js";
import * as avaliacaoModel from "../models/avaliacaoModel.js";

export const createAvaliacao = async (req, res) => {
    try {
        const {
            horas_celular,
            horas_sono,
            atividade_fisica,
            horas_sentado,
            area_verde,
            celular_antes_dormir,
            aluno_id
        } = req.body;

        // validação mais segura (evita bloquear boolean false)
        if (
            horas_celular == null ||
            horas_sono == null ||
            horas_sentado == null ||
            area_verde == null ||
            celular_antes_dormir == null ||
            aluno_id == null
        ) {
            return res.status(400).json({
                message: "Preencha todos os campos."
            });
        }

        // cálculos de saúde
        const nivel_sedentarismo =
            calculoSaude.calcularSedentarismo(
                atividade_fisica,
                horas_sentado
            );

        const qualidade_sono =
            calculoSaude.calcularQualidadeSono(horas_sono);

        const saude_postural =
            calculoSaude.calcularSaudePostural(horas_celular);

        const bem_estar_mental =
            calculoSaude.calcularBemEstarMental(
                horas_sono,
                atividade_fisica,
                area_verde,
                celular_antes_dormir
            );

        const pontuacao = calculoSaude.calcularPontuacao({
            nivel_sedentarismo,
            qualidade_sono,
            saude_postural,
            bem_estar_mental
        });

        // persistência no banco
        const result = await avaliacaoModel.createAvaliacao({
            horas_celular,
            horas_sono,
            atividade_fisica,
            horas_sentado,
            area_verde,
            celular_antes_dormir,
            nivel_sedentarismo,
            qualidade_sono,
            saude_postural,
            bem_estar_mental,
            aluno_id,
            pontuacao
        });

        // resposta final
        return res.status(201).json({
            id: result.insertId,
            aluno_id,
            pontuacao,
            nivel_sedentarismo,
            qualidade_sono,
            saude_postural,
            bem_estar_mental
        });

    } catch (error) {
        console.error("Erro ao criar avaliação:", error);

        return res.status(500).json({
            message: "Erro interno no servidor."
        });
    }
};