import React from 'react';
import { motion } from 'framer-motion';

export default function SpectralPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/codex/spectral-vortex.jpg"
          alt="Spectral Vortex Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 backdrop-blur-md bg-white/5 rounded-xl shadow-md border border-white/10">
        <motion.h2
          className="text-4xl font-bold text-center text-violet-400 drop-shadow mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔮 Spectral Harmonic Field
        </motion.h2>

        <p className="text-lg text-center text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Every word spoken carries a frequency. Within this chamber, the Forum analyzes tonal resonance, emotional arcs, and harmonic dissonance — offering clarity beyond content alone.
        </p>

        <div className="w-full h-64 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center">
          <span className="text-gray-500">🔄 Spectral scanning module loading soon...</span>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          This space will activate live echo tracking, sentiment waveforms, and resonance pulses.
        </div>
      </div>
    </div>
  );
}
