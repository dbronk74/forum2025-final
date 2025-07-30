import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaBrain, FaHeart, FaEye } from 'react-icons/fa';

const sectors = [
  {
    icon: <FaHeart size={22} />,
    title: 'Empathy',
    description: 'Focuses on compassion, emotional resonance, and human impact.',
  },
  {
    icon: <FaBrain size={22} />,
    title: 'Reason',
    description: 'Anchored in logic, analysis, and structured thinking.',
  },
  {
    icon: <FaBalanceScale size={22} />,
    title: 'Justice',
    description: 'Centered on fairness, moral weight, and ethical frameworks.',
  },
  {
    icon: <FaEye size={22} />,
    title: 'Perspective',
    description: 'Explores awareness, context, and interpretive nuance.',
  },
];

const CompassSectorLegend: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl border border-slate-800 shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sector Legend</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sectors.map((sector, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{sector.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{sector.title}</div>
              <p className="text-sm text-slate-300">{sector.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSectorLegend;
