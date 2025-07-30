import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa';

const CompassMoralNeedle: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-10 bg-slate-950 text-white rounded-2xl shadow-lg border border-slate-800 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6 tracking-wide text-center">Moral Needle Alignment</h2>
      <div className="relative w-48 h-48 rounded-full border-4 border-yellow-300 flex items-center justify-center">
        <motion.div
          className="absolute"
          initial={{ rotate: -90 }}
          animate={{ rotate: 45 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <FaLocationArrow size={36} className="text-yellow-300 drop-shadow-lg" />
        </motion.div>
        <div className="absolute bottom-0 text-xs text-slate-400">Self</div>
        <div className="absolute top-0 text-xs text-slate-400">Others</div>
        <div className="absolute left-0 text-xs text-slate-400 rotate-[-90deg]">Rules</div>
        <div className="absolute right-0 text-xs text-slate-400 rotate-[90deg]">Care</div>
      </div>
    </div>
  );
};

export default CompassMoralNeedle;
