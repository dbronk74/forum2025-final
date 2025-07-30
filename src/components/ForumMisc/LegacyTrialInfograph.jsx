// src/components/ForumMisc/LegacyTrialInfograph.jsx

import React, { useEffect, useRef } from 'react';

export default function LegacyTrialInfograph() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 320);
    const height = (canvas.height = 240);

    const rings = 6;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = 100;

    function drawInfograph() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < rings; i++) {
        const radius = (maxRadius / rings) * (i + 1);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${(i * 45) % 360}, 60%, 60%)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const segments = 8;
      for (let j = 0; j < segments; j++) {
        const angle = (Math.PI * 2 * j) / segments;
        const x = centerX + maxRadius * Math.cos(angle);
        const y = centerY + maxRadius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.fillStyle = '#fff';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Legacy Trial Infograph', centerX, height - 20);
    }

    drawInfograph();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-black/80 rounded shadow-inner border border-purple-700">
      <canvas ref={canvasRef} className="rounded" />
    </div>
  );
}
