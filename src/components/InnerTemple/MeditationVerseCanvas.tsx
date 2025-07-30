// src/components/InnerTemple/MeditationVerseCanvas.tsx

import React, { useEffect, useRef } from 'react';

const MeditationVerseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const verses = [
      "Breathe in calm, breathe out stress.",
      "The mind is a river; let it flow.",
      "In stillness, find your center.",
      "Peace comes from within.",
      "The present moment is all we have."
    ];

    let index = 0;
    let opacity = 0;
    let fadeIn = true;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(200, 200, 255, ${opacity})`;
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(verses[index], width / 2, height / 2);

      if (fadeIn) {
        opacity += 0.01;
        if (opacity >= 1) fadeIn = false;
      } else {
        opacity -= 0.01;
        if (opacity <= 0) {
          fadeIn = true;
          index = (index + 1) % verses.length;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-48 rounded-lg shadow-inner bg-indigo-900"
      aria-label="Meditation Verse Canvas"
    />
  );
};

export default MeditationVerseCanvas;
