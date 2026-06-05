import * as avaliacaoModel from "../models/avaliacaoModel.js";

export const getRanking = async (req, res) => {

    try {

        const ranking =
            await avaliacaoModel.getRanking();

        return res.status(200).json(ranking);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Erro ao buscar ranking."
        });
    }
};