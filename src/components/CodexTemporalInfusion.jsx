import React, { useEffect, useRef } from 'react';

export default function CodexTemporalInfusion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = 60;

    const lines = Array.from({ length: 80 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(173,216,230,${line.opacity})`;
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, height);
        ctx.stroke();

        line.x += line.speed;
        if (line.x > width) line.x = 0;
      });
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 py-1 px-0 border-y border-indigo-500 shadow-inner z-10">
      <canvas ref={canvasRef} className="w-full h-[60px]" />
    </div>
  );
}
