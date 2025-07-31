// src/components/Gauntlet/RebuttalStabilityMeter.tsx

import React from 'react';
import { Gauge } from '@/components/ui/gauge';

interface RebuttalStabilityMeterProps {
  /** Stability score from 0 to 100. If omitted, defaults to 0. */
  stabilityScore?: number;
}

const getGaugeColor = (score: number): string => {
  if (score > 75) return '#22c55e';  // green
  if (score > 50) return '#eab308';  // yellow
  if (score > 25) return '#f97316';  // orange
  return '#ef4444';                  // red
};

const RebuttalStabilityMeter: React.FC<RebuttalStabilityMeterProps> = ({
  stabilityScore = 0,
}) => {
  // Ensure we never exceed 0–100
  const score = Math.min(Math.max(stabilityScore, 0), 100);
  const color = getGaugeColor(score);

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h3 className="text-center text-white text-sm font-bold mb-2">
        Rebuttal Stability Meter
      </h3>

      <Gauge
        value={score}
        min={0}
        max={100}
        color={color}
        label={`${(score ?? 0).toFixed(0)}%`}
        strokeWidth={14}
      />
    </div>
  );
};

export default RebuttalStabilityMeter;
