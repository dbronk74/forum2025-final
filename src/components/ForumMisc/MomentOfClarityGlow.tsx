// src/components/ForumMisc/MomentOfClarityGlow.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MomentOfClarityGlow() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowGlow(true);
      setTimeout(() => setShowGlow(false), 3000);
    }, 25000); // Every 25 seconds, simulate a moment of clarity

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <AnimatePresence>
        {showGlow && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute w-64 h-64 rounded-full bg-blue-400/30 blur-2xl shadow-2xl"
          />
        )}
      </AnimatePresence>
      <div className="text-white text-lg font-semibold z-10">
        Moment of Clarity
      </div>
    </div>
  );
}
