// src/components/InnerTemple/ScrollOfNotes.jsx

import React, { useState } from 'react';

const ScrollOfNotes = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState('');

  const handleSave = () => {
    setSavedNotes(notes);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg text-white select-none">
      <h2 className="text-xl font-semibold mb-4">Scroll of Notes</h2>
      <textarea
        className="w-full h-40 p-3 rounded-md bg-zinc-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Write your thoughts here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-4 px-5 py-2 bg-indigo-700 hover:bg-indigo-800 rounded-md font-semibold transition"
      >
        Save Notes
      </button>
      {savedNotes && (
        <div className="mt-6 p-4 bg-indigo-800 rounded-md whitespace-pre-wrap">
          <h3 className="font-semibold mb-2">Saved Notes:</h3>
          <p>{savedNotes}</p>
        </div>
      )}
    </div>
  );
};

export default ScrollOfNotes;
