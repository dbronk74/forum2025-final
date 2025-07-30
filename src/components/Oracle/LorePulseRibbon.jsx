import React, { useRef, useEffect } from 'react';

export default function LorePulseRibbon() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = 40);

    let offset = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(0.5, '#a855f7');
      gradient.addColorStop(1, '#6366f1');

      ctx.fillStyle = gradient;

      for (let i = 0; i < width; i += 50) {
        const wave = Math.sin((i + offset) * 0.01) * 8;
        ctx.beginPath();
        ctx.arc(i, height / 2 + wave, 3, 0, 2 * Math.PI);
        ctx.fill();
      }

      offset += 2;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="w-full bg-black/80 border-y border-indigo-700 shadow-inner">
      <canvas ref={canvasRef} className="w-full h-[40px]" />
    </div>
  );
}
