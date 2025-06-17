import React from 'react';
import { motion } from 'framer-motion';
import GauntletSpectralSigil from '../components/GauntletSpectralSigil';
import SessionNotifier from '../components/SessionNotifier';

export default function GauntletPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 px-6 space-y-6">
      <motion.h1
        className="text-5xl font-extrabold text-center text-red-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Gauntlet
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Challenge opponents in structured argument. Enter the arena where precision meets persuasion.
      </motion.p>

      <GauntletSpectralSigil />
      <SessionNotifier />
    </div>
  );
}
