import React, { useEffect, useRef, useState } from 'react';

interface GauntletRelicRevivalProps {
  isActive: boolean;
  relicName: string;
}

const GauntletRelicRevival: React.FC<GauntletRelicRevivalProps> = ({ isActive, relicName }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fragments, setFragments] = useState<any[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = canvas.width = 300;
    const height = canvas.height = 300;
    const centerX = width / 2;
    const centerY = height / 2;

    const generateFragments = () => {
      const newFragments = [];
      for (let i = 0; i < 20; i++) {
        newFragments.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 3 + Math.random() * 3,
          angle: Math.atan2(centerY - height / 2, centerX - width / 2),
          speed: 0.5 + Math.random(),
        });
      }
      return newFragments;
    };

    let localFragments = generateFragments();
    setFragments(localFragments);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Animate fragments
      localFragments.forEach((frag, idx) => {
        const dx = centerX - frag.x;
        const dy = centerY - frag.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          frag.x += dx * 0.02 * frag.speed;
          frag.y += dy * 0.02 * frag.speed;
        }

        ctx.beginPath();
        ctx.arc(frag.x, frag.y, frag.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${0.6 - idx * 0.02})`;
        ctx.fill();
      });

      // Draw relic core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25 + Math.sin(Date.now() / 200) * 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(232, 121, 249, 0.4)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#c084fc';
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isActive]);

  return (
    <div className="relative w-72 h-72">
      <canvas ref={canvasRef} className="rounded-xl shadow-md" />
      <div className="absolute inset-x-0 bottom-2 text-center">
        <span className="text-purple-200 font-semibold tracking-wide text-sm">
          Relic Revived: {relicName}
        </span>
      </div>
    </div>
  );
};

export default GauntletRelicRevival;
