import React, { useEffect, useRef, useState } from 'react';

export default function CodexVerseSanctifier() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase] = useState('idle');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 300;
    const height = canvas.height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 100;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
    };

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 100 + Math.random() * 100,
        size: 2 + Math.random() * 2,
      };
    };

    let particles: Particle[] = Array.from({ length: 80 }, createParticle);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 240, 255, ${p.life / 200})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        if (p.life <= 0) {
          particles[i] = createParticle();
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-6">
      <canvas ref={canvasRef} className="rounded-lg shadow-lg" />
      <div className="absolute top-0 left-0 right-0 text-center text-indigo-300 text-sm font-semibold mt-2">
        Codex Verse Sanctifier
      </div>
    </div>
  );
}
