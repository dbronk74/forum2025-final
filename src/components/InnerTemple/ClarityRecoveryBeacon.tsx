// src/components/InnerTemple/ClarityRecoveryBeacon.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Signal } from 'lucide-react';

const ClarityRecoveryBeacon: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex items-center space-x-3 bg-zinc-900 p-4 rounded-xl shadow-md border border-cyan-600 max-w-md mx-auto"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: active ? 1 : 0.5 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Signal
        className="text-cyan-400"
        size={32}
        strokeWidth={1.5}
        aria-label="Clarity Recovery Beacon"
      />
      <div className="text-cyan-300 font-semibold text-lg">
        Clarity Recovery Active
      </div>
    </motion.div>
  );
};

export default ClarityRecoveryBeacon;
