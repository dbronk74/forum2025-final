import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaComments, FaBalanceScale, FaSignal } from 'react-icons/fa';

const debateStats = [
  { icon: <FaComments size={24} />, label: 'Arguments Tracked' },
  { icon: <FaBalanceScale size={24} />, label: 'Claims Balanced' },
  { icon: <FaSignal size={24} />, label: 'Pulse Signals' },
  { icon: <FaHandshake size={24} />, label: 'Consensus Attempts' },
];

const CompassDebateTracker: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white rounded-xl shadow-md p-8 border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Debate Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {debateStats.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 140 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{item.icon}</div>
            <div className="text-base font-medium">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassDebateTracker;
