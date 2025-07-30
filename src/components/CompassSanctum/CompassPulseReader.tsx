import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBolt, FaCircleNotch, FaChartBar } from 'react-icons/fa';

const pulseReadings = [
  { icon: <FaHeartbeat size={22} />, label: 'Emotional Pulse', description: 'Detect the emotional undercurrents driving dialogue.' },
  { icon: <FaBolt size={22} />, label: 'Intensity Spikes', description: 'Identify moments of heightened energy or friction.' },
  { icon: <FaCircleNotch size={22} />, label: 'Flow Continuity', description: 'Track the consistency and clarity of evolving thought.' },
  { icon: <FaChartBar size={22} />, label: 'Insight Peaks', description: 'Highlight breakthrough ideas or compelling responses.' },
];

const CompassPulseReader: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Pulse Reader</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {pulseReadings.map((pulse, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{pulse.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{pulse.label}</div>
              <p className="text-sm text-slate-300">{pulse.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassPulseReader;
