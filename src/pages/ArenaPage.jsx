import React from 'react';
import { motion } from 'framer-motion';
// import removed: ArenaMultiView (missing component)
// import removed: SpeakerMomentumFlare (missing component)
// import removed: CodexTemporalScroll (missing component)

export default function ArenaPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:px-10 lg:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-red-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        WorldSpeak Arena
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Live debate interface with multi-view support, temporal archives, and reactive momentum tracking.
      </motion.p>

      <div className="space-y-12">
        {/* <ArenaMultiView /> */}
        {/* <SpeakerMomentumFlare /> */}
        {/* <CodexTemporalScroll /> */}
      </div>
    </div>
  );
}
