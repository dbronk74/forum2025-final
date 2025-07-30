import React, { useEffect, useRef } from 'react';

const symbols = ['✶', '✦', '✧', '☼', '☀', '☽', '☾', '☥', '⚚'];

export default function VerseSigilEmitter({ intensity = 1 }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;

    function spawnParticle() {
      const size = 16 + Math.random() * 24;
      particles.current.push({
        x: Math.random() * w,
        y: h + size,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size,
        opacity: 1,
        speed: 0.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 1.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let p of particles.current) {
        p.y -= p.speed;
        p.x += p.drift;
        p.opacity -= 0.005;

        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px serif`;
        ctx.fillStyle = 'white';
        ctx.fillText(p.symbol, p.x, p.y);
      }

      particles.current = particles.current.filter(p => p.opacity > 0);
      for (let i = 0; i < intensity; i++) spawnParticle();
      requestAnimationFrame(animate);
    }

    animate();
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
}
