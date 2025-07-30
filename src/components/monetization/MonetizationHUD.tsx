import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoins, FaTv, FaTrophy, FaUserCog } from 'react-icons/fa';

const MonetizationHUD: React.FC = () => {
  const navigate = useNavigate();

  const shortcuts = [
    { icon: <FaCoins />, label: 'Earnings', path: '/earnings' },
    { icon: <FaTrophy />, label: 'Wager', path: '/bet-panel' },
    { icon: <FaTv />, label: 'Ad Reward', path: '/claim-reward' },
    { icon: <FaUserCog />, label: 'Creator Setup', path: '/creator-setup' },
  ];

  return (
    <motion.div
      className="fixed bottom-6 right-6 bg-black bg-opacity-80 text-white rounded-xl shadow-lg p-3 space-y-2 z-50 border border-lime-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center text-lime-300 font-bold mb-1">💼 Monetization</div>
      {shortcuts.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-center gap-2 px-3 py-1 hover:bg-lime-800/50 rounded-md text-sm transition"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </motion.div>
  );
};

export default MonetizationHUD;
