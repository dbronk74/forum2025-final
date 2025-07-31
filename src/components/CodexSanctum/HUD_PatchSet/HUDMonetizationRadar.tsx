import React from 'react';
import { motion } from 'framer-motion';

const radarPings = [
  { label: 'Ad Pulse', angle: 30, radius: 60, color: 'yellow' },
  { label: 'Vault Reward', angle: 120, radius: 80, color: 'green' },
  { label: 'Live Bet', angle: 210, radius: 50, color: 'red' },
  { label: 'Passive Flow', angle: 300, radius: 70, color: 'blue' },
];

export default function HUDMonetizationRadar() {
  const center = 128;

  return (
    <div className="fixed bottom-8 left-8 w-64 h-64 rounded-full bg-black bg-opacity-60 backdrop-blur-md border border-emerald-700 shadow-inner z-50 overflow-hidden">
      <svg viewBox="0 0 256 256" className="w-full h-full">
        {/* Radar sweep pulse */}
        <motion.circle
          cx={center}
          cy={center}
          r="120"
          fill="none"
          stroke="lime"
          strokeWidth="0.5"
          animate={{ rotate: 360 }}
          transform={`rotate(0, ${center}, ${center})`}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        />

        {/* Static concentric circles */}
        {[40, 80, 120].map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            stroke="gray"
            strokeOpacity={0.2}
            fill="none"
          />
        ))}

        {/* Ping points */}
        {(radarPings ?? []).map((ping, idx) => {
          const angleRad = (ping.angle * Math.PI) / 180;
          const x = center + ping.radius * Math.cos(angleRad);
          const y = center + ping.radius * Math.sin(angleRad);
          return (
            <motion.circle
              key={idx}
              cx={x}
              cy={y}
              r="6"
              fill={ping.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ delay: idx * 0.3, repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-emerald-300 text-sm font-mono pointer-events-none">
        Monetization Radar
      </div>
    </div>
  );
}
