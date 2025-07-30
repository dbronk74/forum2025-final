// SanctumSigilTraceOverlay.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const tracePatterns = [
  '↝↠↬', '⟿⤳⤷', '⇝⇥⇢', '⭆⭇⭈', '➾➳➴'
];

const SanctumSigilTraceOverlay: React.FC = () => {
  const [pattern, setPattern] = useState(tracePatterns[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = tracePatterns[Math.floor(Math.random() * tracePatterns.length)];
      setPattern(next);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-5xl text-purple-400/20 font-mono select-none"
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {pattern}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SanctumSigilTraceOverlay;
