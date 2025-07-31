import React from 'react';
import { motion } from 'framer-motion';

const directions = ['Logic', 'Emotion', 'Ethics', 'Pragmatism'];

const GauntletDebateCompass: React.FC = () => {
  return (
    <div className="relative w-72 h-72 mx-auto my-6">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-4 border-purple-600 shadow-[0_0_20px_rgba(128,90,213,0.5)] animate-pulse" />

      {/* Direction Labels */}
      {(directions ?? []).map((dir, i) => {
        const angle = (2 * Math.PI * i) / directions.length;
        const x = 128 + 100 * Math.cos(angle);
        const y = 128 + 100 * Math.sin(angle);
        return (
          <div
            key={dir}
            className="absolute text-sm text-purple-300 font-medium"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {dir}
          </div>
        );
      })}

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-purple-500 rounded-full shadow-lg animate-ping -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Rotating Indicator */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-1 h-24 bg-purple-400 origin-bottom translate-x-[-50%] translate-y-[-100%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center text-purple-200 font-semibold text-lg tracking-wider">
        Debate Compass
      </div>
    </div>
  );
};

export default GauntletDebateCompass;
