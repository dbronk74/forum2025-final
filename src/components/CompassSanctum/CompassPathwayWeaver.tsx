import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaNetworkWired, FaWaveSquare, FaPenFancy } from 'react-icons/fa';

const weavingPoints = [
  { icon: <FaPenFancy size={22} />, label: 'Narrative Threads', description: 'Connect storylines and argument arcs across perspectives.' },
  { icon: <FaLink size={22} />, label: 'Moral Linkages', description: 'Bridge ethical positions through shared values and goals.' },
  { icon: <FaNetworkWired size={22} />, label: 'Debate Networks', description: 'Visualize how topics branch and converge.' },
  { icon: <FaWaveSquare size={22} />, label: 'Resonant Paths', description: 'Highlight paths with emotional and rational alignment.' },
];

const CompassPathwayWeaver: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Pathway Weaver</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {weavingPoints.map((point, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-700 transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{point.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{point.label}</div>
              <p className="text-sm text-slate-300">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassPathwayWeaver;
