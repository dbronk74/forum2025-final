import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function CinematicIntroPanel({ title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-gradient-to-r from-black via-indigo-800 to-black p-8 rounded-lg shadow-xl mb-8"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-200 mb-2 tracking-wide drop-shadow-md">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-center text-indigo-300 font-light">
        {subtitle}
      </p>
    </motion.div>
  );
}
