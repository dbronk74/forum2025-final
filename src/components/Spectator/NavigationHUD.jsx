import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gauntlet', label: 'Gauntlet' },
  { to: '/roundtable', label: 'Round Table' },
  { to: '/codex', label: 'Compass' },
  { to: '/oracle', label: 'Oracle' },
  { to: '/sanctum', label: 'Temple' },
  { to: '/forumtube', label: 'ForumTube' },
];

export default function NavigationHUD() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 border border-purple-700 px-4 py-2 rounded-full shadow-xl flex space-x-4 backdrop-blur-sm z-50"
    >
      {links.map((link, idx) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-xs text-purple-300 hover:text-white transition px-2"
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}
