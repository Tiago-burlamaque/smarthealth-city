import { useState } from "react";
import { avaliacaoInicial } from "";

const [formData, setFormData] =
    useState(avaliacaoInicial);

export const avaliacaoInicial = {
    nome: "",
    turma: "",

    horas_celular: "",
    horas_sono: "",

    atividade_fisica: false,

    horas_sentado: "",

    area_verde: false,

    celular_antes_dormir: false
};