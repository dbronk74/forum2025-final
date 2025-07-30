import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBalanceScale, FaBrain, FaSeedling } from 'react-icons/fa';

const sanctumFunctions = [
  {
    icon: <FaEye size={22} />,
    label: 'Discernment',
    description: 'Analyzes subtle cues and hidden motivations behind claims.',
  },
  {
    icon: <FaBalanceScale size={22} />,
    label: 'Equity Balancer',
    description: 'Maintains fairness across competing ethical frameworks.',
  },
  {
    icon: <FaBrain size={22} />,
    label: 'Cognitive Bridge',
    description: 'Connects rational, emotional, and spiritual reasoning.',
  },
  {
    icon: <FaSeedling size={22} />,
    label: 'Regenerative Wisdom',
    description: 'Promotes moral growth through reflective iteration.',
  },
];

const CompassSanctumComponent3: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sanctum – Functional Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sanctumFunctions.map((func, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{func.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{func.label}</div>
              <p className="text-sm text-slate-300">{func.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSanctumComponent3;
