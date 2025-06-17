import React, { useEffect, useRef } from 'react';

export default function ConstellationTrailLayer() {
  const canvasRef = useRef(null);
  const stars = Array.from({ length: 75 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.5 + 0.5,
    speedX: (Math.random() - 0.5) * 0.1,
    speedY: (Math.random() - 0.5) * 0.1,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star, i) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();

        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(star.x - stars[j].x, star.y - stars[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
