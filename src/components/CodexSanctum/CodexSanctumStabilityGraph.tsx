import React, { useEffect, useRef } from 'react';

const CodexSanctumStabilityGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      const amplitude = 20;
      const frequency = 0.05;

      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * frequency + t) * amplitude +
          Math.cos((x + 200) * frequency * 0.6 + t * 0.8) * amplitude * 0.5;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(179, 130, 255, 0.85)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.1)';
      ctx.shadowBlur = 8;
      ctx.stroke();

      t += 0.05;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="w-full h-40 bg-gradient-to-br from-zinc-900 to-purple-900 rounded-lg border border-purple-800 shadow-inner relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 left-4 text-xs text-purple-300 tracking-wider">
        Stability Oscillation Index
      </div>
    </div>
  );
};

export default CodexSanctumStabilityGraph;
