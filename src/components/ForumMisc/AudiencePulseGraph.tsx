import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip);

interface AudiencePulseGraphProps {
  pulseData: number[]; // Array of pulse intensity values (e.g., 0–100)
}

const AudiencePulseGraph: React.FC<AudiencePulseGraphProps> = ({ pulseData }) => {
  const data = {
    labels: (pulseData ?? []).map((_, i) => i.toString()),
    datasets: [
      {
        label: 'Pulse',
        data: pulseData,
        fill: false,
        borderColor: '#9333ea',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },
  };

  return (
    <div className="w-full h-24 bg-gray-900 rounded-lg border border-purple-800 p-2 shadow-inner">
      <Line data={data} options={options} />
    </div>
  );
};

export default AudiencePulseGraph;
