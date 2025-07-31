// src/components/Gauntlet/MonetizationHUD.tsx

import React from 'react';
import { DollarSign, Wallet, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

type MonetizationHUDProps = {
  className?: string;
};

const MonetizationHUD: React.FC<MonetizationHUDProps> = ({ className }) => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: 'Vault',
      icon: <Wallet className="w-5 h-5" />,
      route: '/vault',
    },
    {
      label: 'Earnings',
      icon: <DollarSign className="w-5 h-5" />,
      route: '/vault/earnings',
    },
    {
      label: 'Rewards',
      icon: <Trophy className="w-5 h-5" />,
      route: '/vault/rewards',
    },
  ];

  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-50 bg-black/70 backdrop-blur-md border border-purple-500 rounded-lg p-4 space-y-2 shadow-2xl',
        className
      )}
    >
      {(buttons ?? []).map(({ label, icon, route }) => (
        <button
          key={label}
          onClick={() => navigate(route)}
          className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white text-sm font-semibold transition"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};

export default MonetizationHUD;
