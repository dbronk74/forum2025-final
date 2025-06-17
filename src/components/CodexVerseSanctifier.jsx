import React, { useEffect, useRef, useState } from 'react';

export default function CodexVerseSanctifier() {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    let particles = [];

    const createParticle = () => {
      const angle = Math.random() * 2 * Math.PI;
      const radius = 100 + Math.random() * 30;
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 100 + Math.random() * 100,
        size: 2 + Math.random() * 2,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(180, 240, 255, ${p.life / 200})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        if (p.life <= 0) particles[i] = createParticle();
      });

      requestAnimationFrame(draw);
    };

    particles = Array.from({ length: 80 }, createParticle);
    draw();
  }, [phase]);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-6">
      <canvas ref={canvasRef} className="rounded-lg shadow-lg" />
      <div className="absolute top-0 left-0 right-0 text-center text-sm text-indigo-300 font-semibold mt-2">
        Codex Verse Sanctifier
      </div>
    </div>
  );
}
