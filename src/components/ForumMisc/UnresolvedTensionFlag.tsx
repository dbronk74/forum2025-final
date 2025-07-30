// src/components/ForumMisc/UnresolvedTensionFlag.tsx

import React, { useState, useEffect } from 'react';
import { MdWarningAmber } from 'react-icons/md';
import { motion } from 'framer-motion';

type TensionFlagProps = {
  message?: string;
  severity?: 'low' | 'medium' | 'high';
};

const severityColors = {
  low: 'text-yellow-300 border-yellow-400',
  medium: 'text-orange-400 border-orange-500',
  high: 'text-red-500 border-red-600',
};

export default function UnresolvedTensionFlag({
  message = 'Unresolved tension detected in discourse.',
  severity = 'medium',
}: TensionFlagProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className={`border rounded-lg p-4 bg-zinc-900 shadow-md flex items-center space-x-3 max-w-md mx-auto mt-4 ${severityColors[severity]}`}
      animate={{ opacity: visible ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <MdWarningAmber size={24} className="flex-shrink-0 animate-pulse" />
      <div className="flex-1">
        <p className="text-sm font-semibold">{message}</p>
        <p className="text-xs opacity-70">Severity: {severity.toUpperCase()}</p>
      </div>
    </motion.div>
  );
}
