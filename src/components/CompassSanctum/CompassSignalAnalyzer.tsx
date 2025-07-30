import React from 'react';
import { motion } from 'framer-motion';
import { FaWaveSquare, FaChartPie, FaWifi, FaBullseye } from 'react-icons/fa';

const signalMetrics = [
  {
    icon: <FaWaveSquare size={22} />,
    label: 'Signal Clarity',
    value: '87%',
    description: 'Measures precision and focus of participant messaging.',
  },
  {
    icon: <FaChartPie size={22} />,
    label: 'Sentiment Spread',
    value: '63%',
    description: 'Distribution of emotional tones across sectors.',
  },
  {
    icon: <FaWifi size={22} />,
    label: 'Resonance Level',
    value: '72%',
    description: 'Depth of conceptual impact across moral dimensions.',
  },
  {
    icon: <FaBullseye size={22} />,
    label: 'Alignment Score',
    value: '79%',
    description: 'Degree of coherence with compass sector objectives.',
  },
];

const CompassSignalAnalyzer: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Signal Analyzer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {signalMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg hover:bg-slate-700 transition flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 125 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-yellow-300">
              {metric.icon}
              <span className="text-lg font-semibold">{metric.label}</span>
            </div>
            <div className="text-white text-xl font-bold">{metric.value}</div>
            <p className="text-sm text-slate-300">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSignalAnalyzer;
