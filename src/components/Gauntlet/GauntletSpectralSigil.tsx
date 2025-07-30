// src/components/Gauntlet/GauntletSpectralSigil.tsx

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GauntletSpectralSigilProps {
  size?: number; // in pixels
  glowColor?: string;
  active?: boolean;
  label?: string;
}

const GauntletSpectralSigil: React.FC<GauntletSpectralSigilProps> = ({
  size = 140,
  glowColor = '#9b5de5',
  active = true,
  label = 'Spectral Sigil',
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={clsx(
          'relative rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center',
          active && 'animate-pulse-slow'
        )}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${glowColor}44, transparent 70%)`,
          boxShadow: `0 0 20px 6px ${glowColor}55`,
        }}
        initial={{ scale: 0.95, opacity: 0.6 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
      >
        <motion.div
          className="rounded-full w-3/4 h-3/4 border-2 border-white/40 flex items-center justify-center text-white text-3xl font-bold select-none"
          style={{
            background: `radial-gradient(circle, ${glowColor}88, #00000044)`,
            textShadow: `0 0 6px ${glowColor}`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 14,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          ✶
        </motion.div>
      </motion.div>
      <span className="mt-2 text-sm text-white/70">{label}</span>
    </div>
  );
};

export default GauntletSpectralSigil;
