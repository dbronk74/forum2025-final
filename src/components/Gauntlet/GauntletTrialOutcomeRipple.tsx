import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const rippleVariants = {
  initial: { scale: 0, opacity: 0.5 },
  animate: { scale: 4, opacity: 0 },
};

const outcomeColors: Record<string, string> = {
  victory: 'bg-green-400',
  defeat: 'bg-red-400',
  draw: 'bg-yellow-300',
};

const GauntletTrialOutcomeRipple: React.FC = () => {
  const outcome = useSelector((state: RootState) => state.gauntlet.trialOutcome);
  const [showRipple, setShowRipple] = useState(false);

  useEffect(() => {
    if (outcome) {
      setShowRipple(true);
      const timeout = setTimeout(() => setShowRipple(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [outcome]);

  if (!outcome) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <AnimatePresence>
        {showRipple && (
          <motion.div
            className={clsx(
              'w-20 h-20 rounded-full',
              outcomeColors[outcome.result] || 'bg-gray-400'
            )}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GauntletTrialOutcomeRipple;
