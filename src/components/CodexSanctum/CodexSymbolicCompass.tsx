import React from 'react';
import { motion } from 'framer-motion';

const directions = [
  { label: 'Mythos', x: 0, y: -100 },
  { label: 'Chronos', x: 100, y: 0 },
  { label: 'Logos', x: 0, y: 100 },
  { label: 'Pathos', x: -100, y: 0 },
];

const CodexSymbolicCompass: React.FC = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-purple-600 bg-gradient-to-br from-zinc-900 to-black shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        />
        <div className="absolute text-purple-300 text-xs tracking-widest font-mono">
          ✶ CORE
        </div>
      </div>

      {(directions ?? []).map((dir, index) => (
        <div
          key={index}
          className="absolute text-[10px] text-purple-400 font-mono uppercase"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${dir.x}px, ${dir.y}px) translate(-50%, -50%)`,
          }}
        >
          {dir.label}
        </div>
      ))}

      <div className="absolute bottom-1 right-2 text-[9px] text-purple-700 opacity-40 font-mono">
        ⟁ Symbolic Alignment Grid Active
      </div>
    </div>
  );
};

export default CodexSymbolicCompass;
