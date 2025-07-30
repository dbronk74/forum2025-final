import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface SignalAmplifierProps {
  label?: string;
  signalStrength: number; // 0 to 1
  isActive?: boolean;
  onAmplify?: () => void;
}

const SignalAmplifier: React.FC<SignalAmplifierProps> = ({
  label = 'Amplify',
  signalStrength,
  isActive = false,
  onAmplify,
}) => {
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    if (isActive) {
      setPulsing(true);
      const timeout = setTimeout(() => setPulsing(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <div className="relative w-full max-w-xs mx-auto flex flex-col items-center text-center text-slate-200">
      <motion.div
        className="relative w-24 h-24 rounded-full border-4 border-indigo-500 flex items-center justify-center bg-slate-800 shadow-md"
        animate={{
          scale: pulsing ? [1, 1.1, 1] : 1,
          boxShadow: pulsing
            ? ['0 0 0px rgba(99,102,241,0.4)', '0 0 12px rgba(99,102,241,0.8)', '0 0 0px rgba(99,102,241,0.4)']
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.8 }}
        onClick={onAmplify}
      >
        <Volume2 className="w-10 h-10 text-indigo-400" />
      </motion.div>

      <div className="mt-2 text-sm">{label}</div>

      <div className="w-full h-2 mt-3 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${signalStrength * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-indigo-600 rounded shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Boosted!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignalAmplifier;
