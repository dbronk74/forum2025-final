import React, { useEffect, useRef } from 'react';

interface Vector {
  x: number;
  y: number;
  magnitude: number;
  angle: number; // in radians
}

const generateVectors = (count: number): Vector[] => {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * 2 * Math.PI;
    const magnitude = Math.random() * 50 + 10;
    return {
      x: Math.random() * 300,
      y: Math.random() * 300,
      magnitude,
      angle,
    };
  });
};

const drawVectors = (ctx: CanvasRenderingContext2D, vectors: Vector[]) => {
  ctx.clearRect(0, 0, 300, 300);

  vectors.forEach((v) => {
    const endX = v.x + Math.cos(v.angle) * v.magnitude;
    const endY = v.y + Math.sin(v.angle) * v.magnitude;

    ctx.beginPath();
    ctx.moveTo(v.x, v.y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgba(99, 102, 241, 0.7)`; // indigo-500
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - 5 * Math.cos(v.angle - 0.3), endY - 5 * Math.sin(v.angle - 0.3));
    ctx.lineTo(endX - 5 * Math.cos(v.angle + 0.3), endY - 5 * Math.sin(v.angle + 0.3));
    ctx.closePath();
    ctx.fillStyle = `rgba(99, 102, 241, 0.8)`;
    ctx.fill();
  });
};

const CompassVectorMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vectors = generateVectors(12);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawVectors(ctx, vectors);
  }, [vectors]);

  return (
    <div className="bg-indigo-950 rounded-xl p-4 max-w-md mx-auto shadow-md border border-indigo-800">
      <h2 className="text-indigo-100 text-lg font-semibold mb-2 text-center">Vector Influence Map</h2>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="rounded bg-indigo-800 border border-indigo-700"
      />
      <p className="text-xs text-indigo-300 mt-2 text-center">Represents directional force in decision debates</p>
    </div>
  );
};

export default CompassVectorMap;
