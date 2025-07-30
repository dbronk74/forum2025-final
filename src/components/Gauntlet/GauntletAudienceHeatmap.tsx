import React, { useEffect, useRef } from 'react';

interface HeatPoint {
  x: number;
  y: number;
  intensity: number;
}

interface GauntletAudienceHeatmapProps {
  points: HeatPoint[]; // incoming live audience data
  width?: number;
  height?: number;
  maxIntensity?: number;
  blur?: number;
}

const GauntletAudienceHeatmap: React.FC<GauntletAudienceHeatmapProps> = ({
  points,
  width = 600,
  height = 400,
  maxIntensity = 100,
  blur = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw each heat point
    points.forEach((point) => {
      const gradient = ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        blur
      );

      const alpha = Math.min(point.intensity / maxIntensity, 1);
      gradient.addColorStop(0, `rgba(255, 0, 0, ${alpha})`);
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(point.x - blur, point.y - blur, blur * 2, blur * 2);
    });
  }, [points, blur, maxIntensity]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="rounded-lg shadow-md"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default GauntletAudienceHeatmap;
