// src/components/Gauntlet/CrossExaminationLens.tsx

import React from 'react';
import { SearchCode } from 'lucide-react';
import { motion } from 'framer-motion';

const CrossExaminationLens: React.FC = () => {
  return (
    <motion.div
      className="relative bg-zinc-900 text-white p-6 rounded-xl shadow-lg border border-zinc-700 max-w-md mx-auto"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">Cross-Examination Lens</h3>
        <SearchCode className="w-6 h-6 text-amber-400" />
      </div>
      <div className="mt-3 text-sm space-y-1">
        <p>🔍 Parsing for contradictions...</p>
        <p>📌 Temporal alignment score: 91%</p>
        <p>🕵️‍♂️ Logical cross-branch trace active</p>
      </div>
    </motion.div>
  );
};

export default CrossExaminationLens;
