import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react'; // ✅ Corrected from 'Scales'

export default function DebateCompassWheel() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        className="w-32 h-32 rounded-full border-4 border-purple-400 flex items-center justify-center"
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <Scale size={48} strokeWidth={2.5} className="text-purple-400" />
      </motion.div>

      <motion.h2
        className="text-xl mt-4 text-white font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Debate Compass Wheel
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center max-w-sm mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Rotates in response to logic balance and factional lean. A visual metaphor for argument orientation.
      </motion.p>
    </div>
  );
}
