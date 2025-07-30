import React from 'react';
import { motion } from 'framer-motion';

const mockUsers = [
  { name: 'Aether', angle: 45, distance: 60, color: 'indigo' },
  { name: 'Nyra', angle: 130, distance: 80, color: 'emerald' },
  { name: 'Vox', angle: 210, distance: 50, color: 'rose' },
  { name: 'Solon', angle: 300, distance: 70, color: 'cyan' },
];

export default function HUDUserTrackerMap() {
  const center = 128;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-black bg-opacity-70 backdrop-blur-md border border-indigo-800 shadow-md z-50 overflow-hidden">
      <svg viewBox="0 0 256 256" className="w-full h-full">
        {/* Static radar rings */}
        {[40, 80, 120].map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            stroke="white"
            strokeOpacity={0.05}
            fill="none"
          />
        ))}

        {/* Users */}
        {mockUsers.map((user, idx) => {
          const rad = (user.angle * Math.PI) / 180;
          const x = center + user.distance * Math.cos(rad);
          const y = center + user.distance * Math.sin(rad);

          return (
            <motion.g
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <circle cx={x} cy={y} r="6" fill={`var(--tw-color-${user.color}-400)`} />
              <text
                x={x + 8}
                y={y}
                fontSize="10"
                fill="white"
                opacity={0.6}
              >
                {user.name}
              </text>
            </motion.g>
          );
        })}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-indigo-300 text-xs font-mono pointer-events-none">
        User Activity Map
      </div>
    </div>
  );
}
