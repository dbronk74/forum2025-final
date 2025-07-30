import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBrain, FaBalanceScale, FaEye } from 'react-icons/fa';

const sectorSummaries = [
  {
    icon: <FaHeart size={22} />,
    title: 'Empathy',
    metric: 'Aligned 68%',
    summary: 'Dominant in emotionally driven responses and values-based reasoning.',
  },
  {
    icon: <FaBrain size={22} />,
    title: 'Reason',
    metric: 'Aligned 52%',
    summary: 'Used for analytical clarity and consistent logical structure.',
  },
  {
    icon: <FaBalanceScale size={22} />,
    title: 'Justice',
    metric: 'Aligned 77%',
    summary: 'Frequently cited in ethical debates and fairness enforcement.',
  },
  {
    icon: <FaEye size={22} />,
    title: 'Perspective',
    metric: 'Aligned 43%',
    summary: 'Drawn upon when context or perception becomes a point of contention.',
  },
];

const CompassSectorOverview: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sector Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sectorSummaries.map((sector, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300">
              {sector.icon}
              <span className="text-lg font-semibold">{sector.title}</span>
            </div>
            <div className="text-white text-xl font-bold">{sector.metric}</div>
            <p className="text-sm text-slate-300">{sector.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSectorOverview;
