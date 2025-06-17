import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SentinelGate = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleAgree = () => {
    setAccepted(true);
    setTimeout(() => {
      navigate('/forum');
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Portal */}
      <img
        src="/images/entry/entry-background.jpg"
        alt="Background Portal"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Sentinel Statues */}
      <motion.img
        src="/images/entry/entry-sentinel-left.svg"
        alt="Sentinel Left"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: accepted ? '-120%' : '0%', opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 h-full z-10"
      />

      <motion.img
        src="/images/entry/entry-sentinel-right.svg"
        alt="Sentinel Right"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: accepted ? '120%' : '0%', opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 h-full z-10"
      />

      {/* Glow Overlay */}
      <img
        src="/images/entry/entry-sentinels-glow.png"
        alt="Glow Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none"
      />

      {/* Text + Button */}
      <div className="z-30 text-center text-white px-4">
        {!accepted && (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 drop-shadow-md">
              MORAL UNDERSTANDING
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-cyan-400 mt-2 mb-4">
              SENTINEL GATE
            </h2>
            <p className="text-sm md:text-lg max-w-xl mx-auto text-gray-300 mb-8">
              By entering the Forum, I agree to explore truth with humility,<br />
              defend my views with integrity, and listen with empathy.
            </p>
            <button
              onClick={handleAgree}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
            >
              I Agree. Enter the Forum.
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SentinelGate;
