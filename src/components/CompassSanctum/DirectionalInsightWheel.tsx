import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowUp,
  FaArrowRight,
  FaArrowDown,
  FaArrowLeft,
  FaExpandAlt,
} from 'react-icons/fa';

const directions = [
  { label: 'North', icon: <FaArrowUp />, theme: 'Purpose' },
  { label: 'East', icon: <FaArrowRight />, theme: 'Clarity' },
  { label: 'South', icon: <FaArrowDown />, theme: 'Protection' },
  { label: 'West', icon: <FaArrowLeft />, theme: 'Wisdom' },
  { label: 'Center', icon: <FaExpandAlt />, theme: 'Balance' },
];

const DirectionalInsightWheel: React.FC = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center text-white bg-slate-950 rounded-xl border border-slate-800 shadow-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer Glow */}
        <motion.div
          className="w-48 h-48 rounded-full bg-yellow-500 opacity-10 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative grid grid-cols-3 grid-rows-3 gap-6">
        {(directions ?? []).map((dir, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-sm text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 text-2xl mb-1">{dir.icon}</div>
            <div className="font-semibold">{dir.label}</div>
            <div className="text-slate-400 text-xs">{dir.theme}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DirectionalInsightWheel;
