import React from 'react';
import { motion } from 'framer-motion';
import { FaMapSigns, FaStream, FaBullseye, FaCogs } from 'react-icons/fa';

const contextPoints = [
  { icon: <FaMapSigns size={24} />, label: 'Diverging Paths' },
  { icon: <FaStream size={24} />, label: 'Flow of Logic' },
  { icon: <FaBullseye size={24} />, label: 'Core Focus' },
  { icon: <FaCogs size={24} />, label: 'Contextual Mechanics' },
];

const CompassContextMap: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-xl shadow-md border border-slate-800 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">Compass Context Map</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(contextPoints ?? []).map((point, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 p-5 rounded-lg bg-slate-800 hover:bg-slate-700 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-300">{point.icon}</div>
            <div className="text-base font-medium">{point.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompassContextMap;
