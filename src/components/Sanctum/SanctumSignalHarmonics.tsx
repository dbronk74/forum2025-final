import React, { useEffect, useRef } from 'react';

const SanctumSignalHarmonics: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    let frame = 0;
    const animate = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin((x + frame * 2 + i * 100) * 0.02) * (20 + i * 10);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = ['#7dd3fc', '#a5b4fc', '#f0abfc'][i];
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full h-40 bg-black border border-purple-700 rounded-xl overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default SanctumSignalHarmonics;
