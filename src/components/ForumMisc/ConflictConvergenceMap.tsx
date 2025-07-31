import React from 'react';
import { motion } from 'framer-motion';

interface ConflictConvergenceMapProps {
  leftSignal: number;  // 0–100 intensity from one side
  rightSignal: number; // 0–100 intensity from opposing side
}

const ConflictConvergenceMap: React.FC<ConflictConvergenceMapProps> = ({
  leftSignal,
  rightSignal,
}) => {
  const overlap = Math.min(leftSignal, rightSignal);
  const divergence = Math.abs(leftSignal - rightSignal);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-md shadow-inner border border-purple-800 overflow-hidden">
      {/* Left side signal */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-red-500/40"
        style={{ width: `${leftSignal}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${leftSignal}%` }}
        transition={{ duration: 0.6 }}
      />

      {/* Right side signal */}
      <motion.div
        className="absolute top-0 right-0 h-full bg-blue-500/40"
        style={{ width: `${rightSignal}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${rightSignal}%` }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlap zone */}
      {overlap > 0 && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full bg-purple-600/50 blur-sm"
          style={{ width: `${overlap}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      )}

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-medium tracking-wide z-10">
        {overlap > 20
          ? `Common Ground Forming (${(overlap ?? 0).toFixed(0)}%)`
          : divergence < 20
          ? `Near Convergence`
          : `Ideological Conflict`}
      </div>
    </div>
  );
};

export default ConflictConvergenceMap;
