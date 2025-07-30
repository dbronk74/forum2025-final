import React from 'react';
import { motion } from 'framer-motion';

interface MoralCoordinateProps {
  axisX: number; // -100 (chaos) to 100 (order)
  axisY: number; // -100 (self) to 100 (altruism)
  label?: string;
}

const CompassMoralCoordinate: React.FC<MoralCoordinateProps> = ({ axisX, axisY, label }) => {
  const x = Math.max(-100, Math.min(100, axisX));
  const y = Math.max(-100, Math.min(100, axisY));

  return (
    <div className="relative w-64 h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600 rounded-xl p-4 shadow-inner">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] h-[90%] border border-dashed border-zinc-500 rounded" />
      </div>

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-emerald-400 shadow-lg"
        initial={false}
        animate={{
          x: `${(x / 100) * 120}px`,
          y: `${(-y / 100) * 120}px`, // Inverted Y axis
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-8px',
          marginLeft: '-8px',
        }}
      />

      {label && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-zinc-300 opacity-75">
          {label}
        </div>
      )}

      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-indigo-400">Altruism</div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-pink-400">Self</div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xs text-yellow-400">Chaos</div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xs text-teal-300">Order</div>
    </div>
  );
};

export default CompassMoralCoordinate;
