// src/components/Oracle/ConstellationTrailLayer.jsx

import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 75;
const MAX_DISTANCE = 100;

export default function ConstellationTrailLayer() {
  const canvasRef = useRef(null);

  // Initialize stars once with stable properties
  const starsRef = useRef(
    Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to fill the viewport
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    const stars = starsRef.current;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, i) => {
        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();

        // Draw lines between close stars
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(star.x - stars[j].x, star.y - stars[j].y);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / MAX_DISTANCE})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
