// src/components/InnerTemple/TempleSilenceMeter.tsx

import React, { useEffect, useState } from 'react';

interface TempleSilenceMeterProps {
  initialLevel?: number; // 0 to 100
}

const TempleSilenceMeter: React.FC<TempleSilenceMeterProps> = ({ initialLevel = 50 }) => {
  const [silenceLevel, setSilenceLevel] = useState(initialLevel);

  useEffect(() => {
    const interval = setInterval(() => {
      setSilenceLevel((prev) => {
        let next = prev + (Math.random() * 10 - 5);
        if (next < 0) next = 0;
        if (next > 100) next = 100;
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xs mx-auto bg-zinc-900 rounded-lg p-6 shadow-lg text-white select-none text-center">
      <h3 className="text-lg font-semibold mb-4">Temple Silence Meter</h3>
      <div className="relative h-6 w-full bg-gray-700 rounded-full overflow-hidden mb-2">
        <div
          className="h-6 bg-indigo-500 transition-all duration-700"
          style={{ width: `${silenceLevel}%` }}
        />
      </div>
      <p className="text-sm text-indigo-300">
        Silence Level: {(silenceLevel ?? 0).toFixed(0)}%
      </p>
    </div>
  );
};

export default TempleSilenceMeter;
