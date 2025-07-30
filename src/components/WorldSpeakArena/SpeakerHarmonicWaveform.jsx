import React, { useRef, useEffect } from 'react';

export default function SpeakerHarmonicWaveform({ color = '#8B5CF6', intensity = 0.8 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameId;
    let t = 0;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 70;

      ctx.beginPath();
      for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const variation = Math.sin(angle * 4 + t) * 6 * intensity;
        const r = radius + variation;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();

      t += 0.03;
      frameId = requestAnimationFrame(draw);
    };

    canvas.width = 160;
    canvas.height = 160;
    draw();

    return () => cancelAnimationFrame(frameId);
  }, [color, intensity]);

  return (
    <div className="fixed top-6 right-6 z-40">
      <canvas
        ref={canvasRef}
        className="rounded-full bg-black border border-violet-500 shadow-lg"
        width={160}
        height={160}
      />
    </div>
  );
}
