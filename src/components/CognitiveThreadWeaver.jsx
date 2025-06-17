import React, { useRef, useEffect } from 'react';

export default function CognitiveThreadWeaver({ threadCount = 8 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const threads = [];

    for (let i = 0; i < threadCount; i++) {
      threads.push({
        angle: Math.random() * Math.PI * 2,
        radius: 60 + Math.random() * 40,
        speed: 0.005 + Math.random() * 0.005,
        color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`,
      });
    }

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      threads.forEach((t) => {
        const x = cx + Math.cos(t.angle) * t.radius;
        const y = cy + Math.sin(t.angle) * t.radius;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = t.color;
        ctx.fill();

        t.angle += t.speed;
      });

      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    canvas.width = 200;
    canvas.height = 200;
    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [threadCount]);

  return (
    <div className="fixed top-6 left-6 z-40 shadow-lg">
      <canvas
        ref={canvasRef}
        className="rounded-full border border-purple-400 bg-black"
        width={200}
        height={200}
      />
    </div>
  );
}
