import React from 'react'

const VaultCreditHistoryFeed = () => {
  const entries = [
    { date: '2025-07-08', action: 'Debate Win', amount: '+25c' },
    { date: '2025-07-06', action: 'Ad Watched', amount: '+5c' },
    { date: '2025-07-05', action: 'Claimed Reward', amount: '-10c' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Credit History</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        {entries.map((e, i) => (
          <li key={i} className="flex justify-between">
            <span>{e.date} – {e.action}</span>
            <span>{e.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VaultCreditHistoryFeed
