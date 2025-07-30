import React, { useRef, useEffect } from 'react';

export default function VerseRelayRing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;

    let angle = 0;
    const lines = 32;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < lines; i++) {
        const theta = (i / lines) * 2 * Math.PI + angle;
        const x = centerX + Math.cos(theta) * 80;
        const y = centerY + Math.sin(theta) * 80;

        ctx.strokeStyle = `hsl(${(angle * 40 + i * 12) % 360}, 70%, 60%)`;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      angle += 0.01;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-center space-y-1">
      <canvas ref={canvasRef} className="rounded-full shadow-md border border-indigo-300" />
      <span className="text-xs text-indigo-100 font-mono">Verse Relay</span>
    </div>
  );
}
