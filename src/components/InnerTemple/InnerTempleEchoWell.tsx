// src/components/InnerTemple/InnerTempleEchoWell.tsx

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const echoPhrases = [
  "The past speaks in whispers.",
  "Echoes carry the wisdom of ages.",
  "Listen closely to the silent voices.",
  "Reflections ripple through the well of thought.",
  "Truth emerges from the deepest echoes.",
];

const InnerTempleEchoWell: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % echoPhrases.length);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto p-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-3xl shadow-2xl text-center text-white select-none">
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-2xl italic font-light tracking-wide"
      >
        {echoPhrases[currentIndex]}
      </motion.p>
      <div className="mt-6 w-24 h-24 mx-auto rounded-full bg-purple-700/40 shadow-inner animate-pulse" />
    </div>
  );
};

export default InnerTempleEchoWell;
