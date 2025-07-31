import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const auraColors = ['from-purple-500 to-pink-500', 'from-emerald-400 to-cyan-500'];

const GauntletTrialAura: React.FC = () => {
  const participants = useSelector((state: RootState) => state.gauntlet.participants);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      {(participants ?? []).map((participant, index) => (
        <motion.div
          key={participant.id}
          className={clsx(
            'absolute w-64 h-64 rounded-full bg-gradient-to-br blur-2xl opacity-30 animate-pulse',
            auraColors[index % auraColors.length]
          )}
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: 1.05, opacity: 0.35 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            top: `${30 + index * 20}%`,
            left: `${30 + index * 20}%`,
          }}
        />
      ))}
    </div>
  );
};

export default GauntletTrialAura;
