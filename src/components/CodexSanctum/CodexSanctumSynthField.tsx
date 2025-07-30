import React, { useRef, useEffect } from 'react';

const CodexSanctumSynthField: React.FC = () => {
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

      const centerY = height / 2;
      const amplitude = 24;
      const frequency = 0.015;

      // Background gradient glow
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(93, 52, 168, 0.1)');
      gradient.addColorStop(1, 'rgba(176, 104, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Main waveform
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      for (let x = 0; x < width; x++) {
        const y =
          centerY +
          Math.sin(x * frequency + t) * amplitude +
          Math.cos((x + 200) * frequency * 1.3 + t * 0.6) * (amplitude * 0.5);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(204, 153, 255, 0.9)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
      ctx.shadowBlur = 6;
      ctx.stroke();

      t += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-40 bg-zinc-950 border border-purple-800 rounded-xl shadow-inner relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 left-4 text-xs text-purple-300 tracking-widest font-mono">
        SYNTHESIS FIELD
      </div>
    </div>
  );
};

export default CodexSanctumSynthField;
