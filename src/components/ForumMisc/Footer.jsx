// src/components/ForumMisc/Footer.jsx

import React from 'react';
import { FaGithub, FaTwitter, FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white text-sm py-4 mt-10 border-t border-purple-800 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FaRegCopyright className="text-gray-400" />
          <span className="text-gray-300">2025 The Forum. All rights reserved.</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/forum2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://twitter.com/forum2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
