import React, { useEffect, useRef } from 'react';

export default function FactionThreadWeaver({ width = 280, height = 120 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const threads = Array.from({ length: 20 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
      color: `hsl(${(i * 30) % 360}, 70%, 60%)`,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      threads.forEach((t, i) => {
        t.x += t.dx;
        t.y += t.dy;

        if (t.x < 0 || t.x > width) t.dx *= -1;
        if (t.y < 0 || t.y > height) t.dy *= -1;

        ctx.beginPath();
        ctx.arc(t.x, t.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = t.color;
        ctx.fill();
      });

      for (let i = 0; i < threads.length; i++) {
        for (let j = i + 1; j < threads.length; j++) {
          const a = threads[i];
          const b = threads[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, [width, height]);

  return (
    <div className="rounded-lg overflow-hidden border border-indigo-600 shadow-md">
      <canvas ref={canvasRef} />
    </div>
  );
}
