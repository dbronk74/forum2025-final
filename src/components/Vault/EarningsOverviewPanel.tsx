import React from 'react';

const EarningsOverviewPanel: React.FC = () => {
  const earningsData = [
    { label: 'Ad Revenue', value: '$248.75' },
    { label: 'Gauntlet Winnings', value: '$420.10' },
    { label: 'Vault Bonuses', value: '$78.40' },
    { label: 'Affiliate Referrals', value: '$59.95' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-900 to-emerald-600 text-white p-6 rounded-xl shadow-xl w-full">
      <h2 className="text-2xl font-bold mb-4">Earnings Overview</h2>
      <ul className="space-y-2">
        {(earningsData ?? []).map((item, idx) => (
          <li key={idx} className="flex justify-between border-b border-emerald-300 pb-1">
            <span className="font-medium">{item.label}</span>
            <span className="font-mono">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarningsOverviewPanel;
