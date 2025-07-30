// src/components/Gauntlet/AssertionStrengthMeter.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';

interface AssertionStrengthMeterProps {
  strength: number; // 0 to 100
}

export default function AssertionStrengthMeter({ strength }: AssertionStrengthMeterProps) {
  const level = Math.min(Math.max(strength, 0), 100);
  const barColor =
    level > 80 ? 'bg-green-500' :
    level > 50 ? 'bg-yellow-400' :
    level > 20 ? 'bg-orange-400' :
    'bg-red-500';

  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-gray-200 uppercase">Assertion Strength</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-4 bg-gray-800 rounded shadow-inner">
        <motion.div
          className={`h-full rounded ${barColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <FiZap className="text-purple-400 animate-pulse" />
      </div>
    </div>
  );
}
