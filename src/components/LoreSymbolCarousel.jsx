import React, { useRef, useEffect } from 'react';

const symbols = ['✶', '☽', '⟁', '⚖', '✦', '⚚', '☥', '✵'];

export default function LoreSymbolCarousel() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 260;
    canvas.height = 260;

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 90;

      symbols.forEach((symbol, i) => {
        const theta = angle + (i * (2 * Math.PI)) / symbols.length;
        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(theta + Math.PI / 2);
        ctx.fillStyle = '#facc15';
        ctx.font = '24px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(symbol, 0, 0);
        ctx.restore();
      });

      angle += 0.01;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <canvas ref={canvasRef} className="rounded-full shadow-lg bg-black/80 border border-yellow-500" />
      <div className="text-yellow-300 mt-2 text-sm font-semibold tracking-wide">Lore Symbol Carousel</div>
    </div>
  );
}
