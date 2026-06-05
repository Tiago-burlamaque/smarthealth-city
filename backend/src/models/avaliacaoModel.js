import db from "../database/connection.js";

export const createAvaliacao = async ({
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
}) => {

    const [result] = await db.query(
        `
        INSERT INTO avaliacoes (
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
)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
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
        ]
    );

    return result;
};

export const findById = async (id) => {

    const [rows] = await db.query(
        `
        SELECT *
        FROM avaliacoes
        WHERE id = ?
        `,
        [id]
    );

    return rows[0] || null;
};

export const findAll = async () => {

    const [rows] = await db.query(
        `
        SELECT *
        FROM avaliacoes
        ORDER BY created_at DESC
        `
    );

    return rows;
};

export const getRanking = async () => {

    const [rows] = await db.query(
        `
        SELECT
            a.nome,
            a.turma,
            av.pontuacao,
            av.nivel_sedentarismo,
            av.qualidade_sono,
            av.saude_postural,
            av.bem_estar_mental

        FROM avaliacoes av

        INNER JOIN aluno a
            ON a.id = av.aluno_id

        ORDER BY av.pontuacao DESC
        `
    );

    return rows;
};

export const getSedentarismoStats = async () => {

    const [rows] = await db.query(
        `
        SELECT
            nivel_sedentarismo,
            COUNT(*) AS total

        FROM avaliacoes

        GROUP BY nivel_sedentarismo
        `
    );

    return rows;
};

export const getSonoStats = async () => {

    const [rows] = await db.query(
        `
        SELECT
            horas_sono,
            COUNT(*) AS total

        FROM avaliacoes

        GROUP BY horas_sono

        ORDER BY horas_sono
        `
    );

    return rows;
};

