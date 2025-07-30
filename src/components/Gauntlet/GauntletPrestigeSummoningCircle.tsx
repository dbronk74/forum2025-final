import React, { useEffect, useRef } from 'react';

interface GauntletPrestigeSummoningCircleProps {
  trigger: boolean;
  level: number;
}

const GauntletPrestigeSummoningCircle: React.FC<GauntletPrestigeSummoningCircleProps> = ({ trigger, level }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const size = canvas.width;
    const center = size / 2;
    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Outer circle
      ctx.beginPath();
      ctx.arc(center, center, 100, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(168, 85, 247, 0.6)`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Rotating runes (just symbols here)
      for (let i = 0; i < 12; i++) {
        const angle = ((tick / 100) + (i * 30)) * (Math.PI / 180);
        const x = center + 75 * Math.cos(angle);
        const y = center + 75 * Math.sin(angle);
        ctx.fillStyle = '#e9d5ff';
        ctx.font = '16px serif';
        ctx.fillText('*', x, y);
      }

      // Pulsing inner glow
      ctx.beginPath();
      ctx.arc(center, center, 30 + 5 * Math.sin(tick / 10), 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(192,132,252,0.15)';
      ctx.fill();

      tick += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger]);

  return (
    <div className="relative w-64 h-64 mx-auto">
      <canvas
        ref={canvasRef}
        width={256}
        height={256}
        className="absolute inset-0 rounded-full opacity-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-purple-300 text-xl font-bold animate-pulse">
          Ascended Lv. {level}
        </span>
      </div>
    </div>
  );
};

export default GauntletPrestigeSummoningCircle;
