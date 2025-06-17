import React from 'react';
import { motion } from 'framer-motion';
import BranchHeader from '../components/BranchHeader';
import BranchFooter from '../components/BranchFooter';
import SanctumPulseSynchronizer from '../components/SanctumPulseSynchronizer';
// import removed: ChronoFactionPulseGrid (missing component)
// import removed: FactionDebateIntensityMeter (missing component)

export default function PulsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center">
      <BranchHeader />

      <motion.h1
        className="text-4xl font-bold mt-12 mb-6 text-red-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Pulse Dynamics
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Observe synchronized sanctum pulses, real-time faction surges, and debate heat levels.
      </motion.p>

      <div className="flex flex-col items-center space-y-10 mb-16">
        <SanctumPulseSynchronizer />
        {/* <ChronoFactionPulseGrid /> */}
        {/* <FactionDebateIntensityMeter /> */}
      </div>

      <BranchFooter />
    </div>
  );
}
