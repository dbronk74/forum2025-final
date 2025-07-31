import React from 'react';
import { motion } from 'framer-motion';

const VaultDashboard: React.FC = () => {
  const earnings = 1243.57;
  const pending = 315.20;
  const withdrawals = 928.37;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">💰 Monetization Vault</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-400">Total Earnings</p>
          <p className="text-xl font-semibold text-green-400">${(earnings ?? 0).toFixed(2)}</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-400">Pending Payouts</p>
          <p className="text-xl font-semibold text-yellow-400">${(pending ?? 0).toFixed(2)}</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-400">Withdrawn</p>
          <p className="text-xl font-semibold text-blue-400">${(withdrawals ?? 0).toFixed(2)}</p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition">
          Request Withdrawal
        </button>
      </div>
    </motion.div>
  );
};

export default VaultDashboard;
