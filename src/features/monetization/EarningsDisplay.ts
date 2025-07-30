import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addCredits } from '../redux/slices/CreditLedgerSlice';

const EarningsDisplay: React.FC = () => {
  const { balance, earningsHistory, spendLogs } = useSelector((state: any) => state.creditLedger);
  const dispatch = useDispatch();
  const lastTransaction = [...earningsHistory, ...spendLogs.map(log => -log.amount)].sort((a, b) => b - a)[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>💰 Total Credits: {balance}</p>
      <p>🔄 Last: {lastTransaction > 0 ? `Earned ${lastTransaction}` : `Spent ${-lastTransaction}`}</p>
      <button onClick={() => dispatch(addCredits({ amount: 5, source: 'ad' }))}>⏱️ Watch More Ads</button>
    </motion.div>
  );
};

export default EarningsDisplay;