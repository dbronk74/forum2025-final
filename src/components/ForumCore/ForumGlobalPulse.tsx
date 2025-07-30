import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pulseVariants = {
  initial: { scale: 0.8, opacity: 0.5 },
  animate: {
    scale: 2.5,
    opacity: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  },
};

const ForumGlobalPulse: React.FC = () => {
  const [pulses, setPulses] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulses((prev) => [...prev, Date.now()]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const removeOldPulses = (id: number) => {
    setPulses((prev) => prev.filter((pulseId) => pulseId !== id));
  };

  return (
    <div className="relative w-72 h-72 mx-auto my-6 flex items-center justify-center bg-black bg-opacity-60 rounded-full shadow-inner border border-purple-700">
      <div className="absolute z-10 text-center text-purple-300 font-semibold text-lg">
        Global Pulse
      </div>

      <AnimatePresence>
        {pulses.map((id) => (
          <motion.div
            key={id}
            className="absolute w-full h-full rounded-full border border-purple-500"
            initial="initial"
            animate="animate"
            variants={pulseVariants}
            onAnimationComplete={() => removeOldPulses(id)}
          />
        ))}
      </AnimatePresence>

      <div className="absolute w-6 h-6 bg-purple-500 rounded-full shadow-lg z-20" />
    </div>
  );
};

export default ForumGlobalPulse;
