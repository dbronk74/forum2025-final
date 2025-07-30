import React from 'react';
import { motion } from 'framer-motion';

interface CompassPathwayFlowProps {
  pathName: string;
  progress: number; // 0 to 100
  color?: string;
}

const CompassPathwayFlow: React.FC<CompassPathwayFlowProps> = ({
  pathName,
  progress,
  color = '#38bdf8', // Default: sky-400
}) => {
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="relative w-full max-w-xl mx-auto p-4">
      <div className="text-sm text-zinc-400 mb-2 uppercase tracking-wide">{pathName}</div>
      <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="absolute h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${normalizedProgress}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-0 h-full w-3 bg-white/80 rounded-full shadow"
          initial={false}
          animate={{ left: `${normalizedProgress}%` }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        />
      </div>
      <div className="text-right text-xs text-zinc-500 mt-1">{normalizedProgress}% Progress</div>
    </div>
  );
};

export default CompassPathwayFlow;
