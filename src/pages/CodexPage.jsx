import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
// import removed: CodexArcLineageViewer (missing component)
import CodexLoreDiffViewer from '../components/CodexLoreDiffViewer';
// import removed: CodexTemporalScroll (missing component)

export default function CodexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      <BranchHeader />

      <motion.h1
        className="text-4xl font-bold mt-12 mb-6 text-teal-300 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Codex Sanctum
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Explore lineage-based argument trails, identify lore changes across time, and navigate
        through temporal codex echoes.
      </motion.p>

      <div className="flex flex-col items-center space-y-8 mb-12">
        {/* <CodexArcLineageViewer /> */}
        <CodexLoreDiffViewer />
        {/* <CodexTemporalScroll /> */}
      </div>

      <BranchFooter />
    </div>
  );
}
