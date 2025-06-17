import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
import LegacyTrialInfograph from '../components/LegacyTrialInfograph';
import PropheticVisionSwirl from '../components/PropheticVisionSwirl';
// import removed: CodexArcLineageViewer (missing component)

export default function LegacyEchoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <BranchHeader />

      <div className="text-center mt-16">
        <motion.h1
          className="text-4xl font-bold text-amber-400"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Legacy Echo Chamber
        </motion.h1>
        <motion.p
          className="text-md text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Relive ancient debates and sacred trials through dynamic visual storytelling.
        </motion.p>
      </div>

      <div className="px-6 py-12 space-y-16">
        <LegacyTrialInfograph />
        <PropheticVisionSwirl />
        {/* <CodexArcLineageViewer /> */}
      </div>

      <BranchFooter />
    </div>
  );
}
