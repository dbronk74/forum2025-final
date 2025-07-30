// src/components/Gauntlet/CredibilityBeacon.tsx

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CredibilityBeacon: React.FC = () => {
  return (
    <motion.div
      className="relative flex items-center justify-between bg-gradient-to-br from-emerald-600 to-green-800 text-white px-5 py-4 rounded-xl shadow-md max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <div className="text-sm uppercase tracking-widest font-bold text-green-100">
          Credibility Beacon
        </div>
        <div className="mt-1 text-xs text-green-200">
          Verified source alignment and logical integrity detected.
        </div>
      </div>
      <ShieldCheck className="w-6 h-6 text-green-300 animate-pulse" />
    </motion.div>
  );
};

export default CredibilityBeacon;
