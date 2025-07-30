// src/components/InnerTemple/SemanticClarityScanner.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SemanticClarityScanner: React.FC = () => {
  const [clarity, setClarity] = useState(0);

  useEffect(() => {
    // Simulate clarity scanning process
    const interval = setInterval(() => {
      setClarity((prev) => (prev >= 100 ? 0 : prev + Math.floor(Math.random() * 10 + 5)));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-sm mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg text-white select-none text-center">
      <h3 className="text-xl font-semibold mb-4">Semantic Clarity Scanner</h3>
      <div className="relative h-6 w-full bg-gray-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-6 bg-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${clarity}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-sm">{clarity}% clarity detected in current discourse</p>
    </div>
  );
};

export default SemanticClarityScanner;
