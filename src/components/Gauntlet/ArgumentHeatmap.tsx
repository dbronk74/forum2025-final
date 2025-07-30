// src/components/ForumMisc/ArgumentHeatmap.tsx

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type ArgumentHeatmapProps = {
  data: number[]; // Heat intensity for each participant or segment
  labels?: string[]; // Optional labels like usernames or timestamps
  title?: string;
};

export default function ArgumentHeatmap({
  data,
  labels = [],
  title = 'Argument Intensity Heatmap',
}: ArgumentHeatmapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels.length ? labels : data.map((_, i) => `Turn ${i + 1}`),
          datasets: [
            {
              label: 'Heat Level',
              data,
              backgroundColor: data.map((value) =>
                `rgba(${Math.min(255, value * 25)}, ${50}, ${50}, 0.8)`
              ),
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: title,
              color: '#ffffff',
              font: {
                size: 18,
              },
            },
          },
          scales: {
            x: {
              ticks: { color: '#ccc' },
              grid: { color: 'rgba(255,255,255,0.05)' },
            },
            y: {
              beginAtZero: true,
              ticks: { color: '#ccc' },
              grid: { color: 'rgba(255,255,255,0.05)' },
            },
          },
        },
      });
    }
  }, [data, labels, title]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-6">
      <div className="bg-zinc-900 border border-red-500/30 rounded-lg shadow-lg p-4">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
