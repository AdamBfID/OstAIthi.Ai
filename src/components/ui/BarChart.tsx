import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  title: string;
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({ title, data }) => {
  // Typed options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: title,
        
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: { color: "black", font: { size: 12 } },
        grid: { display: true }, // Optional: Removes grid lines for x-axis
      },
      y: {
        ticks: { color: "black", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.1)" }, // Light grid lines
      },
    },
  };

  return (
    <div className="bg-white-800 p-6 rounded border border-black text-black-200 shadow-md w-[750px] h-[470px] ">
  <Bar data={data} options={options} />
</div>

  );
};

export default BarChart;
