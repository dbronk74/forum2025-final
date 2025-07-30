import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Map, Layers } from 'lucide-react';

const items = [
  { icon: <BookOpen size={22} />, label: 'Scroll' },
  { icon: <Map size={22} />, label: 'Activity' },
  { icon: <Layers size={22} />, label: 'Codex' },
  { icon: <Compass size={22} />, label: 'Lore Map' },
];

export default function RadialHUD() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <motion.button
        className="w-12 h-12 bg-black border-2 border-purple-500 rounded-full shadow-md flex items-center justify-center text-purple-300 hover:bg-purple-600 transition"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
      >
        ⦿
      </motion.button>

      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 w-44 h-44 -top-24 -left-24 pointer-events-none"
        >
          {items.map((item, index) => {
            const angle = (index / items.length) * Math.PI * 2;
            const x = 70 * Math.cos(angle);
            const y = 70 * Math.sin(angle);

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                transition={{ delay: 0.05 * index }}
                className="absolute pointer-events-auto w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110"
              >
                {item.icon}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
