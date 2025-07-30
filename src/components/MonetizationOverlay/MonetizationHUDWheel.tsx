import React from 'react';

const MonetizationHUDWheel: React.FC = () => {
  return (
    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center shadow-xl">
      <div className="text-center">
        <p className="text-lg font-bold">💰 Monetization HUD</p>
        <p className="text-sm">Ad, Bet, Vault</p>
      </div>
    </div>
  );
};

export default MonetizationHUDWheel;
