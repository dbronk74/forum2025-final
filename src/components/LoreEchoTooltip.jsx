import React from 'react';
import { motion } from 'framer-motion';

export default function LoreEchoTooltip() {
  return (
    <div className="relative group inline-block">
      <motion.div
        className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        <span className="text-white font-bold text-sm">i</span>
      </motion.div>

      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs px-3 py-2 rounded shadow-lg z-10 w-64 text-center">
        Lore Echoes are fragments of historical debate energy. Hover to learn their origin and effect.
      </div>
    </div>
  );
}
