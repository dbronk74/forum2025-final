import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GauntletCodexTemporalScrollProps {
  title?: string;
  entries: string[];
  autoScroll?: boolean;
  scrollSpeed?: number; // in milliseconds
}

const GauntletCodexTemporalScroll: React.FC<GauntletCodexTemporalScrollProps> = ({
  title = 'Temporal Codex Scroll',
  entries,
  autoScroll = true,
  scrollSpeed = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % entries.length);
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [entries.length, scrollSpeed, autoScroll]);

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gradient-to-b from-yellow-50 to-yellow-100 border-2 border-yellow-700 rounded-lg shadow-xl overflow-hidden">
      <div className="bg-yellow-200 text-center py-3 border-b border-yellow-600 text-xl font-semibold tracking-wide text-yellow-900">
        {title}
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="p-6 text-yellow-900 text-lg font-medium leading-relaxed min-h-[120px]"
      >
        {entries[currentIndex]}
      </motion.div>

      <div className="flex justify-center space-x-2 pb-4">
        {(entries ?? []).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-yellow-800' : 'bg-yellow-400'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default GauntletCodexTemporalScroll;
