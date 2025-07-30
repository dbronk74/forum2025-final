// SanctumSigilResonanceMeter.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SanctumSigilResonanceMeter: React.FC = () => {
  const [resonance, setResonance] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setResonance((prev) =>
        prev >= 100 ? 30 : prev + Math.floor(Math.random() * 15)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="p-6 bg-purple-900 rounded-xl shadow-lg text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-center mb-4">Sigil Resonance Meter</h2>
      <div className="relative h-6 bg-purple-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-purple-400"
          animate={{ width: `${resonance}%` }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <p className="text-center mt-3 text-purple-200 text-sm">
        Current resonance: {resonance}%
      </p>
      <p className="text-xs text-center mt-1 text-purple-300">
        Measures alignment between the sigil state and harmonic intention.
      </p>
    </motion.div>
  );
};

export default SanctumSigilResonanceMeter;
