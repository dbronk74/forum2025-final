// src/components/Gauntlet/GauntletTimerRing.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface GauntletTimerRingProps {
  progress: number; // 0 to 100
  duration?: number;
}

const GauntletTimerRing: React.FC<GauntletTimerRingProps> = ({
  progress,
  duration = 60,
}) => {
  const radius = 48;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="w-28 h-28 relative">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#22d3ee"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5 }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cyan-500">
        {Math.round((progress / 100) * duration)}s
      </div>
    </div>
  );
};

export default GauntletTimerRing;
