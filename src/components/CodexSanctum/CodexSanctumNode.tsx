import React from 'react';
import { motion } from 'framer-motion';

interface CodexSanctumNodeProps {
  label: string;
  index: number;
  onClick?: () => void;
  isActive?: boolean;
}

const CodexSanctumNode: React.FC<CodexSanctumNodeProps> = ({ label, index, onClick, isActive }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full cursor-pointer 
        w-24 h-24 border-2 transition-all duration-300
        ${
          isActive
            ? 'bg-purple-800 border-purple-300 text-white shadow-lg'
            : 'bg-zinc-900 border-purple-700 text-purple-300'
        }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <span className="text-sm font-semibold text-center">{label}</span>
    </motion.div>
  );
};

export default CodexSanctumNode;
