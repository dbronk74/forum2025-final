import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const sampleData = [
  { symbol: '⟁', label: 'Triad Seal', intensity: 0.8 },
  { symbol: '𓂀', label: 'Eye of Origin', intensity: 1 },
  { symbol: '∞', label: 'Eternal Loop', intensity: 0.6 },
  { symbol: '✶', label: 'Revelation Spark', intensity: 0.7 },
  { symbol: '⚚', label: 'Dual Staff', intensity: 0.9 },
  { symbol: '☯', label: 'Balance Echo', intensity: 0.5 },
];

export default function CodexHeatstreamViewer() {
  const [items, setItems] = useState(sampleData);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: '-100%',
      transition: {
        ease: 'linear',
        duration: 25,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden bg-black border border-violet-700 rounded-lg shadow-md">
      <h3 className="absolute top-1 left-4 text-xs uppercase tracking-wide text-violet-400 z-10">
        Codex Heatstream
      </h3>

      <motion.div
        className="flex gap-10 py-4 pl-60"
        animate={controls}
        initial={{ x: '100%' }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className="text-2xl"
              style={{
                color: `rgba(168, 85, 247, ${item.intensity})`,
              }}
            >
              {item.symbol}
            </span>
            <span className="text-sm text-violet-300">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
