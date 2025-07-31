import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowsAltH, FaProjectDiagram, FaTree, FaCodeBranch } from 'react-icons/fa';

const pathwayElements = [
  { icon: <FaArrowsAltH size={24} />, label: 'Idea Divergence' },
  { icon: <FaProjectDiagram size={24} />, label: 'Flow Patterns' },
  { icon: <FaTree size={24} />, label: 'Branching Logic' },
  { icon: <FaCodeBranch size={24} />, label: 'Ethical Forks' },
];

const CompassPathwayFlow: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Pathway Flow</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(pathwayElements ?? []).map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{item.icon}</div>
            <div className="text-base font-medium tracking-wide">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassPathwayFlow;
