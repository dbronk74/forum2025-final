import React, { useEffect, useRef } from 'react';

export default function FactionPulseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 320;
    const height = canvas.height = 60;

    let pulses = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 30 + Math.random() * 30,
      speed: 1 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.5,
      hue: 260 + Math.random() * 60,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      pulses.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.strokeStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        p.x += p.speed;
        if (p.x > width + p.length) p.x = -p.length;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex justify-center items-center bg-black/80 py-2 rounded shadow-inner border border-purple-500">
      <canvas ref={canvasRef} className="w-[320px] h-[60px]" />
    </div>
  );
}
