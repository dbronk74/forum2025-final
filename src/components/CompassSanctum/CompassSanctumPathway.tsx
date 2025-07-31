import React from 'react';
import { motion } from 'framer-motion';
import { FaRoute, FaStream, FaProjectDiagram, FaLongArrowAltRight } from 'react-icons/fa';

const pathwayFlows = [
  {
    icon: <FaRoute size={22} />,
    title: 'Ethical Divergence',
    description: 'Tracks how moral perspectives split and form new arguments.',
  },
  {
    icon: <FaStream size={22} />,
    title: 'Flow of Reason',
    description: 'Visualizes logical continuity through complex debates.',
  },
  {
    icon: <FaProjectDiagram size={22} />,
    title: 'Cross-Sector Currents',
    description: 'Connects topics across compass sectors in real time.',
  },
  {
    icon: <FaLongArrowAltRight size={22} />,
    title: 'Consensus Trajectories',
    description: 'Highlights zones of growing agreement or convergence.',
  },
];

const CompassSanctumPathway: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Sanctum Pathway</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(pathwayFlows ?? []).map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300 mt-1">{item.icon}</div>
            <div>
              <div className="text-base font-semibold mb-1">{item.title}</div>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassSanctumPathway;
