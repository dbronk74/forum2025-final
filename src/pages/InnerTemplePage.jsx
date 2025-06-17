import React from 'react';
import { motion } from 'framer-motion';
// import removed: SacredOrbCouncil (missing component)
import IntrospectionTimeline from '../components/IntrospectionTimeline';

export default function InnerTemplePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-800 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src="/images/innertemple/temple-glow-background.png"
          alt="Temple Glow"
          className="w-full h-full object-cover mix-blend-lighten"
        />
      </div>

      <div className="relative z-10 px-6 py-10 backdrop-blur-md bg-white/5 rounded-xl shadow-xl mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl font-semibold text-center text-cyan-100 tracking-wide mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Inner Temple
        </motion.h2>

        <div className="space-y-12">
          {/* <SacredOrbCouncil /> */}
          <IntrospectionTimeline />
        </div>
      </div>
    </div>
  );
}
