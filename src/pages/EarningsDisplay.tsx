import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices/store';
import { motion } from 'framer-motion';

export default function EarningsDisplay() {
  const { balance, transactions } = useSelector((state: RootState) => state.creditLedger);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-green-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Earnings Overview
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Total Balance: <span className="text-green-300 font-semibold">${balance.toFixed(2)}</span>
      </motion.p>

      <div className="max-w-3xl mx-auto bg-zinc-800 p-6 rounded-lg shadow-lg space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet.</p>
        ) : (
          transactions.map((tx, i) => (
            <div key={i} className="flex justify-between text-sm border-b border-zinc-700 py-2">
              <span className="capitalize">{tx.type}</span>
              <span className="text-cyan-300">${tx.amount.toFixed(2)}</span>
              <span className="text-gray-400">{new Date(tx.timestamp).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
