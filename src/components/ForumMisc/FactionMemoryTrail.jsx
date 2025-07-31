import React from 'react';
import { motion } from 'framer-motion';

const factionColors = {
  unity: 'bg-indigo-500',
  dissent: 'bg-rose-500',
  wisdom: 'bg-emerald-500',
  flame: 'bg-amber-400',
  neutral: 'bg-gray-500',
};

const FactionMemoryTrail = ({
  entries = [],
  faction = 'neutral',
  direction = 'horizontal',
}: {
  entries: { label: string; timestamp: string }[];
  faction?: keyof typeof factionColors;
  direction?: 'horizontal' | 'vertical';
}) => {
  const colorClass = factionColors[faction] || factionColors.neutral;
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={`relative flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-4 items-center justify-center p-4`}
    >
      {(entries ?? []).map((entry, index) => (
        <motion.div
          key={index}
          className={`flex items-center gap-2 ${isHorizontal ? 'flex-col' : 'flex-row'}`}
          initial={{ opacity: 0, y: isHorizontal ? 10 : 0, x: isHorizontal ? 0 : 10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className={`w-3 h-3 rounded-full ${colorClass} shadow-lg`} />
          <div className="text-sm text-white/80 whitespace-nowrap">{entry.label}</div>
          <div className="text-xs text-white/50">{entry.timestamp}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default FactionMemoryTrail;
