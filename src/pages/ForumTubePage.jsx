import React from 'react';
import { motion } from 'framer-motion';
import HUDWheelOverlay from '../components/HUDWheelOverlay';
import VerseRelayRing from '../components/VerseRelayRing';

export default function ForumTubePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-8 py-10">
      <motion.h1
        className="text-5xl font-bold text-center text-purple-300 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ForumTube
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Experience ritualized logic, ambient verse, and collaborative resonance.
      </motion.p>

      <HUDWheelOverlay />
      <VerseRelayRing />
    </div>
  );
}
