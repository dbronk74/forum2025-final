import React from 'react';
import { motion } from 'framer-motion';
import { FaSignal, FaSatellite, FaBroadcastTower, FaBullseye } from 'react-icons/fa';

const signalGrid = [
  {
    icon: <FaSignal size={22} />,
    label: 'Core Signal',
    value: '82%',
    description: 'Primary resonance with central topic.',
  },
  {
    icon: <FaSatellite size={22} />,
    label: 'Peripheral Scan',
    value: '46%',
    description: 'Fringe alignment with outer sector signals.',
  },
  {
    icon: <FaBroadcastTower size={22} />,
    label: 'Broadcast Strength',
    value: '71%',
    description: 'Clarity and volume of expressed insight.',
  },
  {
    icon: <FaBullseye size={22} />,
    label: 'Target Alignment',
    value: '64%',
    description: 'Directness toward sanctum’s moral objectives.',
  },
];

const CompassSanctumSignalMatrix: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl border border-slate-800 shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sanctum Signal Matrix</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(signalGrid ?? []).map((signal, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300">
              {signal.icon}
              <span className="text-lg font-semibold">{signal.label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{signal.value}</div>
            <p className="text-sm text-slate-300">{signal.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSanctumSignalMatrix;
