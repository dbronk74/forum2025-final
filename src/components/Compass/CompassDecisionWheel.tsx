import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const options = [
  { label: 'Approve', color: 'text-emerald-400', ring: 'ring-emerald-400' },
  { label: 'Reject', color: 'text-rose-500', ring: 'ring-rose-500' },
  { label: 'Abstain', color: 'text-amber-400', ring: 'ring-amber-400' },
  { label: 'Revisit', color: 'text-cyan-400', ring: 'ring-cyan-400' },
];

const CompassDecisionWheel: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const radius = 100;
  const center = 120;

  const getCoords = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-lg border border-slate-700">
      <h3 className="text-center text-sm text-slate-300 tracking-widest mb-4 uppercase">
        Compass Council Decision Wheel
      </h3>

      <svg width="240" height="240" className="mx-auto">
        {options.map((option, index) => {
          const { x, y } = getCoords(index, options.length);
          const isSelected = selected === option.label;
          return (
            <motion.g
              key={index}
              whileHover={{ scale: 1.15 }}
              onClick={() => setSelected(option.label)}
              className="cursor-pointer"
            >
              <circle
                cx={x}
                cy={y}
                r="26"
                className={`fill-slate-800 stroke-2 ${
                  isSelected ? option.ring : 'ring-slate-600'
                }`}
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className={`text-[12px] font-semibold pointer-events-none ${
                  isSelected ? option.color : 'text-slate-300'
                }`}
              >
                {option.label}
              </text>
            </motion.g>
          );
        })}

        <circle
          cx={center}
          cy={center}
          r="10"
          fill="#334155"
          stroke="#64748b"
          strokeWidth="1.5"
        />
        <motion.text
          x={center}
          y={center + 4}
          textAnchor="middle"
          className="text-xs fill-slate-300"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight size={14} />
        </motion.text>
      </svg>

      <div className="mt-6 text-center text-sm text-slate-400">
        {selected ? `You chose: ${selected}` : 'Select a council outcome'}
      </div>
    </div>
  );
};

export default CompassDecisionWheel;
