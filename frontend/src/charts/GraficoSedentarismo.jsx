import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function GraficoSedentarismo() {

  const data = {
    labels: [
      "Baixo",
      "Médio",
      "Alto"
    ],
    datasets: [
      {
        data: [25, 40, 35],
        backgroundColor: [
          "#22c55e",
          "#eab308",
          "#ef4444"
        ]
      }
    ]
  };

  return (
    <div>
      <h3 className="text-white text-xl font-semibold mb-4">
        Nível de Sedentarismo
      </h3>

      <Pie data={data} />
    </div>
  );
}

export default GraficoSedentarismo;