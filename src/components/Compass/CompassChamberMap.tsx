import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPinned } from 'lucide-react';

const quadrantLabels = ['North', 'East', 'South', 'West'];
const quadrantColors = ['from-cyan-500', 'from-amber-500', 'from-pink-500', 'from-indigo-500'];

const CompassChamberMap: React.FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto aspect-square bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-600 rounded-xl shadow-2xl p-4"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
        {quadrantLabels.map((label, index) => (
          <div
            key={label}
            className={`relative flex items-center justify-center bg-gradient-to-br ${quadrantColors[index]} to-black border border-slate-700 rounded-md`}
          >
            <span className="text-sm font-semibold text-white drop-shadow-md">{label}</span>
            <motion.div
              className="absolute bottom-1 right-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 300 }}
            >
              <MapPinned size={14} className="text-white/60" />
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: [0, 2, -2, 1, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      >
        <Compass size={72} className="text-white/30" />
      </motion.div>

      <div className="absolute top-2 left-4 text-xs text-slate-400 italic">Compass Chamber Map</div>
    </motion.div>
  );
};

export default CompassChamberMap;
