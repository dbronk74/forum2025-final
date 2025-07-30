import React, { useEffect, useRef } from 'react';

export default function SanctumChronoSigilCircle() {
  const canvasRef = useRef(null);
  let angle = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const drawCircle = () => {
      ctx.clearRect(0, 0, size, size);

      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate((angle * Math.PI) / 180);

      // Outer glowing ring
      ctx.beginPath();
      ctx.arc(0, 0, 90, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.5)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Inner glyph spokes
      for (let i = 0; i < 12; i++) {
        ctx.rotate((Math.PI * 2) / 12);
        ctx.beginPath();
        ctx.moveTo(0, 60);
        ctx.lineTo(0, 80);
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.restore();

      angle += 0.3;
      requestAnimationFrame(drawCircle);
    };

    drawCircle();
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
      <canvas ref={canvasRef} />
    </div>
  );
}
