import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <motion.h1
        className="text-6xl font-extrabold text-red-500 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      <Link
        to="/"
        className="text-purple-300 underline hover:text-purple-500 transition text-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
