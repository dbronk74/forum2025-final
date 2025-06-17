import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
import PropheticVisionSwirl from '../components/PropheticVisionSwirl';
import MythicFragmentChronicle from '../components/MythicFragmentChronicle';

export default function MythicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex flex-col items-center">
      <BranchHeader />

      <motion.h1
        className="text-4xl font-extrabold mt-12 mb-4 text-fuchsia-400 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Mythic Echoes & Fragments
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Enter the mythic dimension. Witness swirling prophecies and unlock fragments of ancient echoes left behind by the greatest voices.
      </motion.p>

      <div className="flex flex-col space-y-14 mb-20 w-full items-center px-4">
        <PropheticVisionSwirl />
        <MythicFragmentChronicle />
      </div>

      <BranchFooter />
    </div>
  );
}
