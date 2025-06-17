import React from 'react';
import { motion } from 'framer-motion';

export default function RoundTablePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/roundtable/roundtable-banner.png"
          alt="Round Table Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto backdrop-blur-md bg-white/5 rounded-lg shadow-lg border border-white/10">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-amber-200 drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛡️ The Round Table
        </motion.h2>

        <div className="text-center text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <p className="mb-4">
            Here, participants gather in shared dialogue — not to conquer, but to connect.
            Explore thoughtful conversations, join collaborative debates, and elevate your understanding together.
          </p>
          <p>
            Full Round Table tools (Council Circle, Thought Relays, Shared Scrolls) will be activated shortly.
            This is your place for group-driven insight.
          </p>
        </div>
      </div>
    </div>
  );
}
