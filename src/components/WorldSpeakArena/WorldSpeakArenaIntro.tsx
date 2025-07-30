import React from 'react';
import { motion } from 'framer-motion';

const WorldSpeakArenaIntro: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-5xl font-extrabold mb-4">Welcome to the WorldSpeak Arena</h1>
      <p className="text-lg max-w-xl">
        Dive into the world’s most dynamic arena for voice, sentiment, and resonance.
        Observe live arguments, analyze tonal clashes, and ride the pulse of global thought.
      </p>
    </motion.div>
  );
};

export default WorldSpeakArenaIntro;
