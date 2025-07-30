import React, { useEffect, useRef } from 'react';

interface GauntletAudienceWaveOverlayProps {
  amplitude?: number;
  frequency?: number;
  speed?: number;
  color?: string;
  height?: number;
}

const GauntletAudienceWaveOverlay: React.FC<GauntletAudienceWaveOverlayProps> = ({
  amplitude = 20,
  frequency = 0.02,
  speed = 0.05,
  color = 'rgba(0, 200, 255, 0.4)',
  height = 150,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x <= width; x++) {
        const y =
          amplitude *
            Math.sin(frequency * (x + phaseRef.current)) +
          height / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      phaseRef.current += speed;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [amplitude, frequency, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={height}
      className="w-full h-auto absolute top-0 left-0 z-10 pointer-events-none"
    />
  );
};

export default GauntletAudienceWaveOverlay;
