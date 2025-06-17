import React, { useEffect, useRef } from 'react';

export default function FactionTemporalConflux() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 260;
    canvas.height = 260;

    let angle = 0;

    function drawCircle(x, y, radius, strokeStyle) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 1; i <= 3; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((angle * i) / 100);
        ctx.translate(-centerX, -centerY);

        drawCircle(centerX, centerY, 40 * i, `hsl(${(angle * i) % 360}, 80%, 70%)`);

        ctx.restore();
      }

      angle += 1;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <canvas ref={canvasRef} className="rounded-lg shadow-lg bg-black/80" />
      <div className="text-indigo-300 mt-2 text-sm font-semibold">Faction Temporal Conflux</div>
    </div>
  );
}
