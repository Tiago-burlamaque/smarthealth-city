CREATE SCHEMA IF NOT EXISTS smartHealth_city;

USE smartHealth_city;

CREATE TABLE avaliacoes(
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

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);