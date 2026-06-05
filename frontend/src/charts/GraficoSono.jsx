import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function GraficoSono() {

  const data = {
    labels: [
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h+"
    ],
    datasets: [
      {
        label: "Participantes",
        data: [3, 8, 12, 20, 30, 10],
        backgroundColor: "#06b6d4"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#fff"
        }
      },
      y: {
        ticks: {
          color: "#fff"
        }
      }
    }
  };

  return (
    <div>
      <h3 className="text-white text-xl font-semibold mb-4">
        Horas de Sono
      </h3>

      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

export default GraficoSono;