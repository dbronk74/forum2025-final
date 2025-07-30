import React, { useEffect, useRef } from 'react';

interface EmotionGradientTrailProps {
  emotionSequence: number[]; // Array of 0–100 values over time
  width?: number;
  height?: number;
}

const EmotionGradientTrail: React.FC<EmotionGradientTrailProps> = ({
  emotionSequence,
  width = 400,
  height = 20
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getColor = (value: number) => {
    if (value > 80) return '#f43f5e'; // rose-500
    if (value > 60) return '#fb923c'; // orange-400
    if (value > 40) return '#facc15'; // yellow-400
    if (value > 20) return '#34d399'; // emerald-400
    return '#60a5fa'; // blue-400
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const segmentWidth = width / emotionSequence.length;

    for (let i = 0; i < emotionSequence.length; i++) {
      const color = getColor(emotionSequence[i]);
      ctx.fillStyle = color;
      ctx.fillRect(i * segmentWidth, 0, segmentWidth, height);
    }
  }, [emotionSequence, width, height]);

  return (
    <div className="overflow-hidden rounded-full shadow-sm ring-1 ring-white/10">
      <canvas ref={canvasRef} width={width} height={height} className="block" />
    </div>
  );
};

export default EmotionGradientTrail;
