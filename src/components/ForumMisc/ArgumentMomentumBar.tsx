import React from 'react';
import { motion } from 'framer-motion';

interface ArgumentMomentumBarProps {
  leftScore: number;
  rightScore: number;
  leftLabel?: string;
  rightLabel?: string;
}

const ArgumentMomentumBar: React.FC<ArgumentMomentumBarProps> = ({
  leftScore,
  rightScore,
  leftLabel = 'Side A',
  rightLabel = 'Side B',
}) => {
  const total = leftScore + rightScore;
  const leftPercent = total === 0 ? 50 : (leftScore / total) * 100;
  const rightPercent = 100 - leftPercent;

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 p-2 rounded-lg shadow-md bg-gray-900 border border-purple-700 relative">
      <div className="flex justify-between text-xs text-purple-300 font-medium px-1 mb-1">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>

      <div className="relative w-full h-6 bg-gray-800 rounded overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${leftPercent}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${rightPercent}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <div className="absolute w-full h-full flex items-center justify-center z-10 text-white text-sm font-bold drop-shadow">
          {leftPercent.toFixed(1)}% / {rightPercent.toFixed(1)}%
        </div>
      </div>
    </div>
  );
};

export default ArgumentMomentumBar;
