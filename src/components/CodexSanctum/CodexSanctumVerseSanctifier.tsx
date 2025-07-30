import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const verses = [
  "✧ Let the echoes rise beyond reason.",
  "✧ In silence, we sanctify the unseen.",
  "✧ Threads of the eternal weave anew.",
  "✧ Sanctum sings where words dissolve.",
  "✧ Light kneels at the altar of truth.",
  "✧ Glyphs awaken the sacred tongue.",
  "✧ Breathe deep the boundless flame.",
  "✧ From memory, verse becomes vow.",
];

const CodexSanctumVerseSanctifier: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-black via-zinc-900 to-zinc-800 rounded-2xl border border-purple-800 p-6 shadow-xl w-full max-w-xl mx-auto h-64 overflow-hidden">
      <div className="absolute top-3 left-4 text-xs text-purple-400 tracking-widest font-semibold">
        VERSE SANCTIFIER
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center h-full text-center"
        >
          <div className="text-purple-200 text-lg font-serif tracking-wide px-4">
            {verses[index]}
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute bottom-4 right-4 w-10 h-10 bg-purple-700 rounded-full blur-xl opacity-40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default CodexSanctumVerseSanctifier;
