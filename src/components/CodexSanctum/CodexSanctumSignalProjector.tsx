import React, { useEffect, useRef } from 'react';

const CodexSanctumSignalProjector: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    let radius = 0;
    let pulseOpacity = 0.5;
    let growing = true;

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Central glyph
      ctx.fillStyle = '#e0d2ff';
      ctx.font = '30px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✶', centerX, centerY);

      // Pulsing ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(200, 180, 255, ${pulseOpacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Animate radius and opacity
      if (growing) {
        radius += 1.5;
        pulseOpacity -= 0.007;
        if (pulseOpacity <= 0) {
          growing = false;
        }
      } else {
        radius = 0;
        pulseOpacity = 0.5;
        growing = true;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-purple-900 via-zinc-800 to-zinc-900 rounded-xl border border-purple-700 shadow-lg relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 left-4 text-sm text-purple-300 tracking-wide font-mono">
        SIGNAL PROJECTOR ENGAGED
      </div>
    </div>
  );
};

export default CodexSanctumSignalProjector;
