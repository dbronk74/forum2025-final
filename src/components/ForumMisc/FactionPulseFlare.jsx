import React, { useEffect, useRef } from 'react';

export default function FactionPulseFlare({ color = 'indigo' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.min(width, height) / 2
      );

      gradient.addColorStop(0, `rgba(99, 102, 241, ${0.4 + 0.2 * Math.sin(frame * 0.05)})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      frame++;
      requestAnimationFrame(draw);
    };

    draw();
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
