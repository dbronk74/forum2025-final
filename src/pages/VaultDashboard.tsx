import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const VaultDashboard: React.FC = () => {
  const balance = useSelector((state: RootState) => state.creditLedger.balance);
  const transactions = useSelector((state: RootState) => state.creditLedger.transactions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-lime-400">Vault Dashboard</h1>
      <p className="mb-8 text-zinc-300">
        Monitor your monetization status, view earnings, join debates with wagers, and manage your creator settings.
      </p>

      <div className="bg-zinc-800 p-6 rounded-xl mb-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-lime-300 mb-4">Current Balance</h2>
        <p className="text-5xl font-bold text-white">${balance.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        <Link to="/earnings" className="bg-zinc-900 hover:bg-zinc-800 p-5 rounded-lg transition border border-lime-700">
          <h3 className="text-xl font-bold text-lime-400 mb-2">💰 Earnings</h3>
          <p className="text-zinc-300">View your earning history, withdrawal stats, and ad revenue.</p>
        </Link>

        <Link to="/creator-setup" className="bg-zinc-900 hover:bg-zinc-800 p-5 rounded-lg transition border border-lime-700">
          <h3 className="text-xl font-bold text-lime-400 mb-2">🧠 Creator Setup</h3>
          <p className="text-zinc-300">Enable monetization on your content and configure payout methods.</p>
        </Link>

        <Link to="/bet-panel" className="bg-zinc-900 hover:bg-zinc-800 p-5 rounded-lg transition border border-lime-700">
          <h3 className="text-xl font-bold text-lime-400 mb-2">🎯 Bet Panel</h3>
          <p className="text-zinc-300">Wager credits on upcoming Gauntlet debates or host betting pools.</p>
        </Link>

        <Link to="/claim-reward" className="bg-zinc-900 hover:bg-zinc-800 p-5 rounded-lg transition border border-lime-700">
          <h3 className="text-xl font-bold text-lime-400 mb-2">🎁 Claim Reward</h3>
          <p className="text-zinc-300">Watch an ad or complete a task to instantly earn Forum Credits.</p>
        </Link>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg border border-lime-700">
        <h2 className="text-2xl font-semibold text-lime-300 mb-4">Recent Transactions</h2>
        {transactions.length === 0 ? (
          <p className="text-zinc-400">No transactions yet.</p>
        ) : (
          <ul className="divide-y divide-zinc-700">
            {transactions.slice(0, 5).map((tx, idx) => (
              <li key={idx} className="py-3 flex justify-between">
                <span className="text-zinc-300">{tx.description}</span>
                <span
                  className={`${
                    tx.amount >= 0 ? "text-green-400" : "text-red-400"
                  } font-semibold`}
                >
                  {tx.amount >= 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VaultDashboard;
