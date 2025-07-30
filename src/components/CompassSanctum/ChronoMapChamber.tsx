import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkedAlt, FaRoute, FaHistory } from 'react-icons/fa';

const timelineNodes = [
  { icon: <FaClock size={24} />, label: 'Moments of Decision' },
  { icon: <FaMapMarkedAlt size={24} />, label: 'Council Routes' },
  { icon: <FaRoute size={24} />, label: 'Pathway Shifts' },
  { icon: <FaHistory size={24} />, label: 'Historical Records' },
];

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 130,
      damping: 12,
    },
  }),
};

const ChronoMapChamber: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-xl text-white shadow-lg border border-slate-800 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 tracking-wider">Chrono Map Chamber</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {timelineNodes.map((node, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-5 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={nodeVariants}
          >
            <div className="text-yellow-300">{node.icon}</div>
            <div className="text-base font-medium tracking-wide">{node.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChronoMapChamber;
