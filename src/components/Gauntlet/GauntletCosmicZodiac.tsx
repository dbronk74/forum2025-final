import React from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { name: 'Aries', symbol: '♈︎' },
  { name: 'Taurus', symbol: '♉︎' },
  { name: 'Gemini', symbol: '♊︎' },
  { name: 'Cancer', symbol: '♋︎' },
  { name: 'Leo', symbol: '♌︎' },
  { name: 'Virgo', symbol: '♍︎' },
  { name: 'Libra', symbol: '♎︎' },
  { name: 'Scorpio', symbol: '♏︎' },
  { name: 'Sagittarius', symbol: '♐︎' },
  { name: 'Capricorn', symbol: '♑︎' },
  { name: 'Aquarius', symbol: '♒︎' },
  { name: 'Pisces', symbol: '♓︎' },
];

const radius = 120;
const center = 140;

const GauntletCosmicZodiac: React.FC = () => {
  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <div className="absolute inset-0 rounded-full border-2 border-indigo-500/40 blur-sm animate-pulse" />
      <svg width="280" height="280" className="absolute">
        {zodiacSigns.map((sign, i) => {
          const angle = (2 * Math.PI * i) / zodiacSigns.length;
          const x = center + radius * Math.cos(angle) - 12;
          const y = center + radius * Math.sin(angle) + 4;
          return (
            <motion.text
              key={sign.name}
              x={x}
              y={y}
              textAnchor="middle"
              fill="#a5b4fc"
              fontSize="24"
              fontFamily="serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {sign.symbol}
            </motion.text>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-indigo-300 text-xl font-semibold tracking-wide">
          Zodiac Wheel
        </div>
      </div>
    </div>
  );
};

export default GauntletCosmicZodiac;
