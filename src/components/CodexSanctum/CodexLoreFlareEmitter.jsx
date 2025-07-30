import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodexLoreFlareEmitter = () => {
  const [flares, setFlares] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const emitFlare = () => {
      setTimeout(() => {
        if (isMounted) {
          const newFlare = {
            id: `${Date.now()}-${Math.random()}`,
            x: Math.random() * 100,
            y: Math.random() * 100,
          };
          setFlares(prev => [...prev.slice(-5), newFlare]);
          emitFlare();
        }
      }, 2000);
    };

    emitFlare();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-6 rounded-xl border border-purple-600 shadow-xl">
      <h2 className="text-xl font-bold mb-2">🔥 Lore Flare Emitter</h2>
      <p className="text-sm text-purple-200 mb-4">
        Emits flares when rare or critical lore events are triggered in the Codex.
      </p>
      <div className="relative h-40 w-full overflow-hidden bg-black rounded-lg">
        {flares.map((flare) => (
          <motion.div
            key={flare.id}
            className="absolute w-6 h-6 rounded-full bg-pink-500 shadow-2xl ring-2 ring-white/20"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
              top: `${flare.y}%`,
              left: `${flare.x}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexLoreFlareEmitter;
