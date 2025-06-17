import React from 'react';
import { motion } from 'framer-motion';

export default function WorldSpeakArenaPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-slate-900 via-sky-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/arena/worldspeak-overlay.png"
          alt="WorldSpeak Language Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-extrabold text-center text-sky-300 drop-shadow mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌍 WorldSpeak Arena
        </motion.h2>

        <p className="text-lg text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Enter the global debate amphitheater. Across every culture, every language, the Forum invites all voices to harmonize or collide — with respect, reason, and resolve.
        </p>

        <div className="w-full h-64 rounded-lg bg-black/20 border border-white/10 flex items-center justify-center">
          <span className="text-gray-500 italic">🌀 Language thread map coming online...</span>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          AI will translate, map, and visualize speech in real-time from every active branch of The Forum.
        </div>
      </div>
    </div>
  );
}
