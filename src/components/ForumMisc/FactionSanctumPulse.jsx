import React, { useEffect, useRef } from 'react';

export default function FactionSanctumPulse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 180;
    canvas.width = size;
    canvas.height = size;

    let pulse = 0;
    let growing = true;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      // Outer aura pulse
      ctx.beginPath();
      ctx.arc(centerX, centerY, 60 + pulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 165, 0, ${1 - pulse / 40})`;
      ctx.lineWidth = 4;
      ctx.stroke();

      // Inner glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#ff9900';
      ctx.shadowBlur = 25;
      ctx.shadowColor = '#ffcc00';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update pulse
      if (growing) {
        pulse += 1;
        if (pulse > 30) growing = false;
      } else {
        pulse -= 1;
        if (pulse < 5) growing = true;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <canvas ref={canvasRef} />
    </div>
  );
}
