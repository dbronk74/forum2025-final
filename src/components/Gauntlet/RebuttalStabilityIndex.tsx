// src/components/Gauntlet/RebuttalStabilityIndex.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface RebuttalStabilityIndexProps {
  value: number; // 0 to 100
}

const getColor = (value: number): string => {
  if (value > 75) return 'bg-green-500';
  if (value > 50) return 'bg-yellow-400';
  if (value > 25) return 'bg-orange-400';
  return 'bg-red-500';
};

const RebuttalStabilityIndex: React.FC<RebuttalStabilityIndexProps> = ({ value }) => {
  const colorClass = getColor(value);

  return (
    <div className="w-full p-4 bg-gray-900 rounded-lg shadow-inner border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300 font-semibold">Rebuttal Stability</span>
        <span className="text-sm text-white font-mono">{(value ?? 0).toFixed(0)}%</span>
      </div>
      <Progress value={value} className="h-3 bg-gray-800">
        <div
          className={`h-full ${colorClass} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </Progress>
    </div>
  );
};

export default RebuttalStabilityIndex;
