import React from 'react';
import { motion } from 'framer-motion';

interface CollaborationMeterProps {
  value: number; // 0 (no collaboration) to 100 (perfect collaboration)
}

const getColor = (value: number) => {
  if (value > 75) return 'text-green-400';
  if (value > 40) return 'text-yellow-400';
  return 'text-red-400';
};

const CollaborationMeter: React.FC<CollaborationMeterProps> = ({ value }) => {
  const strokeDashoffset = 282 - (282 * value) / 100;

  return (
    <div className="w-40 h-40 relative flex items-center justify-center">
      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#2d2d2d"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#22d3ee"
          strokeWidth="10"
          strokeDasharray="282"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDashoffset: 282 }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.8 }}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className={`text-2xl font-semibold ${getColor(value)}`}>
          {(value ?? 0).toFixed(0)}%
        </div>
      </div>
      <div className="absolute bottom-[-1.5rem] w-full text-center text-sm text-gray-300 tracking-wide">
        Collaboration Level
      </div>
    </div>
  );
};

export default CollaborationMeter;
