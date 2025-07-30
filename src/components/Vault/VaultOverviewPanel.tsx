import React from 'react';

const VaultOverviewPanel: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-900 to-amber-500 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-3">Vault Overview</h2>
      <p className="text-sm mb-4">
        The Vault serves as your centralized ledger for all monetary interactions across The Forum. Here, you can monitor earnings, withdrawals, deposits, and bonus credits earned from Gauntlet challenges, ads, and faction activity.
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-yellow-800 bg-opacity-40 p-3 rounded-lg shadow-inner">
          <p className="font-semibold">Total Earnings</p>
          <p className="text-lg font-mono">$807.20</p>
        </div>
        <div className="bg-yellow-800 bg-opacity-40 p-3 rounded-lg shadow-inner">
          <p className="font-semibold">Available Balance</p>
          <p className="text-lg font-mono">$504.65</p>
        </div>
        <div className="bg-yellow-800 bg-opacity-40 p-3 rounded-lg shadow-inner">
          <p className="font-semibold">Pending Payout</p>
          <p className="text-lg font-mono">$189.25</p>
        </div>
        <div className="bg-yellow-800 bg-opacity-40 p-3 rounded-lg shadow-inner">
          <p className="font-semibold">Last Activity</p>
          <p className="text-lg font-mono">Jul 6, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default VaultOverviewPanel;
