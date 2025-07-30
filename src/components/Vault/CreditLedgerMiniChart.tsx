import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const CreditLedgerMiniChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Credits',
        data: [120, 150, 180, 140, 200, 220, 210],
        fill: false,
        borderColor: '#10b981',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
        },
      },
      x: {
        ticks: {
          color: '#ffffff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className="p-4 bg-emerald-800 rounded-lg shadow-lg">
      <h3 className="text-white text-lg font-semibold mb-2">Weekly Credit Flow</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default CreditLedgerMiniChart;
