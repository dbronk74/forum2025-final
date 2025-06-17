import React from 'react';
import { motion } from 'framer-motion';

export default function SanctumPulsePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/codex/sanctum-sigil-glow.png"
          alt="Sanctum Sigil Glow"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 py-14 max-w-5xl mx-auto backdrop-blur-md bg-white/5 rounded-xl shadow-md border border-white/10">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-300 mb-6 drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🧭 Sanctum Pulse Monitor
        </motion.h2>

        <p className="text-center text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Track the sacred resonance of current debates across all Codex branches. This pulse reflects where attention, logic, and passion intersect — forming the living rhythm of The Forum.
        </p>

        <div className="w-full h-64 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center">
          <span className="text-gray-500">🔄 Pulse data loading soon...</span>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Real-time signals will be drawn from Codex overlays and Faction harmonics.
        </div>
      </div>
    </div>
  );
}
