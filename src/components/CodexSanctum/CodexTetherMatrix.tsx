import React, { useEffect, useRef } from 'react';

const CodexTetherMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 300;
    let height = canvas.height = 300;
    const points = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      points.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#93c5fd'; // Tailwind blue-300
        ctx.fill();

        // draw tethers
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.strokeStyle = `rgba(147, 197, 253, ${1 - dist / 80})`; // soft glow
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto rounded-xl bg-zinc-900 border border-blue-400 shadow-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 left-2 text-[10px] text-blue-300 font-mono tracking-wide opacity-70">
        ⛓ Tether Matrix
      </div>
    </div>
  );
};

export default CodexTetherMatrix;
