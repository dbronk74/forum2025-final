import React from 'react';
import { motion } from 'framer-motion';

export default function CodexSanctumPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/codex/codex-background-glow.jpg"
          alt="Codex Sanctum Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-8 py-20 max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center text-amber-300 mb-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📜 Codex Sanctum
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Your Codex Sanctum is the master ledger of your intellectual and rhetorical journey.
          Here, you’ll find echoes of your past trials, statements, arguments, and turning points.
        </motion.p>

        <div className="mt-14 w-full h-64 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center">
          <span className="text-gray-500 italic">📖 Codex ledger rendering coming soon...</span>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          Soon you’ll be able to browse, quote, revise, and cross-link all your major moments — from Gauntlet wins to Council votes.
        </div>
      </div>
    </div>
  );
}
