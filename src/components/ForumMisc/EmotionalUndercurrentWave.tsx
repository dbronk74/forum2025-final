import React, { useEffect, useRef } from 'react';

interface EmotionalUndercurrentWaveProps {
  emotionLevel: number; // Range: 0 to 100
  color?: string; // Optional override (e.g., "#ff6384")
}

const EmotionalUndercurrentWave: React.FC<EmotionalUndercurrentWaveProps> = ({
  emotionLevel,
  color = '#f472b6' // Default to pink-400
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const offset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();

      const waveHeight = (emotionLevel / 100) * 20 + 5;
      const frequency = 0.02;
      const speed = 0.1 + emotionLevel / 200;

      ctx.moveTo(0, height / 2);
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * frequency + offset.current!) * waveHeight;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      offset.current! += speed;
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, [emotionLevel, color]);

  return (
    <div className="w-full h-24 overflow-hidden relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default EmotionalUndercurrentWave;
