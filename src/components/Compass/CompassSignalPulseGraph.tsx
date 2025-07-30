import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip, Legend);

const CompassSignalPulseGraph: React.FC = () => {
  const data = {
    labels: ['Intro', 'Exchange', 'Crossfire', 'Rebuttal', 'Closing'],
    datasets: [
      {
        label: 'Pulse Strength',
        data: [30, 55, 80, 60, 75],
        fill: false,
        backgroundColor: 'rgba(99, 102, 241, 0.8)', // indigo-500
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#c7d2fe', // indigo-100
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#c7d2fe',
        },
      },
      x: {
        ticks: {
          color: '#c7d2fe',
        },
      },
    },
  };

  return (
    <div className="bg-indigo-950 p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-indigo-100 mb-4 text-center">Compass Signal Pulse</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default CompassSignalPulseGraph;
