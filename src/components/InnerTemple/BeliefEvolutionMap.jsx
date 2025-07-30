import React, { useEffect, useRef } from 'react';

export default function BeliefEvolutionMap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    const branches = [];

    for (let i = 0; i < 7; i++) {
      branches.push({
        x: 300,
        y: 380,
        length: 40 + Math.random() * 60,
        angle: -Math.PI / 2 + (Math.random() - 0.5) * 0.4,
        width: 4,
        depth: 0,
        color: `hsl(${180 + Math.random() * 100}, 70%, 65%)`,
      });
    }

    function drawBranch(x, y, length, angle, width, depth, color) {
      if (depth > 5) return;

      const x2 = x + Math.cos(angle) * length;
      const y2 = y + Math.sin(angle) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();

      const newWidth = width * 0.7;
      const newLength = length * 0.8;
      const newColor = `hsl(${180 + depth * 20}, 70%, 70%)`;

      drawBranch(x2, y2, newLength, angle - 0.3, newWidth, depth + 1, newColor);
      drawBranch(x2, y2, newLength, angle + 0.3, newWidth, depth + 1, newColor);
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      branches.forEach((b) => {
        drawBranch(b.x, b.y, b.length, b.angle, b.width, b.depth, b.color);
      });
    }

    render();
  }, []);

  return (
    <div className="fixed top-24 right-6 z-30 bg-black/70 p-2 rounded-lg border border-indigo-400 shadow-xl">
      <h2 className="text-indigo-300 text-sm font-semibold mb-1 text-center">Belief Evolution</h2>
      <canvas ref={canvasRef} className="rounded border border-indigo-500" />
    </div>
  );
}
