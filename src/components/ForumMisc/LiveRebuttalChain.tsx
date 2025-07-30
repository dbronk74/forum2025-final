// src/components/ForumMisc/LiveRebuttalChain.tsx

import React, { useRef, useEffect } from 'react';

interface Rebuttal {
  x: number;
  y: number;
  dx: number;
  dy: number;
  text: string;
  opacity: number;
}

const rebuttalPhrases = [
  "Counterpoint",
  "However...",
  "But consider...",
  "Challenge noted",
  "Alternative view",
  "In contrast...",
  "From another angle",
  "Clarifying pushback"
];

export default function LiveRebuttalChain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rebuttals = useRef<Rebuttal[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 500);
    const height = (canvas.height = 160);

    function spawnRebuttal() {
      const text = rebuttalPhrases[Math.floor(Math.random() * rebuttalPhrases.length)];
      rebuttals.current.push({
        x: -100,
        y: 40 + Math.random() * 80,
        dx: 1 + Math.random() * 1.5,
        dy: 0,
        text,
        opacity: 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      rebuttals.current.forEach((r) => {
        r.x += r.dx;
        r.opacity -= 0.003;
        ctx.globalAlpha = r.opacity;
        ctx.fillStyle = '#facc15'; // amber-400
        ctx.font = '16px sans-serif';
        ctx.fillText(r.text, r.x, r.y);
      });

      rebuttals.current = rebuttals.current.filter((r) => r.opacity > 0);

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    const rebuttalInterval = setInterval(spawnRebuttal, 1200);
    animate();

    return () => {
      clearInterval(rebuttalInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-black/80 rounded shadow-inner border border-amber-500">
      <div className="text-amber-300 text-sm font-semibold mb-2">Live Rebuttal Chain</div>
      <canvas ref={canvasRef} className="rounded w-[500px] h-[160px]" />
    </div>
  );
}
