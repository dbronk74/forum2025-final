import React, { useEffect, useRef } from 'react';

export default function SanctumPulseSynchronizer() {
  const canvasRef = useRef(null);
  let pulse = 0;
  let direction = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 160;
    canvas.height = 160;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const maxRadius = 60;
      const currentRadius = maxRadius * (0.5 + pulse * 0.5);

      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, currentRadius);
      gradient.addColorStop(0, 'rgba(80, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(80, 100, 255, 0.1)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    function animate() {
      pulse += 0.02 * direction;
      if (pulse > 1 || pulse < 0) direction *= -1;
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 bg-black/80 border border-cyan-400 p-3 rounded-full shadow-lg">
      <canvas ref={canvasRef} />
      <div className="text-cyan-300 text-xs text-center mt-1 font-mono">Sanctum Pulse</div>
    </div>
  );
}
