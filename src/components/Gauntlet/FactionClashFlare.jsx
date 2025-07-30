import React, { useEffect, useRef } from 'react';

export default function FactionClashFlare() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = 50;

    const sparks = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 1 - 0.5,
      size: Math.random() * 2 + 1,
      hue: Math.random() * 360,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      sparks.forEach(spark => {
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${spark.hue}, 100%, 60%)`;
        ctx.fill();

        spark.x += spark.dx;
        spark.y += spark.dy;

        if (spark.x < 0 || spark.x > width) spark.dx *= -1;
        if (spark.y < 0 || spark.y > height) spark.dy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="w-full bg-black border-y border-amber-500">
      <canvas ref={canvasRef} className="w-full h-[50px]" />
    </div>
  );
}
