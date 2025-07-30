import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { motion } from 'framer-motion';

const EarningsDisplay: React.FC = () => {
  const { balance, earnedTotal, spentTotal } = useSelector((state: RootState) => state.creditLedger);

  return (
    <motion.div
      className="bg-black text-lime-400 p-4 rounded-lg shadow-lg max-w-md mx-auto text-center space-y-2 border border-lime-500"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-bold tracking-wide">💳 Credit Summary</h2>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold text-white">Balance</p>
          <p className="text-xl">{balance}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Earned</p>
          <p className="text-xl">+{earnedTotal}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Spent</p>
          <p className="text-xl text-red-400">–{spentTotal}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EarningsDisplay;
