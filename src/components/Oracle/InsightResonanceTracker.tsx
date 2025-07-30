// src/components/InnerTemple/InsightResonanceTracker.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ResonancePoint {
  id: number;
  value: number; // 0 to 100
  timestamp: Date;
}

const InsightResonanceTracker: React.FC = () => {
  const [resonancePoints, setResonancePoints] = useState<ResonancePoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint: ResonancePoint = {
        id: Date.now(),
        value: Math.floor(Math.random() * 100),
        timestamp: new Date(),
      };
      setResonancePoints((prev) => [...prev.slice(-19), newPoint]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-zinc-900 p-4 rounded-lg shadow-lg text-white select-none">
      <h3 className="text-xl font-semibold mb-4 text-center">Insight Resonance Tracker</h3>
      <div className="flex space-x-2 overflow-x-auto">
        {resonancePoints.map(({ id, value }) => (
          <motion.div
            key={id}
            className="bg-purple-600 rounded-sm"
            style={{ height: `${value}%`, width: 10 }}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ duration: 0.5 }}
            title={`Resonance: ${value}%`}
          />
        ))}
      </div>
    </div>
  );
};

export default InsightResonanceTracker;
