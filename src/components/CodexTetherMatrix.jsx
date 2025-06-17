import React, { useEffect, useRef } from 'react';

export default function CodexTetherMatrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 340;
    canvas.height = 220;

    const nodes = [
      { x: 60, y: 40 },
      { x: 140, y: 60 },
      { x: 240, y: 40 },
      { x: 90, y: 160 },
      { x: 200, y: 140 },
      { x: 280, y: 180 },
    ];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
            nodes[i].x,
            nodes[i].y,
            nodes[j].x,
            nodes[j].y
          );
          gradient.addColorStop(0, '#38bdf8');
          gradient.addColorStop(1, '#818cf8');
          ctx.strokeStyle = gradient;

          const cx = (nodes[i].x + nodes[j].x) / 2;
          const cy = (nodes[i].y + nodes[j].y) / 2 - 40;

          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.quadraticCurveTo(cx, cy, nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // Draw nodes
      nodes.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#facc15';
        ctx.fill();
        ctx.strokeStyle = '#1e40af';
        ctx.stroke();
      });
    }

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <canvas ref={canvasRef} className="rounded-lg bg-black/80 shadow-lg" />
      <div className="text-indigo-300 mt-2 text-sm font-semibold">Codex Tether Matrix</div>
    </div>
  );
}
