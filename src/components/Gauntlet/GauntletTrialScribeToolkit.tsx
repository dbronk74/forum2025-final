import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logTrialNote } from '../../state/slices/gauntletSlice';

const GauntletTrialScribeToolkit: React.FC = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleLogNote = () => {
    if (note.trim() === '') return;
    dispatch(logTrialNote({ note, timestamp: timestamp || new Date().toISOString() }));
    setNote('');
    setTimestamp('');
  };

  return (
    <div className="absolute right-8 bottom-8 bg-black/70 text-white p-4 rounded-lg shadow-lg w-72 z-40 backdrop-blur-md">
      <h3 className="text-lg font-semibold mb-2">Scribe Toolkit</h3>
      <textarea
        className="w-full p-2 rounded bg-gray-800 text-sm mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder="Type your note here..."
        value={note}
        rows={3}
        onChange={(e) => setNote(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-1 rounded bg-gray-800 text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        placeholder="Timestamp (optional)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button
        onClick={handleLogNote}
        className="w-full py-1 mt-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition"
      >
        Log Note
      </button>
    </div>
  );
};

export default GauntletTrialScribeToolkit;
