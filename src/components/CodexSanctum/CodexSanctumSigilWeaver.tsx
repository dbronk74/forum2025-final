import React, { useEffect, useRef } from 'react';

const glyphs = ['✦', '⟁', '⧫', '✶', '⟁', '⧫', '✷', '✧'];

const CodexSanctumSigilWeaver: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const points = glyphs.map((_, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.strokeStyle = 'rgba(200, 180, 255, 0.2)';
      ctx.lineWidth = 1;

      // Draw glyph connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw glyphs
      ctx.fillStyle = '#d1b3ff';
      ctx.font = '20px serif';
      glyphs.forEach((glyph, i) => {
        const p = points[i];
        ctx.fillText(glyph, p.x, p.y);
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="w-full h-64 bg-zinc-900 border border-purple-700 rounded-xl shadow-inner overflow-hidden relative">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-2 right-4 text-xs text-purple-400 italic">Sigil threads active</div>
    </div>
  );
};

export default CodexSanctumSigilWeaver;
