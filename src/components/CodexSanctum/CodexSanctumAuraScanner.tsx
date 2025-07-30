import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CodexSanctumAuraScanner: React.FC = () => {
  const [auras, setAuras] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAuras(prev => {
        const next = [...prev, Date.now()];
        return next.slice(-4); // limit to last 4 active pulses
      });
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 to-purple-950 border border-violet-700 rounded-xl p-6 text-white w-full max-w-xl mx-auto h-72 shadow-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 text-violet-300 text-center">Codex Sanctum Aura Scanner</h2>
      <div className="relative w-full h-full flex items-center justify-center">
        {auras.map((aura, index) => (
          <motion.div
            key={aura}
            className="absolute rounded-full border border-violet-500"
            style={{
              width: '30px',
              height: '30px',
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 10, opacity: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
          />
        ))}

        <div className="z-10 w-8 h-8 bg-violet-500 rounded-full shadow-lg animate-pulse" />
      </div>
    </div>
  );
};

export default CodexSanctumAuraScanner;
