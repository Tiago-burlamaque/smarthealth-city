import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

import { toast } from 'react-toastify'

function Questionario() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    turma: "",
    horas_celular: "",
    horas_sono: "",
    atividade_fisica: false,
    horas_sentado: "",
    area_verde: false,
    celular_antes_dormir: false
  });

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox"
        ? checked
        : value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const alunoResponse = await api.post(
        "/alunos",
        {
          nome: formData.nome,
          turma: formData.turma
        }
      );

      const aluno_id = alunoResponse.data.id;

      const avaliacaoResponse = await api.post(
        "/avaliacoes",
        {
          horas_celular:
            Number(formData.horas_celular),

          horas_sono:
            Number(formData.horas_sono),

          atividade_fisica:
            formData.atividade_fisica,

          horas_sentado:
            Number(formData.horas_sentado),

          area_verde:
            formData.area_verde,

          celular_antes_dormir:
            formData.celular_antes_dormir,

          aluno_id
        }
      );

      localStorage.setItem(
        "resultado",
        JSON.stringify(
          avaliacaoResponse.data
        )
      );

      navigate("/resultado");

    } catch (error) {

      console.error(error);

      toast.error(
        "Erro ao enviar avaliação."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div>
        <label className="block text-white mb-2">
          Nome
        </label>

        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="
                        w-full
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        p-4
                        text-white
                        outline-none
                    "
        />
      </div>

      <div>
        <label className="block text-white mb-2">
          Turma
        </label>

        <input
          type="text"
          name="turma"
          value={formData.turma}
          onChange={handleChange}
          className="
                        w-full
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        p-4
                        text-white
                    "
        />
      </div>

      <div>
        <label className="block text-white mb-2">
          Quantas horas usa celular por dia?
        </label>

        <input
          type="number"
          name="horas_celular"
          value={formData.horas_celular}
          onChange={handleChange}
          className="
                        w-full
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        p-4
                        text-white
                    "
        />
      </div>

      <div>
        <label className="block text-white mb-2">
          Quantas horas você dorme?
        </label>

        <input
          type="number"
          name="horas_sono"
          value={formData.horas_sono}
          onChange={handleChange}
          className="
                        w-full
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        p-4
                        text-white
                    "
        />
      </div>

      <div>
        <label className="block text-white mb-2">
          Quantas horas fica sentado por dia?
        </label>

        <input
          type="number"
          name="horas_sentado"
          value={formData.horas_sentado}
          onChange={handleChange}
          className="
                        w-full
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        p-4
                        text-white
                    "
        />
      </div>

      <div className="space-y-4">

        <label className="flex items-center gap-3 text-white">
          <input
            type="checkbox"
            name="atividade_fisica"
            checked={formData.atividade_fisica}
            onChange={handleChange}
          />

          Pratica atividade física?
        </label>

        <label className="flex items-center gap-3 text-white">
          <input
            type="checkbox"
            name="area_verde"
            checked={formData.area_verde}
            onChange={handleChange}
          />

          Possui área verde próxima à sua casa?
        </label>

        <label className="flex items-center gap-3 text-white">
          <input
            type="checkbox"
            name="celular_antes_dormir"
            checked={formData.celular_antes_dormir}
            onChange={handleChange}
          />

          Usa celular antes de dormir?
        </label>

      </div>

      <button
        type="submit"
        className="
                    w-full
                    py-4
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-600
                    text-white
                    font-semibold
                    transition
                    cursor-pointer
                "
      >
        Gerar Resultado
      </button>

    </form>
  );
}

export default Questionario;