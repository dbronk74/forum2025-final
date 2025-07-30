import React from 'react';
import { motion } from 'framer-motion';
import { FaYinYang, FaLeaf, FaFlame, FaGlobeAmericas, FaSnowflake } from 'react-icons/fa';

const themes = [
  { icon: <FaYinYang size={20} />, label: 'Duality', color: 'from-purple-600 to-indigo-700' },
  { icon: <FaLeaf size={20} />, label: 'Growth', color: 'from-green-500 to-emerald-600' },
  { icon: <FaFlame size={20} />, label: 'Conviction', color: 'from-red-500 to-orange-600' },
  { icon: <FaGlobeAmericas size={20} />, label: 'Unity', color: 'from-blue-500 to-cyan-600' },
  { icon: <FaSnowflake size={20} />, label: 'Clarity', color: 'from-sky-400 to-blue-600' },
];

const CompassThemeWheel: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-10 text-white rounded-2xl bg-slate-950 shadow-lg border border-slate-800 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 tracking-wide text-center">Compass Theme Wheel</h2>
      <div className="grid grid-cols-2 gap-6">
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br ${theme.color} hover:scale-105 transition transform duration-300`}
            initial={{ opacity: 0, rotate: -10, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-white">{theme.icon}</div>
            <div className="text-sm font-medium tracking-wide">{theme.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassThemeWheel;
