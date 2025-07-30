import React from 'react';
import { motion } from 'framer-motion';

interface GauntletFactionTrialAuraProps {
  factionName: string;
  auraColor?: string;
  intensity?: number; // 0 to 100
  size?: number;
}

const GauntletFactionTrialAura: React.FC<GauntletFactionTrialAuraProps> = ({
  factionName,
  auraColor = '#6B46C1', // default: violet
  intensity = 50,
  size = 120,
}) => {
  const pulseStrength = Math.min(1, Math.max(0.2, intensity / 100));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          width: size,
          height: size,
          borderColor: auraColor,
          boxShadow: `0 0 ${size / 4}px ${auraColor}`,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7 * pulseStrength, 1, 0.7 * pulseStrength],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.4 - pulseStrength * 1.2,
          ease: 'easeInOut',
        }}
      />
      <div
        className="relative z-10 text-white text-center font-semibold"
        style={{ fontSize: size * 0.15 }}
      >
        {factionName}
      </div>
    </div>
  );
};

export default GauntletFactionTrialAura;
