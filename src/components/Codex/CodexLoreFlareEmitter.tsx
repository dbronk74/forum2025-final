import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CodexLoreFlareEmitter() {
  const [flareVisible, setFlareVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFlareVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {flareVisible && (
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 opacity-70 blur-lg"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
      )}
      <div className="text-indigo-300 text-sm font-semibold z-10">Lore Flare Triggered</div>
    </div>
  );
}
