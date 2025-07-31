// src/components/Gauntlet/DebateCompassWheel.tsx

import React from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const directions = ['Ethos', 'Pathos', 'Logos', 'Mythos'];

const DebateCompassWheel: React.FC = () => {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-sky-800 to-indigo-900 text-white p-6 rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-2xl mx-auto"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
    >
      <Compass className="w-10 h-10 text-cyan-300 mb-3" />
      <div className="text-lg font-semibold mb-2">Debate Compass</div>
      <div className="grid grid-cols-2 gap-4 text-xs text-center">
        {(directions ?? []).map((dir, idx) => (
          <div key={idx} className="text-cyan-200">
            {dir}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DebateCompassWheel;
