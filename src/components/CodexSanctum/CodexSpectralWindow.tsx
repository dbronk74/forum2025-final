import React, { useEffect, useRef } from 'react';

const spectralRings = [
  'border-purple-500',
  'border-indigo-500',
  'border-blue-500',
  'border-cyan-400',
];

const CodexSpectralWindow: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (ringRef.current) {
        ringRef.current.animate(
          [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' },
          ],
          {
            duration: 20000,
            iterations: Infinity,
          }
        );
      }
    };
    animate();
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-black via-zinc-900 to-zinc-800 shadow-xl border border-purple-700 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-purple-300 text-sm font-mono tracking-wider">
          SPECTRAL INTERFACE
        </span>
      </div>

      <div
        ref={ringRef}
        className="absolute inset-0 flex items-center justify-center z-0 animate-spin-slow"
      >
        {spectralRings.map((borderClass, idx) => (
          <div
            key={idx}
            className={`absolute rounded-full border-2 ${borderClass}`}
            style={{
              width: `${70 + idx * 20}px`,
              height: `${70 + idx * 20}px`,
              animation: `pulse-${idx} 8s infinite ease-in-out`,
              animationDelay: `${idx * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-2 right-2 text-[10px] text-purple-600 font-mono opacity-40">
        ⟁ Signal Trace Active
      </div>

      <style>{`
        @keyframes pulse-0 {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes pulse-1 {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.07); opacity: 0.9; }
        }
        @keyframes pulse-2 {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes pulse-3 {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.12); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default CodexSpectralWindow;
