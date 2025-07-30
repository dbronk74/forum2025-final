import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const sampleLore: string[] = [
  '⚖️ Equilibrium is earned, not declared.',
  '🕊️ Discourse tempers division.',
  '🧭 Moral compasses require calibration.',
  '🌐 Unity forms where dissent is understood.',
  '🔮 Clarity blooms in slow deliberation.',
  '🧩 Truths align across fractured lenses.',
];

const scrollSpeed = 40; // pixels per second

const CouncilLoreRibbon: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset - 1);
    }, 1000 / scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-800 py-2 overflow-hidden rounded-md border border-indigo-700 shadow-md">
      <div className="absolute left-4 top-2 text-indigo-300 flex items-center gap-2 z-10">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-ping-slow" />
        <span className="text-sm uppercase tracking-wide font-semibold">Council Lore</span>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          className="whitespace-nowrap flex gap-12 text-indigo-200 font-mono text-sm pl-32"
          animate={{ x: offset }}
          transition={{ ease: 'linear', duration: 0 }}
          ref={containerRef}
        >
          {sampleLore.concat(sampleLore).map((phrase, idx) => (
            <span key={idx} className="px-4 opacity-90 hover:opacity-100 transition-opacity">
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CouncilLoreRibbon;
