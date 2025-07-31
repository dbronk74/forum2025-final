import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaCompass, FaBrain, FaBalanceScale } from 'react-icons/fa';

const wisdomElements = [
  { icon: <FaRegLightbulb size={32} />, label: 'Insight' },
  { icon: <FaCompass size={32} />, label: 'Direction' },
  { icon: <FaBrain size={32} />, label: 'Reason' },
  { icon: <FaBalanceScale size={32} />, label: 'Judgment' },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  initial: { scale: 0.8, opacity: 0, rotate: -30 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 150, damping: 12 },
  },
};

const SteeringWisdomWheel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 tracking-wide">Steering Wisdom Wheel</h2>
      <motion.div
        className="grid grid-cols-2 gap-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {(wisdomElements ?? []).map((element, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-300 ease-in-out"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="mb-2 text-yellow-300">{element.icon}</div>
            <div className="text-sm font-medium uppercase tracking-widest">{element.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SteeringWisdomWheel;
