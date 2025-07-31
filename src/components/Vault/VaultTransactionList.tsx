import React from 'react';

const VaultTransactionList: React.FC = () => {
  const transactions = [
    { date: 'Jul 6, 2025', type: 'Ad Reward', amount: '+$15.00' },
    { date: 'Jul 5, 2025', type: 'Bet Winnings', amount: '+$42.00' },
    { date: 'Jul 4, 2025', type: 'Withdrawal', amount: '-$100.00' },
    { date: 'Jul 3, 2025', type: 'Faction Bonus', amount: '+$23.50' },
    { date: 'Jul 1, 2025', type: 'Vault Unlock', amount: '-$20.00' },
  ];

  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-zinc-300 border-b border-zinc-700">
            <th className="text-left pb-2">Date</th>
            <th className="text-left pb-2">Type</th>
            <th className="text-right pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {(transactions ?? []).map((t, index) => (
            <tr key={index} className="border-b border-zinc-800">
              <td className="py-2">{t.date}</td>
              <td className="py-2">{t.type}</td>
              <td className="py-2 text-right">{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VaultTransactionList;
