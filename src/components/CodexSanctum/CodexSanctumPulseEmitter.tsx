import React from 'react';
import { motion } from 'framer-motion';

const CodexSanctumPulseEmitter: React.FC = () => {
  const pulses = [0, 1, 2];

  return (
    <div className="relative bg-zinc-950 border border-purple-800 rounded-2xl p-6 shadow-xl text-white overflow-hidden">
      <h2 className="text-2xl font-bold text-purple-300 mb-2">Pulse Emitter</h2>
      <p className="text-sm text-purple-200 mb-6">
        Emits symbolic pulses from the Codex matrix into the aether stream.
      </p>

      <div className="relative w-64 h-64 mx-auto">
        {pulses.map((pulse, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-purple-500"
            initial={{ scale: 0.2, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: 'easeOut',
              delay: index * 0.5,
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-purple-500 shadow-md animate-pulse" />
        </div>
      </div>

      <p className="mt-6 text-xs text-center text-purple-400 italic">
        “Each ripple contains a ciphered signal—awaiting harmonic resonance.”
      </p>
    </div>
  );
};

export default CodexSanctumPulseEmitter;
