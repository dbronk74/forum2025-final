import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodexLoreWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  glyphSymbol?: string;
}

const CodexLoreWindow: React.FC<CodexLoreWindowProps> = ({
  isOpen,
  onClose,
  title,
  content,
  glyphSymbol,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-zinc-900 border border-purple-600 rounded-xl shadow-2xl p-6 w-full max-w-3xl mx-4 relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-zinc-400 hover:text-purple-300 transition"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-purple-300">{title}</h2>
              {glyphSymbol && (
                <div className="mt-2 text-4xl text-purple-500">{glyphSymbol}</div>
              )}
            </div>

            <div className="text-zinc-200 text-sm max-h-[50vh] overflow-y-auto leading-relaxed px-1">
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodexLoreWindow;
