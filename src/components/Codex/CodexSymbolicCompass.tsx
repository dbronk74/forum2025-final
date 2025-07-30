import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { label: 'Truth', angle: 0 },
  { label: 'Doubt', angle: 180 },
  { label: 'Order', angle: 90 },
  { label: 'Chaos', angle: 270 },
  { label: 'Light', angle: 45 },
  { label: 'Veil', angle: 225 },
];

export default function CodexSymbolicCompass() {
  const radius = 100;

  return (
    <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-black via-slate-900 to-zinc-800 rounded-full border-4 border-indigo-700 shadow-xl">
      <h2 className="text-center text-indigo-300 text-lg font-bold mt-4">Symbolic Compass</h2>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        {points.map((point, idx) => {
          const x = 100 + radius * Math.cos((point.angle * Math.PI) / 180);
          const y = 100 + radius * Math.sin((point.angle * Math.PI) / 180);
          return (
            <motion.text
              key={idx}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-indigo-300 text-xs font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              {point.label}
            </motion.text>
          );
        })}
      </svg>

      <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-indigo-400 rounded-full shadow-lg" />
    </div>
  );
}
