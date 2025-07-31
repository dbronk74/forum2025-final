import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConflictRippleScanner = ({ trigger = false }) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (trigger) {
      const rippleId = Date.now();
      setRipples((prev) => [...prev, rippleId]);
      const timeout = setTimeout(() => {
        setRipples((prev) => prev.filter((id) => id !== rippleId));
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {(ripples ?? []).map((id) => (
          <motion.div
            key={id}
            className="absolute inset-0 rounded-full border-4 border-red-500"
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ConflictRippleScanner;
