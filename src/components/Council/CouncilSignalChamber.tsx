import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower, FaWaveSquare, FaCircle, FaWifi } from 'react-icons/fa';

const signalStats = [
  {
    icon: <FaBroadcastTower size={22} />,
    label: 'Council Uplink',
    value: '92%',
    description: 'Signal strength from core council deliberation.',
  },
  {
    icon: <FaWaveSquare size={22} />,
    label: 'Resonance Field',
    value: '76%',
    description: 'Level of alignment among active sectors.',
  },
  {
    icon: <FaWifi size={22} />,
    label: 'Public Sync',
    value: '61%',
    description: 'Audience signal reception and understanding.',
  },
  {
    icon: <FaCircle size={22} />,
    label: 'Pulse Integrity',
    value: '88%',
    description: 'Stability and coherence of transmitted logic.',
  },
];

const CouncilSignalChamber: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white rounded-xl p-8 shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Council Signal Chamber</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {signalStats.map((signal, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition flex flex-col gap-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300 text-lg font-semibold">
              {signal.icon}
              <span>{signal.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{signal.value}</div>
            <p className="text-sm text-slate-300">{signal.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CouncilSignalChamber;
