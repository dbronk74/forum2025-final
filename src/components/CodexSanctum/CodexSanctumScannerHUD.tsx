import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodexSanctumScannerHUD: React.FC = () => {
  const [scanValue, setScanValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanValue(prev => (prev + Math.random() * 10) % 100);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-zinc-900 to-purple-900 p-6 rounded-xl shadow-lg border border-purple-800"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-purple-300 mb-2">Codex Scanner HUD</h2>
      <p className="text-sm text-purple-400 mb-4 italic">
        Monitoring arcane flux and glyph trace emissions in real time.
      </p>

      <div className="relative w-full h-4 bg-purple-950 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-purple-400"
          initial={{ width: '0%' }}
          animate={{ width: `${scanValue.toFixed(1)}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mt-2 text-right text-purple-300 text-xs">
        Scan Level: {scanValue.toFixed(1)}%
      </div>
    </motion.div>
  );
};

export default CodexSanctumScannerHUD;
