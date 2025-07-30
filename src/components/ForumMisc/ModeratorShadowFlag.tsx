// src/components/ForumMisc/ModeratorShadowFlag.tsx

import React, { useState } from 'react';
import { Flag, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModeratorShadowFlag() {
  const [flagged, setFlagged] = useState(false);

  const handleFlag = () => {
    setFlagged(true);
    // In production, this would also emit a socket or API call to backend moderator log
    console.log("🔒 Shadow flag triggered by moderator.");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {!flagged ? (
        <button
          onClick={handleFlag}
          className="flex items-center bg-gray-900 text-red-400 border border-red-500 px-3 py-2 rounded-md shadow hover:bg-red-950 transition"
        >
          <Flag size={16} className="mr-2" />
          Shadow Flag
        </button>
      ) : (
        <div className="flex items-center text-green-400 bg-gray-800 px-3 py-2 rounded-md border border-green-500 shadow">
          <EyeOff size={16} className="mr-2" />
          Flagged Silently
        </div>
      )}
    </motion.div>
  );
}
