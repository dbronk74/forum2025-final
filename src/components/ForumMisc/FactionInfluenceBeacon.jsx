import React, { useEffect, useRef } from 'react';

const factionColors = {
  unity: '#6366f1',    // Indigo
  dissent: '#f43f5e',  // Rose
  wisdom: '#10b981',   // Emerald
  flame: '#f59e0b',    // Amber
  neutral: '#6b7280',  // Gray
};

const FactionInfluenceBeacon = ({ faction = 'neutral', intensity = 1.0, size = 120 }) => {
  const canvasRef = useRef(null);
  const color = factionColors[faction] || factionColors['neutral'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let pulse = 0;

    const render = () => {
      if (!ctx) return;
      canvas.width = size;
      canvas.height = size;

      ctx.clearRect(0, 0, size, size);
      const center = size / 2;
      const maxRadius = (size / 2) * intensity;

      // Draw fading pulse ring
      for (let i = 0; i < 3; i++) {
        const radius = (pulse + i * 20) % maxRadius;
        const alpha = 1 - radius / maxRadius;

        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      pulse += 1.5;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [color, size, intensity]);

  return (
    <div className="relative flex items-center justify-center">
      <canvas ref={canvasRef} style={{ width: size, height: size }} />
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.2,
          height: size * 0.2,
          backgroundColor: color,
          boxShadow: `0 0 10px 4px ${color}`,
        }}
      />
    </div>
  );
};

export default FactionInfluenceBeacon;
