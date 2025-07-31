import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems: { name: string; path: string }[] = [
  { name: 'Home', path: '/' },
  { name: 'Gauntlet', path: '/gauntlet' },
  { name: 'WorldSpeak', path: '/worldspeak' },
  { name: 'Round Table', path: '/roundtable' },
  { name: 'Codex Sanctum', path: '/codexsanctum' },
  { name: 'Oracle Sanctum', path: '/oracle_sanctum' },
  { name: 'Inner Temple', path: '/innertemple' },
  { name: 'ForumTube', path: '/forumtube' },
  { name: 'Compass Council', path: '/compasscouncil' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-wide text-purple-400"
        >
          The Forum 2025
        </motion.div>
        <div className="hidden md:flex space-x-6 text-sm">
          {(navItems ?? []).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-purple-300 transition ${
                location.pathname === item.path ? 'text-purple-500 underline' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
