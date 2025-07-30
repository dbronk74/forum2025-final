// src/components/InnerTemple/ForumMoralCovenant.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pledges = [
  "I pledge to seek truth with humility.",
  "I vow to listen with an open mind.",
  "I commit to respectful and honest discourse.",
  "I promise to consider multiple perspectives.",
];

const ForumMoralCovenant: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <motion.div
      className="max-w-xl mx-auto bg-zinc-900 rounded-xl p-8 shadow-lg text-white text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-bold mb-4">Forum Moral Covenant</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-left text-lg">
        {pledges.map((pledge, idx) => (
          <li key={idx}>{pledge}</li>
        ))}
      </ul>
      {!accepted ? (
        <button
          onClick={handleAccept}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
        >
          I Accept
        </button>
      ) : (
        <p className="text-green-400 font-semibold">Thank you for upholding the covenant.</p>
      )}
    </motion.div>
  );
};

export default ForumMoralCovenant;
