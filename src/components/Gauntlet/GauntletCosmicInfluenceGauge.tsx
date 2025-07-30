import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface GauntletCosmicInfluenceGaugeProps {
  value: number; // 0 to 100
  label?: string;
  factionColor?: string; // e.g. '#9f7aea'
}

const GauntletCosmicInfluenceGauge: React.FC<GauntletCosmicInfluenceGaugeProps> = ({
  value,
  label = 'Cosmic Influence',
  factionColor = '#7f5af0'
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  const animatedValue = useSpring(clamped, { damping: 20, stiffness: 150 });
  const strokeDasharray = 282.6; // 2 * PI * radius (r = 45)
  const strokeDashoffset = useTransform(animatedValue, (v) => strokeDasharray - (v / 100) * strokeDasharray);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <svg width="120" height="120" viewBox="0 0 120 120" className="mb-2">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="10"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={factionColor}
          strokeWidth="10"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: strokeDasharray }}
          animate={{ strokeDashoffset }}
        />
        <text
          x="60"
          y="65"
          textAnchor="middle"
          fill="#1a202c"
          fontSize="18"
          fontWeight="bold"
        >
          {Math.round(clamped)}%
        </text>
      </svg>
      <p className="text-sm text-gray-700">{label}</p>
    </div>
  );
};

export default GauntletCosmicInfluenceGauge;
