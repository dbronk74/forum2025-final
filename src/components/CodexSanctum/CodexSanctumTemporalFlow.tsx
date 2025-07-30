import React, { useEffect, useRef } from 'react';

const CodexSanctumTemporalFlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let t = 0;
    let animationId: number;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#1a0328');
      gradient.addColorStop(1, '#220044');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw temporal lines
      for (let i = 0; i < 6; i++) {
        const y = height / 2 + i * 8 - 24;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const offset =
            Math.sin((x + t * 40 + i * 100) * 0.01) * (2 + i * 0.3);
          ctx.lineTo(x, y + offset);
        }
        ctx.strokeStyle = `rgba(173, 129, 255, ${0.15 + i * 0.1})`;
        ctx.lineWidth = 1.2 + i * 0.4;
        ctx.stroke();
      }

      // Draw data pulses
      for (let i = 0; i < 12; i++) {
        const pulseX = (t * 120 + i * 200) % width;
        const pulseY = height / 2 + Math.sin(i + t) * 30;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 4 + Math.sin(t * 2 + i) * 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 220, 255, 0.8)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e7baff';
        ctx.fill();
      }

      t += 0.012;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-48 rounded-xl border border-purple-800 bg-zinc-950 overflow-hidden shadow-inner">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 left-4 text-xs text-purple-300 font-mono tracking-widest">
        TEMPORAL FLOW CHANNEL
      </div>
    </div>
  );
};

export default CodexSanctumTemporalFlow;
