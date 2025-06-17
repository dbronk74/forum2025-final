import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
import LegacyTrialInfograph from '../components/LegacyTrialInfograph';
// import removed: DebateInfluenceCascade (missing component)
// import removed: CodexArcLineageViewer (missing component)

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center">
      <BranchHeader />

      <motion.h1
        className="text-4xl font-bold mt-12 mb-4 text-yellow-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Legacy & Influence
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Trace the lineage of codified arguments, observe influence paths, and visualize legacy trials that shaped The Forum.
      </motion.p>

      <div className="flex flex-col items-center space-y-12 mb-16 w-full px-4">
        <LegacyTrialInfograph />
        {/* <DebateInfluenceCascade /> */}
        {/* <CodexArcLineageViewer /> */}
      </div>

      <BranchFooter />
    </div>
  );
}
