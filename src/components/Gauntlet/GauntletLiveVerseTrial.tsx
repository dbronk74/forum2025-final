import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GauntletLiveVerseTrialProps {
  verseLines: string[];
  speakerName?: string;
  revealDelay?: number; // in milliseconds
}

const GauntletLiveVerseTrial: React.FC<GauntletLiveVerseTrialProps> = ({
  verseLines,
  speakerName = 'Versecaller',
  revealDelay = 3000,
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < verseLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, revealDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, verseLines.length, revealDelay]);

  return (
    <div className="p-6 bg-black bg-opacity-50 rounded-xl border border-yellow-400 max-w-2xl mx-auto text-center">
      <div className="text-yellow-400 font-bold text-xl mb-2">
        {speakerName}'s Live Verse Trial
      </div>
      <div className="space-y-3 text-lg text-white">
        {verseLines.slice(0, currentLineIndex + 1).map((line, idx) => (
          <AnimatePresence key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="italic"
            >
              “{line}”
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default GauntletLiveVerseTrial;
