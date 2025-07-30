import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/forum' },
  { name: 'Gauntlet', path: '/gauntlet' },
  { name: 'Codex', path: '/codex' },
  { name: 'Introspect', path: '/introspect' },
  { name: 'Mythic', path: '/mythic' },
];

export default function BranchHeader() {
  const location = useLocation();

  return (
    <motion.nav
      className="w-full flex justify-center space-x-6 py-6 bg-black/70 backdrop-blur-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`px-4 py-2 rounded-md transition-all duration-300 text-sm font-semibold
              ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300 hover:text-white'}`}
          >
            {item.name}
          </Link>
        );
      })}
    </motion.nav>
  );
}
