// src/components/InnerTemple/BranchFooter.tsx

import React from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const BranchFooter: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-6 mt-12 select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 The Forum. All rights reserved.</p>
        <div className="flex space-x-6 text-lg">
          <a
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-indigo-400 transition"
          >
            <FaDiscord />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BranchFooter;
