// SanctumPulseEmitter.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SanctumPulseEmitter: React.FC = () => {
  return (
    <motion.div
      className="p-6 rounded-lg bg-indigo-900 text-indigo-100 shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl font-semibold text-center mb-4">Pulse Emitter</h2>
      <p className="text-sm text-center mb-4">
        Emits pulses of Sanctum energy—each pulse is a reflection of inner alignment, focus, and harmonic resonance.
      </p>
      <div className="flex justify-center">
        <motion.div
          className="w-16 h-16 bg-indigo-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SanctumPulseEmitter;
