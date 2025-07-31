import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const portals = [
    {
      name: '🛡 The Gauntlet',
      image: '/images/gauntlet/gauntlet-banner.jpg',
      link: '/gauntlet',
    },
    {
      name: '🎙 WorldSpeak Arena',
      image: '/images/worldspeak/worldspeak-banner.jpg',
      link: '/worldspeak',
    },
    {
      name: '📜 Codex Sanctum',
      image: '/images/codex/codex-banner.jpg',
      link: '/codex',
    },
    {
      name: '🔮 Oracle Temple',
      image: '/images/oracle/oracle-banner.jpg',
      link: '/oracle',
    },
    {
      name: '⚖️ Round Table',
      image: '/images/roundtable/roundtable-banner.jpg',
      link: '/roundtable',
    },
    {
      name: '🚪 Sentinel Gate (Entry)',
      image: '/images/entry/entry-sentinels-glow.png',
      link: '/sentinelgate',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white py-20 px-4 relative">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-blue-300"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌐 Welcome to The Forum 2025
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {(portals ?? []).map((portal, index) => (
          <motion.div
            key={portal.name}
            className="rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <Link to={portal.link}>
              <img
                src={portal.image}
                alt={portal.name}
                className="w-full h-52 object-cover"
              />
              <div className="bg-zinc-900 p-4 text-center text-lg font-semibold text-purple-200">
                {portal.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-gray-600">
        <span>Forum 2025 · All Rights Reserved</span>
      </div>
    </div>
  );
}
