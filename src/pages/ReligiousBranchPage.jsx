import React from 'react';
import { motion } from 'framer-motion';
import MythicFragmentChronicle from '../components/MythicFragmentChronicle';
import BeliefEvolutionMap from '../components/BeliefEvolutionMap';

export default function ReligiousBranchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-indigo-950 text-white px-8 py-10 relative">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-300 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Inner Temple
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Explore belief, mysticism, and personal revelation. Unified without dogma.
      </motion.p>

      <MythicFragmentChronicle />
      <BeliefEvolutionMap />
    </div>
  );
}
