import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaCheckCircle, FaHourglassHalf, FaBan } from 'react-icons/fa';

const directives = [
  {
    icon: <FaGavel size={22} />,
    label: 'Directive #42',
    status: 'Passed',
    color: 'text-green-400',
    description: 'Mandates transparent source citation for all future deliberations.',
  },
  {
    icon: <FaHourglassHalf size={22} />,
    label: 'Directive #43',
    status: 'Pending',
    color: 'text-yellow-300',
    description: 'Proposes trial period for dynamic faction role rotation.',
  },
  {
    icon: <FaCheckCircle size={22} />,
    label: 'Directive #40',
    status: 'Implemented',
    color: 'text-blue-400',
    description: 'Enacted new quorum rules for minority sector override.',
  },
  {
    icon: <FaBan size={22} />,
    label: 'Directive #38',
    status: 'Rejected',
    color: 'text-red-400',
    description: 'Attempted to nullify past Council rulings retroactively.',
  },
];

const CouncilDirectiveTracker: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Directive Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(directives ?? []).map((dir, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-2 bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 125 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center gap-3 font-semibold ${dir.color}`}>
              {dir.icon}
              <span>{dir.label} – {dir.status}</span>
            </div>
            <p className="text-sm text-slate-300">{dir.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilDirectiveTracker;
