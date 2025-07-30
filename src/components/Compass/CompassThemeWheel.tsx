import React, { useState } from 'react';
import { motion } from 'framer-motion';

const themes = [
  'Liberty',
  'Responsibility',
  'Justice',
  'Empathy',
  'Truth',
  'Balance',
  'Unity',
  'Wisdom',
];

const radius = 120;
const angleStep = (2 * Math.PI) / themes.length;

const CompassThemeWheel: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {themes.map((theme, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.button
            key={theme}
            className={`absolute w-24 h-10 rounded-md text-sm font-semibold text-white transition-all duration-300 ${
              selected === i
                ? 'bg-indigo-600 scale-110 z-20 shadow-xl'
                : 'bg-indigo-800 hover:bg-indigo-600 z-10'
            }`}
            style={{
              top: `calc(50% + ${y}px - 1.25rem)`,
              left: `calc(50% + ${x}px - 3rem)`,
            }}
            onClick={() => handleSelect(i)}
            whileTap={{ scale: 0.95 }}
          >
            {theme}
          </motion.button>
        );
      })}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-200 font-bold text-xl">
        {selected !== null ? themes[selected] : 'Select Theme'}
      </div>
    </div>
  );
};

export default CompassThemeWheel;
