import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudienceDisagreementSignalProps {
  disagreementLevel: number; // expected: 0 to 100
  threshold?: number;        // default trigger level
}

const AudienceDisagreementSignal: React.FC<AudienceDisagreementSignalProps> = ({
  disagreementLevel,
  threshold = 65,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (disagreementLevel >= threshold) {
      setVisible(true);
      const timeout = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [disagreementLevel, threshold]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-6 right-6 z-50 px-4 py-2 bg-red-700 text-white rounded shadow-lg border border-red-400"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          ⚠️ Audience Disagreement Spiking: {(disagreementLevel ?? 0).toFixed(0)}%
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudienceDisagreementSignal;
