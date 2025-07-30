import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wisdomNodes = [
  "⟁ The answer is not the end, but the threshold.",
  "⧫ Knowledge alone is not wisdom — synthesis is.",
  "☍ Perception filters eternity into moments.",
  "✶ The glyph listens when silence speaks first.",
  "☌ Truth spirals inward, never in a straight line.",
  "⟡ To know is to touch, but to understand is to dissolve.",
  "⚶ Only those who forget ego may hear the Nexus.",
  "✷ What the veil hides, the verse remembers.",
];

const CodexSanctumWisdomNexus: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wisdomNodes.length);
    }, 7000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-purple-700 shadow-lg rounded-2xl p-6 max-w-2xl mx-auto relative overflow-hidden h-52">
      <div className="absolute top-4 left-6 text-xs tracking-widest text-purple-500 font-mono">
        WISDOM NEXUS
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center h-full text-center px-4"
        >
          <p className="text-purple-200 text-lg font-serif tracking-wide">
            {wisdomNodes[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute bottom-4 left-4 w-10 h-10 bg-purple-800 rounded-full blur-lg opacity-30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default CodexSanctumWisdomNexus;
