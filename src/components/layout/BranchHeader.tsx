import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', hoverClass: 'hover:text-lime-400', activeClass: 'text-lime-400 underline' },
  { label: 'Vault', path: '/vault', hoverClass: 'hover:text-yellow-400', activeClass: 'text-yellow-400 underline' },
  { label: 'Earnings', path: '/earnings', hoverClass: 'hover:text-lime-400', activeClass: 'text-lime-400 underline' },
  { label: 'Wager', path: '/bet-panel', hoverClass: 'hover:text-cyan-400', activeClass: 'text-cyan-400 underline' },
  { label: 'Ad Reward', path: '/claim-reward', hoverClass: 'hover:text-pink-400', activeClass: 'text-pink-400 underline' },
  { label: 'Creator Setup', path: '/creator-setup', hoverClass: 'hover:text-indigo-400', activeClass: 'text-indigo-400 underline' },
];

const BranchHeader: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-black via-zinc-900 to-black p-4 flex justify-between items-center shadow-md select-none">
      <div className="text-white text-2xl font-bold tracking-wider cursor-default">
        👉 The Forum 2025
      </div>

      <nav className="flex gap-4">
        {navItems.map(({ label, path, hoverClass, activeClass }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`text-white transition font-semibold ${hoverClass} ${isActive ? activeClass : ''}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default BranchHeader;
