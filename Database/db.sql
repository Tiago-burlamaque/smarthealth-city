CREATE SCHEMA IF NOT EXISTS smartHealth_city;

USE smartHealth_city;

CREATE TABLE aluno (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    turma INT NOT NULL
);

CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,

    horas_celular INT,
    horas_sono INT,
    atividade_fisica BOOLEAN,
    horas_sentado INT,
    area_verde BOOLEAN,
    celular_antes_dormir BOOLEAN,

    nivel_sedentarismo VARCHAR(50),
    qualidade_sono VARCHAR(50),
    saude_postural VARCHAR(50),
    bem_estar_mental VARCHAR(50),

    aluno_id INT NOT NULL,

    pontuacao INT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);