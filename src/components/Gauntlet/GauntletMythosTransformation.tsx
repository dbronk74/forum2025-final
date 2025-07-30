import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const transformationLore = [
  "🔥 Rebirth through intellectual fire.",
  "🌿 A shift from rigidity to fluidity.",
  "🌕 Mythos cycle: ego dissolves, clarity dawns.",
  "🪶 From mortal voice to immortal verse.",
  "⚡ Catalyst of sacred contradiction unlocked."
];

const GauntletMythosTransformation: React.FC = () => {
  const [transformed, setTransformed] = useState(false);
  const [lore, setLore] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const isTransforming = Math.random() > 0.6;
      setTransformed(isTransforming);
      if (isTransforming) {
        const randomLore = transformationLore[Math.floor(Math.random() * transformationLore.length)];
        setLore(randomLore);
      } else {
        setLore("");
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-zinc-900 to-purple-950 p-5 rounded-xl text-white border border-purple-700 shadow-lg max-w-md w-full">
      <h3 className="text-lg font-semibold text-purple-300 mb-3">🧬 Mythos Transformation</h3>

      <AnimatePresence mode="wait">
        {transformed ? (
          <motion.div
            key="transformed"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 bg-purple-800 rounded-lg border border-amber-400 text-amber-200 shadow-inner"
          >
            <p className="text-sm italic">{lore}</p>
            <div className="mt-3 text-amber-300 text-xs text-right">🔓 Transformation in progress...</div>
          </motion.div>
        ) : (
          <motion.div
            key="dormant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-zinc-400 text-sm"
          >
            No active transformation. Awaiting resonance shift...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GauntletMythosTransformation;
