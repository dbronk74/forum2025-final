import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Insight {
  level: number; // 0 to 100
  label: string;
  description: string;
}

const mockInsight: Insight = {
  level: 76,
  label: 'Strategic Clarity',
  description: 'Council alignment suggests focused reasoning and minimal ideological drift.',
};

const getMeterColor = (level: number): string => {
  if (level > 75) return 'bg-green-500';
  if (level > 45) return 'bg-yellow-400';
  return 'bg-red-500';
};

const CouncilInsightMeter: React.FC = () => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedLevel(mockInsight.level);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900 p-5 rounded-xl shadow-lg border border-indigo-700">
      <h2 className="text-lg text-indigo-300 font-semibold mb-3 text-center">Council Insight Meter</h2>
      <p className="text-sm text-slate-300 text-center mb-4 italic">{mockInsight.label}</p>
      <div className="w-full h-6 bg-slate-700 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className={`h-full ${getMeterColor(mockInsight.level)} rounded-full`}
        />
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold">
          {animatedLevel}%
        </span>
      </div>
      <p className="text-xs text-slate-400 text-center mt-3">{mockInsight.description}</p>
    </div>
  );
};

export default CouncilInsightMeter;
