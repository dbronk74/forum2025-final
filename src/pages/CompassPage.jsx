import React from 'react';
import { motion } from 'framer-motion';

export default function CompassPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-950 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/compass/compass-overlay.png"
          alt="Philosophical Compass Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-8 py-20 max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center text-cyan-300 mb-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🧭 The Compass
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Track the evolution of your beliefs over time. The Compass reflects where you stand —
          ideologically, morally, and philosophically — based on your interactions across The Forum.
        </motion.p>

        <div className="mt-14 w-full h-64 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center">
          <span className="text-gray-500 italic">🕰️ Belief evolution visualization coming soon...</span>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          This system allows you to witness personal growth, contradictions, and ideological nuance — not to trap you, but to help you reflect.
        </div>
      </div>
    </div>
  );
}
