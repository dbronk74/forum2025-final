import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-4 border-t border-purple-700">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm"
        >
          © {new Date().getFullYear()} The Forum 2025. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
