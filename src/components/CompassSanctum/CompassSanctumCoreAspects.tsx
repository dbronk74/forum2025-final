import React from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaFire, FaSnowflake, FaLeaf } from 'react-icons/fa';

const sanctumAspects = [
  { icon: <FaCube size={22} />, label: 'Stability', description: 'Anchors core values and foundational beliefs of the council.' },
  { icon: <FaFire size={22} />, label: 'Passion', description: 'Represents conviction, drive, and pursuit of truth.' },
  { icon: <FaSnowflake size={22} />, label: 'Clarity', description: 'Symbolizes cool logic, insight, and precision in decision-making.' },
  { icon: <FaLeaf size={22} />, label: 'Growth', description: 'Tracks the evolution of thought and acceptance of new wisdom.' },
];

const CompassSanctumComponent1: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sanctum - Core Aspects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(sanctumAspects ?? []).map((aspect, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{aspect.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{aspect.label}</div>
              <p className="text-sm text-slate-300">{aspect.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSanctumComponent1;
