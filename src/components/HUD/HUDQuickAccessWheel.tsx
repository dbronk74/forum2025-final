// src/components/Gauntlet/HUDQuickAccessWheel.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaScroll,
  FaCoins,
  FaCogs,
  FaEye,
  FaCommentDots,
} from 'react-icons/fa';

const icons = [
  { icon: <FaMapMarkedAlt />, label: 'Activity Map' },
  { icon: <FaScroll />, label: 'Personal Scroll' },
  { icon: <FaCoins />, label: 'Vault' },
  { icon: <FaCogs />, label: 'Settings' },
  { icon: <FaEye />, label: 'Spectator View' },
  { icon: <FaCommentDots />, label: 'Commentary' },
];

const HUDQuickAccessWheel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const radius = 90;

  const toggleWheel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleWheel}
        className="w-14 h-14 bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg"
        whileTap={{ scale: 0.9 }}
      >
        ☰
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute bottom-16 right-0 w-56 h-56"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {icons.map((item, index) => {
            const angle = (360 / icons.length) * index;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={index}
                className="absolute w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl shadow-md"
                style={{ left: `${x + 56}px`, bottom: `${y + 56}px` }}
                whileHover={{ scale: 1.2 }}
                title={item.label}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default HUDQuickAccessWheel;
