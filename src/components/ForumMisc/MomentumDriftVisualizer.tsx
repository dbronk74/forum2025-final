// src/components/ForumMisc/MomentumDriftVisualizer.tsx

import React, { useEffect, useRef } from 'react';

export default function MomentumDriftVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drift = useRef<number>(0); // -1 (Side A) to 1 (Side B)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 600);
    const height = (canvas.height = 100);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background line
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, height / 2 - 10, width, 20);

      // Drift position
      const centerX = width / 2;
      const maxDrift = width / 2 - 20;
      const driftX = centerX + drift.current * maxDrift;

      // Draw drift indicator
      ctx.beginPath();
      ctx.arc(driftX, height / 2, 12, 0, 2 * Math.PI);
      ctx.fillStyle = '#38bdf8'; // sky-400
      ctx.fill();

      // Draw text labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px sans-serif';
      ctx.fillText('Side A', 20, 20);
      ctx.fillText('Side B', width - 60, 20);
    };

    const updateDrift = () => {
      // Simulate random drift
      const change = (Math.random() - 0.5) * 0.05;
      drift.current = Math.max(-1, Math.min(1, drift.current + change));
      render();
      requestAnimationFrame(updateDrift);
    };

    updateDrift();
  }, []);

  return (
    <div className="bg-slate-800 border border-sky-500 rounded-md p-4 w-full max-w-2xl mx-auto shadow">
      <div className="text-sky-300 text-sm font-semibold mb-2 text-center">
        Momentum Drift Visualizer
      </div>
      <canvas ref={canvasRef} className="w-full h-[100px] rounded" />
    </div>
  );
}
