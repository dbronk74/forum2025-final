// src/components/ForumMisc/MisunderstandingAlert.tsx

import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MisunderstandingAlert() {
  const [visible, setVisible] = useState(false);

  // Simulated trigger (in production, this would be tied to debate logic)
  useEffect(() => {
    const trigger = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }, 15000); // every 15 seconds

    return () => clearInterval(trigger);
  }, []);

  return (
    <div className="absolute top-4 right-4 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg border border-red-300 animate-pulse"
          >
            <AlertTriangle className="mr-2 text-yellow-300 animate-bounce" size={20} />
            <span className="text-sm font-medium">Misunderstanding Detected</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
