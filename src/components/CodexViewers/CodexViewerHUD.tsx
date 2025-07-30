import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CodexViewerHUD: React.FC = () => {
  return (
    <motion.div
      className="absolute top-4 right-4 z-50 bg-gradient-to-br from-purple-900/70 to-indigo-800/70 border border-purple-500 rounded-lg shadow-xl backdrop-blur-md p-4 w-72"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex items-center space-x-3 mb-2">
        <Sparkles className="text-yellow-300 animate-pulse" />
        <h2 className="text-yellow-100 text-md font-semibold tracking-wide">
          Lore HUD Activated
        </h2>
      </div>

      <div className="text-sm text-purple-200 font-mono leading-snug space-y-2">
        <p>🧭 Use <strong>Codex Compass</strong> to trace origin threads.</p>
        <p>💡 Hover on glyphs for resonance data.</p>
        <p>🌀 Drag or scroll to explore multidimensional entries.</p>
        <p>🔍 Activate “Insight Mode” to reveal hidden lore bonds.</p>
      </div>

      <div className="mt-3 text-xs text-right text-indigo-300 italic opacity-80">
        // HUD v2.5 — Calibrated for Sanctum
      </div>
    </motion.div>
  );
};

export default CodexViewerHUD;
