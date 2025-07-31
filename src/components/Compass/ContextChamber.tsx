import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contextLayers = [
  { label: 'Surface Claims', color: 'bg-indigo-600' },
  { label: 'Underlying Assumptions', color: 'bg-purple-600' },
  { label: 'Historical Context', color: 'bg-pink-600' },
  { label: 'Philosophical Roots', color: 'bg-rose-600' },
  { label: 'Foundational Paradigms', color: 'bg-red-600' },
];

const ContextChamber: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-md mx-auto p-6 text-white bg-gradient-to-br from-indigo-900 to-purple-950 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4 text-indigo-200">
        Context Chamber
      </h2>

      <div className="space-y-4">
        {(contextLayers ?? []).map((layer, i) => (
          <motion.div
            key={layer.label}
            className={`cursor-pointer rounded-lg p-4 shadow-md border border-indigo-700 ${
              i === activeIndex ? `${layer.color} scale-105` : 'bg-indigo-800 opacity-60'
            }`}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-center font-medium">{layer.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 text-sm text-indigo-100 text-center p-4 bg-indigo-950 border border-indigo-800 rounded-md"
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {`Exploring: ${contextLayers[activeIndex].label}`}
      </motion.div>
    </div>
  );
};

export default ContextChamber;
