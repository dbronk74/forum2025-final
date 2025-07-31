import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { label: 'Codex', angle: 0 },
  { label: 'Gauntlet', angle: 45 },
  { label: 'Oracle', angle: 90 },
  { label: 'Temple', angle: 135 },
  { label: 'Vault', angle: 180 },
  { label: 'Council', angle: 225 },
  { label: 'Arena', angle: 270 },
  { label: 'Think', angle: 315 },
];

const radius = 100;
const center = 128;

export default function HUDCompassOverlay() {
  return (
    <div className="fixed bottom-8 right-8 w-64 h-64 bg-black bg-opacity-60 backdrop-blur-md rounded-full border border-indigo-700 shadow-xl z-50">
      <svg viewBox="0 0 256 256" className="w-full h-full">
        {(points ?? []).map((point, idx) => {
          const angle = (point.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <motion.text
              key={idx}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-indigo-300 text-[10px] uppercase font-bold tracking-widest cursor-pointer hover:fill-yellow-400"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {point.label}
            </motion.text>
          );
        })}
        <circle
          cx={center}
          cy={center}
          r="6"
          fill="indigo"
          className="drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
        />
      </svg>
    </div>
  );
}
