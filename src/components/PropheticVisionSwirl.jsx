import React, { useEffect, useRef } from 'react';

export default function PropheticVisionSwirl() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 80; i++) {
        const angle = (i * Math.PI * 2) / 80 + frame * 0.005;
        const radius = 80 + 30 * Math.sin(frame * 0.02 + i);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${(frame + i * 4) % 360}, 100%, 65%)`;
        ctx.fill();
      }

      frame++;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="fixed top-[30%] left-[40%] z-50 pointer-events-none">
      <canvas ref={canvasRef} className="rounded-full opacity-90 shadow-2xl" />
    </div>
  );
}
