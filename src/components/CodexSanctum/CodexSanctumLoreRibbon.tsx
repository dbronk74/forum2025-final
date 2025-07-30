import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumLoreRibbon: React.FC = () => {
  const ribbonSegments = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-zinc-900 rounded-xl shadow-lg p-4 overflow-hidden border border-purple-700">
      <h2 className="text-xl text-white font-semibold mb-2">Lore Transmission Ribbon</h2>
      <p className="text-sm text-purple-200 italic mb-4">
        A flowing stream of insight symbolizing the movement of glyphic memory across the Codex.
      </p>

      <div className="relative h-32 w-full overflow-hidden">
        {ribbonSegments.map((seg, idx) => (
          <motion.div
            key={idx}
            className="absolute w-10 h-10 bg-purple-500 rounded-full shadow-md opacity-70"
            initial={{
              x: -100,
              y: Math.random() * 80,
              scale: 0.5,
              opacity: 0,
            }}
            animate={{
              x: '100vw',
              y: Math.random() * 80,
              scale: 1,
              opacity: 0.9,
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              delay: idx * 0.4,
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

export default CodexSanctumLoreRibbon;
