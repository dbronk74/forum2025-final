import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGavel, FaBalanceScaleLeft, FaHandsHelping } from 'react-icons/fa';

const moralPoints = [
  { icon: <FaHeart size={24} />, label: 'Empathy' },
  { icon: <FaGavel size={24} />, label: 'Justice' },
  { icon: <FaBalanceScaleLeft size={24} />, label: 'Fairness' },
  { icon: <FaHandsHelping size={24} />, label: 'Compassion' },
];

const CompassMoralCoordinate: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-xl border border-slate-800 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Moral Coordinate</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {moralPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{point.icon}</div>
            <div className="text-base font-medium tracking-wide">{point.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassMoralCoordinate;
