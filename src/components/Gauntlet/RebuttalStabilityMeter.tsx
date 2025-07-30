// src/components/Gauntlet/RebuttalStabilityMeter.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Gauge } from '@/components/ui/gauge';

interface RebuttalStabilityMeterProps {
  stabilityScore: number; // 0 to 100
}

const getGaugeColor = (score: number): string => {
  if (score > 75) return '#22c55e'; // green
  if (score > 50) return '#eab308'; // yellow
  if (score > 25) return '#f97316'; // orange
  return '#ef4444'; // red
};

const RebuttalStabilityMeter: React.FC<RebuttalStabilityMeterProps> = ({ stabilityScore }) => {
  const color = getGaugeColor(stabilityScore);

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h3 className="text-center text-white text-sm font-bold mb-2">Rebuttal Stability Meter</h3>
      <Gauge
        value={stabilityScore}
        min={0}
        max={100}
        color={color}
        label={`${stabilityScore.toFixed(0)}%`}
        strokeWidth={14}
      />
    </div>
  );
};

export default RebuttalStabilityMeter;
