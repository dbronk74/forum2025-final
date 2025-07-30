import React from 'react';
import { motion } from 'framer-motion';

interface CodexLoreGlyphOrbProps {
  label?: string;
  size?: number;
  glowColor?: string;
  float?: boolean;
}

const CodexLoreGlyphOrb: React.FC<CodexLoreGlyphOrbProps> = ({
  label = '',
  size = 64,
  glowColor = 'rgba(147, 51, 234, 0.7)', // default: purple glow
  float = true,
}) => {
  const dimension = `${size}px`;

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: dimension, height: dimension }}
      animate={
        float
          ? {
              y: [0, -6, 0],
              boxShadow: [
                `0 0 8px ${glowColor}`,
                `0 0 16px ${glowColor}`,
                `0 0 8px ${glowColor}`,
              ],
            }
          : false
      }
      transition={float ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      {/* Glow aura */}
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          backgroundColor: glowColor,
          width: dimension,
          height: dimension,
          opacity: 0.4,
        }}
      />

      {/* Orb core */}
      <div
        className="z-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 shadow-md flex items-center justify-center"
        style={{ width: dimension, height: dimension }}
      >
        <span className="text-white text-sm font-semibold drop-shadow">{label}</span>
      </div>
    </motion.div>
  );
};

export default CodexLoreGlyphOrb;
