import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DisagreementRadarProps {
  sectors: string[];     // e.g., ["Ethics", "Economics", "Identity", "Power"]
  values: number[];      // range 0–100 disagreement intensity for each sector
}

const DisagreementRadar: React.FC<DisagreementRadarProps> = ({ sectors, values }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: sectors,
        datasets: [
          {
            label: 'Disagreement Intensity',
            data: values,
            backgroundColor: 'rgba(239, 68, 68, 0.2)', // red-500 low opacity
            borderColor: '#ef4444',
            borderWidth: 2,
            pointBackgroundColor: '#ef4444',
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: { color: '#444' },
            grid: { color: '#333' },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: {
              color: '#ccc',
              font: { size: 12 },
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 700,
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [sectors, values]);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 rounded-lg shadow-md p-4">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DisagreementRadar;
