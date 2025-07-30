import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const wheelOptions = [
  { label: 'Insight', color: 'from-cyan-400 to-blue-600' },
  { label: 'Direction', color: 'from-amber-400 to-yellow-600' },
  { label: 'Clarity', color: 'from-purple-500 to-fuchsia-600' },
  { label: 'Harmony', color: 'from-emerald-400 to-teal-600' },
];

const SanctumSteeringWheel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotateWheel = () => {
    setSelectedIndex((prev) => (prev + 1) % wheelOptions.length);
  };

  return (
    <div className="relative w-64 h-64 mx-auto mt-10">
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${wheelOptions[selectedIndex].color} shadow-2xl flex items-center justify-center text-white text-2xl font-semibold`}
        animate={{ rotate: 360 * selectedIndex }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {wheelOptions[selectedIndex].label}
      </motion.div>

      <button
        onClick={rotateWheel}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded-full border border-gray-700 shadow hover:bg-gray-700 transition-all flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Rotate
      </button>
    </div>
  );
};

export default SanctumSteeringWheel;
