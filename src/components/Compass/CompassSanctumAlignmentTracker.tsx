import React from 'react';
import { motion } from 'framer-motion';

interface CompassSanctumAlignmentTrackerProps {
  alignmentScore: number; // Range: -100 (chaotic/divergent) to +100 (harmonious/aligned)
  label?: string;
}

const CompassSanctumAlignmentTracker: React.FC<CompassSanctumAlignmentTrackerProps> = ({
  alignmentScore,
  label = 'Alignment Flow',
}) => {
  const clampedScore = Math.max(-100, Math.min(100, alignmentScore));
  const percentage = (clampedScore + 100) / 2; // Convert to 0–100%

  const alignmentColor =
    clampedScore > 50
      ? 'bg-green-500'
      : clampedScore < -50
      ? 'bg-red-500'
      : 'bg-yellow-400';

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="text-xs text-zinc-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="relative h-4 bg-zinc-800 rounded-full shadow-inner overflow-hidden">
        <motion.div
          className={`absolute h-full rounded-full ${alignmentColor}`}
          style={{ left: '50%' }}
          initial={false}
          animate={{ width: `${Math.abs(clampedScore)}%`, x: clampedScore > 0 ? 0 : -Math.abs(clampedScore) }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 flex justify-between text-[10px] text-zinc-500 px-2">
          <span>Chaotic</span>
          <span>Neutral</span>
          <span>Harmonious</span>
        </div>
      </div>
      <div className="mt-1 text-xs text-center text-zinc-400">
        Current Alignment: {clampedScore > 0 ? '+' : ''}
        {clampedScore}
      </div>
    </div>
  );
};

export default CompassSanctumAlignmentTracker;
