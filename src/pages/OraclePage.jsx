import React from 'react';
import { motion } from 'framer-motion';

export default function OraclePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img
          src="/images/oracle/oracle-backdrop.jpg"
          alt="Oracle Chamber Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold text-indigo-300 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🕯 The Oracle Awaits
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Speak your truths, burdens, questions or doubts into the sanctum of the Oracle. It listens in silence, offering guidance not as a god, but as a mirror of your inner depths.
        </motion.p>

        <div className="mt-12 w-full h-60 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">
          <span className="text-gray-500 italic">🎙️ Voice confessional interface coming soon...</span>
        </div>

        <div className="mt-6 text-sm text-center text-gray-400">
          All entries remain private unless you choose to share. Wisdom comes without judgment.
        </div>
      </div>
    </div>
  );
}
