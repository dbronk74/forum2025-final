import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Gauntlet', path: '/gauntlet' },
  { label: 'WorldSpeak', path: '/worldspeak' },
  { label: 'Oracle', path: '/oracle' },
  { label: 'Codex', path: '/codex' },
  { label: 'Compass', path: '/compass' },
  { label: 'Vault', path: '/vault' },
  { label: 'Temple', path: '/temple' },
  { label: 'ForumTube', path: '/forumtube' },
];

const ForumNavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full fixed top-0 z-50 bg-black bg-opacity-80 backdrop-blur border-b border-purple-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-wide text-purple-300">
          Forum 2025
        </div>

        <div className="flex gap-6 text-sm font-medium">
          {(navLinks ?? []).map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link key={link.path} to={link.path} className="relative group">
                <span className={`transition-colors ${isActive ? 'text-purple-400' : 'text-gray-300 group-hover:text-purple-200'}`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 rounded"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Reserved for user avatar, notifications, or dropdown */}
          <div className="w-8 h-8 rounded-full bg-purple-600 shadow-inner border border-purple-400" />
        </div>
      </div>
    </nav>
  );
};

export default ForumNavigationBar;
