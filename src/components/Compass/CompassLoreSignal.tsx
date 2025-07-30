import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';

const CompassLoreSignal: React.FC = () => {
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(false);
      setTimeout(() => setShowPulse(true), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto my-6">
      <AnimatePresence>
        {showPulse && (
          <motion.div
            key="pulse"
            className="absolute inset-0 rounded-full border-4 border-indigo-400"
            initial={{ scale: 0.3, opacity: 0.7 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          className="rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 w-20 h-20 shadow-lg border-2 border-slate-200"
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex items-center justify-center h-full text-white">
            <Sparkle className="w-6 h-6 text-yellow-300 animate-pulse" />
          </div>
        </motion.div>
      </div>

      <div className="mt-3 text-center text-sm text-indigo-200">
        Lore Signal: Harmonizing Philosophies
      </div>
    </div>
  );
};

export default CompassLoreSignal;
