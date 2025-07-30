import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/RoundTable/BranchHeader';
import BranchFooter from '../components/RoundTable/BranchFooter';

// Codex Components
import CodexLoreDiffViewer from '../components/CodexSanctum/CodexLoreDiffViewer';
import CodexHeatstreamViewer from '../components/CodexSanctum/CodexHeatstreamViewer';
import CodexTemporalInfusion from '../components/CodexSanctum/CodexTemporalInfusion';
import CodexTetherMatrix from '../components/CodexSanctum/CodexTetherMatrix';
import CodexLorePulseTracer from '../components/CodexSanctum/CodexLorePulseTracer';
import CodexSanctumLoreRibbon from '../components/CodexSanctum/CodexSanctumLoreRibbon';
import VersePulseEmitter from '../components/CodexSanctum/VersePulseEmitter';
import LorePulseRibbon from '../components/CodexSanctum/LorePulseRibbon';

export default function CodexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center overflow-x-hidden">
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
        className="text-gray-400 max-w-2xl text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Explore archived debate lore, logic timelines, and historical infusions of insight.
      </motion.p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16">
        <CodexHeatstreamViewer />
        <CodexTemporalInfusion />
        <CodexTetherMatrix />
        <CodexLorePulseTracer />
        <CodexSanctumLoreRibbon />
        <CodexLoreDiffViewer />
        <LorePulseRibbon />
        <VersePulseEmitter />
      </div>

      <BranchFooter />
    </div>
  );
}
