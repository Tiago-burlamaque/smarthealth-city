import db from "../database/connection.js";

export const createAluno = async (req, res) => {
    try {

        const { nome, turma } = req.body;

        if (!nome?.trim() || !turma) {
            return res.status(400).json({
                message: "Preencha todos os campos."
            });
        }

        const [result] = await db.query(
            `
            INSERT INTO aluno (nome, turma)
            VALUES (?, ?)
            `,
            [nome.trim(), turma]
        );

        return res.status(201).json({
            message: "Aluno criado com sucesso.",
            id: result.insertId,
            nome: nome.trim(),
            turma
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Erro ao cadastrar aluno."
        });
    }
};