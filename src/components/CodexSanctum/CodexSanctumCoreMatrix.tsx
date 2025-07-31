import React from 'react';
import { motion } from 'framer-motion';
import { FaDotCircle } from 'react-icons/fa';

const MATRIX_SIZE = 6;

const CodexSanctumCoreMatrix: React.FC = () => {
  const hexGrid = Array.from({ length: MATRIX_SIZE * MATRIX_SIZE });

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-zinc-950 to-black border border-purple-700 p-6 rounded-xl shadow-xl text-white">
      <h2 className="text-2xl font-bold text-purple-300 text-center mb-4">Codex Sanctum Core Matrix</h2>

      <div className="grid grid-cols-6 gap-3 justify-center items-center">
        {(hexGrid ?? []).map((_, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-12 h-12 bg-purple-700/10 border border-purple-500 rounded-full shadow-inner hover:bg-purple-600/20 transition"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
          >
            <FaDotCircle className="text-purple-400" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumCoreMatrix;
