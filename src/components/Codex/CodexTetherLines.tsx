import React from 'react';
import { motion } from 'framer-motion';

type Tether = {
  from: string;
  to: string;
  strength: number; // 1–10
};

const mockTethers: Tether[] = [
  { from: 'Bias', to: 'Distortion', strength: 7 },
  { from: 'Clarity', to: 'Truth', strength: 9 },
  { from: 'Omission', to: 'Truth', strength: 4 },
];

export default function CodexTetherLines() {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl shadow-inner overflow-hidden">
      <h3 className="text-white text-center py-4 text-lg font-semibold">Codex Tether Lines</h3>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {mockTethers.map((tether, i) => {
          const x1 = 80 + i * 90;
          const y1 = 100;
          const x2 = 320 - i * 70;
          const y2 = 300;

          return (
            <React.Fragment key={`${tether.from}-${tether.to}`}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#tetherGradient)"
                strokeWidth={tether.strength / 2 + 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: i * 0.3 }}
              />
              <circle cx={x1} cy={y1} r={5} fill="indigo" />
              <circle cx={x2} cy={y2} r={5} fill="cyan" />
              <text x={x1 - 10} y={y1 - 10} className="text-xs fill-indigo-300">{tether.from}</text>
              <text x={x2 + 6} y={y2 + 4} className="text-xs fill-cyan-300">{tether.to}</text>
            </React.Fragment>
          );
        })}
        <defs>
          <linearGradient id="tetherGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
