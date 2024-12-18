// src/components/PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  title: string;
  data: any;
}

const PieChart: React.FC<PieChartProps> = ({ title, data }) => {
    return (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-center text-black">{title}</h3>
        <Pie data={data} />
      </div>
    );
  };
  
  export default PieChart; // Default export
