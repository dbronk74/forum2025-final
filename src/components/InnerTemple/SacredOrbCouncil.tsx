// src/components/InnerTemple/SacredOrbCouncil.tsx

import React from 'react';
import { motion } from 'framer-motion';

const councilMembers = [
  { id: 1, name: 'Oracle of Wisdom', color: '#7e22ce' },
  { id: 2, name: 'Seer of Truth', color: '#9333ea' },
  { id: 3, name: 'Guardian of Light', color: '#a78bfa' },
  { id: 4, name: 'Keeper of Silence', color: '#c4b5fd' },
  { id: 5, name: 'Sage of Insight', color: '#ddd6fe' },
];

const SacredOrbCouncil: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-8 bg-gradient-to-tr from-purple-900 via-indigo-900 to-black rounded-3xl shadow-2xl text-white text-center select-none">
      <h2 className="text-3xl font-extrabold mb-8">Sacred Orb Council</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {councilMembers.map(({ id, name, color }) => (
          <motion.div
            key={id}
            className="w-28 h-28 rounded-full flex flex-col items-center justify-center cursor-default"
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 80%)`,
              boxShadow: `0 0 20px 6px ${color}80`,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: id * 0.2, duration: 0.6 }}
          >
            <div className="text-lg font-semibold">{name}</div>
            <div className="mt-1 w-12 h-12 rounded-full bg-white/10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SacredOrbCouncil;
