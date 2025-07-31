import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaLightbulb, FaChartLine, FaSearch } from 'react-icons/fa';

const insightData = [
  { icon: <FaLightbulb size={24} />, title: 'Emerging Ideas' },
  { icon: <FaEye size={24} />, title: 'Key Observations' },
  { icon: <FaChartLine size={24} />, title: 'Trend Analysis' },
  { icon: <FaSearch size={24} />, title: 'Investigative Leads' },
];

const CompassInsightPanel: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Insight Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(insightData ?? []).map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{item.icon}</div>
            <div className="text-base font-medium tracking-wide">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassInsightPanel;
