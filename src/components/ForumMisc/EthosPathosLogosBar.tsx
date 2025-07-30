import React from 'react';
import { motion } from 'framer-motion';

interface AppealValues {
  ethos: number; // 0–100
  pathos: number; // 0–100
  logos: number; // 0–100
}

interface EthosPathosLogosBarProps {
  values: AppealValues;
}

const AppealSegment = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex flex-col items-center mx-2 w-1/3">
    <motion.div
      className={`w-6 rounded-full ${color} shadow-md`}
      style={{ height: `${value}%`, minHeight: '10px' }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
    <div className="text-xs text-white mt-1 tracking-wide">{label}</div>
  </div>
);

const EthosPathosLogosBar: React.FC<EthosPathosLogosBarProps> = ({ values }) => {
  const total = values.ethos + values.pathos + values.logos;
  const normalize = (val: number) => (total === 0 ? 0 : (val / total) * 100);

  return (
    <div className="w-full h-36 flex justify-around items-end bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-4 ring-1 ring-white/10 shadow-inner">
      <AppealSegment label="Ethos" value={normalize(values.ethos)} color="bg-blue-500" />
      <AppealSegment label="Pathos" value={normalize(values.pathos)} color="bg-rose-500" />
      <AppealSegment label="Logos" value={normalize(values.logos)} color="bg-emerald-500" />
    </div>
  );
};

export default EthosPathosLogosBar;
