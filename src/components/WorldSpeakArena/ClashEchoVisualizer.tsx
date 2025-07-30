// WorldSpeakArena/ClashEchoVisualizer.tsx

import React, { useRef, useEffect } from 'react';

const ClashEchoVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    let ripples: { x: number; y: number; radius: number; opacity: number }[] = [];

    const addRipple = () => {
      ripples.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0,
        opacity: 1,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ripples.forEach((ripple, index) => {
        ripple.radius += 1.5;
        ripple.opacity -= 0.01;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 99, 132, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (ripple.opacity <= 0) ripples.splice(index, 1);
      });

      requestAnimationFrame(draw);
    };

    const interval = setInterval(addRipple, 500);
    draw();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black rounded-lg p-2 shadow-md">
      <h3 className="text-pink-400 text-md mb-1">Clash Echo Visualizer</h3>
      <canvas ref={canvasRef} width={400} height={200} className="w-full h-auto rounded-md" />
    </div>
  );
};

export default ClashEchoVisualizer;
