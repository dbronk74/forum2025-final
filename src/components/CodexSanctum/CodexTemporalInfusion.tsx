import React, { useEffect, useRef } from 'react';

const CodexTemporalInfusion: React.FC = () => {
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pulseRef.current) {
      pulseRef.current.animate(
        [
          { transform: 'scale(1)', opacity: 0.8 },
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 0.8 },
        ],
        {
          duration: 6000,
          iterations: Infinity,
        }
      );
    }
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      <div
        ref={pulseRef}
        className="absolute w-52 h-52 rounded-full border-4 border-cyan-500 bg-gradient-to-br from-cyan-900 via-cyan-700 to-black opacity-70 shadow-2xl blur-sm"
      ></div>

      <div className="relative z-10 text-cyan-300 font-mono tracking-wider text-xs">
        TEMPORAL INFUSION ACTIVE
      </div>

      <div className="absolute bottom-2 right-2 text-[10px] text-cyan-600 font-mono opacity-50">
        ⏳ Signal Drift Stabilized
      </div>
    </div>
  );
};

export default CodexTemporalInfusion;
