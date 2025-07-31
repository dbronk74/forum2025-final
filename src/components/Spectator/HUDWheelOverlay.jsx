import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, BookOpenCheck, ScrollText, Eye } from 'lucide-react';

const tools = [
  { name: 'Map', icon: <Map />, action: () => console.log('Open Map') },
  { name: 'Scroll', icon: <ScrollText />, action: () => console.log('Open Scroll') },
  { name: 'Codex', icon: <BookOpenCheck />, action: () => console.log('Open Codex') },
  { name: 'Spectate', icon: <Eye />, action: () => console.log('Spectate Mode') }
];

export default function HUDWheelOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-6 right-6">
      <motion.button
        className="bg-black border border-purple-700 p-4 rounded-full shadow-lg text-white hover:bg-purple-800 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        ☸️
      </motion.button>

      {open && (
        <div className="relative w-48 h-48 mt-4">
          {(tools ?? []).map((tool, idx) => {
            const angle = (360 / tools.length) * idx - 90;
            const radius = 80;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.button
                key={tool.name}
                onClick={tool.action}
                className="absolute w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg"
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool.icon}
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}
