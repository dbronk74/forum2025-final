import React, { useRef, useEffect } from 'react';

export default function LorePulseSynchroChamber() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 240;

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 10; i++) {
        const radius = 10 + i * 10 + Math.sin(t + i) * 5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `hsl(${(t * 10 + i * 30) % 360}, 80%, 60%)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      t += 0.03;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-6">
      <canvas ref={canvasRef} className="rounded-xl shadow-lg bg-black/80 border border-indigo-600" />
      <div className="mt-2 text-sm text-indigo-300 font-mono">Lore Synchro Chamber</div>
    </div>
  );
}
