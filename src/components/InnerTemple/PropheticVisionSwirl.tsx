// src/components/InnerTemple/PropheticVisionSwirl.jsx

import React, { useEffect, useRef } from 'react';

const PropheticVisionSwirl = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(centerX, centerY) - 20;

      for (let i = 0; i < 30; i++) {
        const radius = (i / 30) * maxRadius;
        const swirlAngle = angle + i * 0.3;
        const x = centerX + radius * Math.cos(swirlAngle);
        const y = centerY + radius * Math.sin(swirlAngle);

        const alpha = 1 - i / 30;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 43, 226, ${alpha})`; // blueviolet
        ctx.fill();
      }

      angle += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 rounded-lg shadow-lg bg-black"
      aria-label="Prophetic Vision Swirl"
    />
  );
};

export default PropheticVisionSwirl;
