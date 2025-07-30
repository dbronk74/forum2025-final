import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ConversationalResonanceGraphProps {
  data: number[]; // Array of resonance values (0–100) over time
}

const ConversationalResonanceGraph: React.FC<ConversationalResonanceGraphProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((_, i) => `T+${i}`),
        datasets: [
          {
            label: 'Resonance Level',
            data: data,
            fill: true,
            tension: 0.4,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 700,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            min: 0,
            max: 100,
            display: false,
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full h-24 bg-gray-800 rounded-lg p-2 shadow-inner">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ConversationalResonanceGraph;
