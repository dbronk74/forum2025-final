import React from 'react';
import { motion } from 'framer-motion';

const matrix = Array.from({ length: 6 }, () =>
  Array.from({ length: 6 }, () => Math.random())
);

export default function CodexPulseMatrix() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-slate-900 rounded-xl shadow-md text-white">
      <h2 className="text-2xl font-bold text-indigo-300 text-center mb-6">Pulse Matrix</h2>
      <div className="grid grid-cols-6 gap-2">
        {matrix.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className="w-8 h-8 rounded bg-indigo-600"
              style={{ opacity: 0.5 + value * 0.5 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.4 + value,
                delay: (rowIndex + colIndex) * 0.05,
              }}
            />
          ))
        )}
      </div>
      <p className="mt-4 text-center text-xs text-slate-400 italic">
        Each pulse reflects an echo within the living Codex field.
      </p>
    </div>
  );
}
