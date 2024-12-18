// src/components/ChartCard.tsx
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement);

interface ChartCardProps {
  title: string;
  data: any;  // Chart.js data object
}

const ChartCard: React.FC<{ title: string, data: any }> = ({ title, data }) => {
    return (
        <div className="bg-white p-12 py-20 rounded-lg  w-full h-[400px]">
        <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
        <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      
    );
  };
  

export default ChartCard;
