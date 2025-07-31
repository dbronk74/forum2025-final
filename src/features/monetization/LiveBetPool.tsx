// src/components/Vault/LiveBetPool.tsx
import React, { useState, useEffect } from "react";

const LiveBetPool = () => {
  const [countdown, setCountdown] = useState(30);
  const [bets, setBets] = useState([
    { amount: 50, side: "win" },
    { amount: 20, side: "lose" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl w-full max-w-md mx-auto mt-10 shadow-lg border border-purple-500">
      <h2 className="text-2xl font-semibold mb-4 text-purple-300">Live Bet Pool</h2>
      <p className="mb-4 text-sm text-gray-300">⏳ Time Left: <span className="font-bold">{countdown}s</span></p>

      <ul className="mb-4 text-sm">
        {(bets ?? []).map((bet, i) => (
          <li key={i} className="py-1">
            💰 <span className="text-green-400">${bet.amount}</span> on <span className="font-bold text-yellow-400">{bet.side}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 px-4 rounded-lg font-medium">
        Join This Bet
      </button>
    </div>
  );
};

export default LiveBetPool;
