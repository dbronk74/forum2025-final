import React from 'react';
import { motion } from 'framer-motion';

const pulseCoordinates = [
  { x: 10, y: 20 },
  { x: 50, y: 60 },
  { x: 90, y: 30 },
  { x: 30, y: 80 },
  { x: 70, y: 50 },
  { x: 20, y: 40 },
  { x: 85, y: 75 },
  { x: 40, y: 25 },
];

const CodexSanctumPulseMap: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-tr from-zinc-900 to-purple-950 rounded-xl shadow-lg border border-purple-800 text-white">
      <h2 className="text-2xl font-bold text-purple-200 mb-2">Pulse Map</h2>
      <p className="text-sm text-purple-300 mb-6">
        Symbolic topology of active Codex pulses across the sanctum’s etheric grid.
      </p>

      <div className="relative w-full h-64 bg-zinc-950 rounded-lg overflow-hidden border border-purple-900">
        {pulseCoordinates.map((pulse, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-purple-400 shadow-lg"
            style={{
              top: `${pulse.y}%`,
              left: `${pulse.x}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              delay: index * 0.15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumPulseMap;
