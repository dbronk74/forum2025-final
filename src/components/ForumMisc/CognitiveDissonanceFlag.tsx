import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CognitiveDissonanceFlagProps {
  dissonanceLevel: number; // 0 to 100 scale
  threshold?: number;      // default trigger threshold
  speakerName?: string;
}

const CognitiveDissonanceFlag: React.FC<CognitiveDissonanceFlagProps> = ({
  dissonanceLevel,
  threshold = 60,
  speakerName = 'Speaker',
}) => {
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    if (dissonanceLevel >= threshold) {
      setShowFlag(true);
      const timeout = setTimeout(() => setShowFlag(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [dissonanceLevel, threshold]);

  return (
    <AnimatePresence>
      {showFlag && (
        <motion.div
          className="fixed bottom-6 right-6 bg-yellow-600 text-white px-4 py-2 rounded shadow-lg border border-yellow-300 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          ⚡ Cognitive Dissonance Detected in {speakerName}’s Argument
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CognitiveDissonanceFlag;
