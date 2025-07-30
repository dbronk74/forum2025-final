import React, { useEffect, useRef } from 'react';

const sigils = ['✶', '⟁', '⟁', '𓂀', '⟁', '✶', '⟁', '⟁'];

const SanctumLoreSigilTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trailRef.current) {
      const trail = trailRef.current;
      let idx = 0;

      const interval = setInterval(() => {
        const span = document.createElement('span');
        span.textContent = sigils[idx % sigils.length];
        span.className = 'text-indigo-400 text-2xl opacity-80 animate-ping';
        trail.appendChild(span);

        setTimeout(() => {
          trail.removeChild(span);
        }, 2000);

        idx++;
      }, 300);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      ref={trailRef}
      className="flex items-center space-x-2 p-4 rounded-xl border border-indigo-700 bg-black shadow-lg h-20 overflow-x-auto"
    >
      {/* Sigils animate here */}
    </div>
  );
};

export default SanctumLoreSigilTrail;
