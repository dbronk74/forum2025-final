import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
import CognitiveThreadWeaver from '../components/CognitiveThreadWeaver';
import IntrospectionTimeline from '../components/IntrospectionTimeline';
import ResonantInsightGrid from '../components/ResonantInsightGrid';

export default function IntrospectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white">
      <BranchHeader />

      <div className="text-center mt-16">
        <motion.h1
          className="text-4xl font-bold text-indigo-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          The Introspective Chamber
        </motion.h1>
        <motion.p
          className="text-md text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Explore the layers of your thoughts, the timelines of your growth, and discover insights within the grid of your inner landscape.
        </motion.p>
      </div>

      <div className="px-6 py-12 space-y-20">
        <CognitiveThreadWeaver />
        <IntrospectionTimeline />
        <ResonantInsightGrid />
      </div>

      <BranchFooter />
    </div>
  );
}
