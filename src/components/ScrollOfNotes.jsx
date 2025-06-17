import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollOfNotes() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState('');

  return (
    <motion.div
      drag
      dragConstraints={{ top: -500, bottom: 500, left: -500, right: 500 }}
      className="fixed bottom-28 left-6 z-50"
    >
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-300 hover:bg-yellow-400 text-black px-3 py-1 rounded-t-lg font-mono text-sm shadow-md"
      >
        🧾 Scroll
      </button>

      {open && (
        <div className="w-64 h-40 bg-yellow-100 border border-yellow-300 shadow-lg rounded-b-lg p-2 font-mono text-xs text-black overflow-auto resize">
          <textarea
            className="w-full h-full bg-transparent resize-none outline-none"
            placeholder="Write your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      )}
    </motion.div>
  );
}
