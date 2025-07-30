import React, { useState } from 'react';

interface LoreEcho {
  id: string;
  originalText: string;
  editedText: string;
  author?: string;
}

const GauntletLoreEchoEditor: React.FC = () => {
  const [echoes, setEchoes] = useState<LoreEcho[]>([
    {
      id: '1',
      originalText: 'The First Flame birthed both light and shadow.',
      editedText: '',
      author: 'Archivist Solon',
    },
    {
      id: '2',
      originalText: 'Only those who endure the Gauntlet may hear the Celestial Choir.',
      editedText: '',
    },
  ]);

  const updateEditedText = (id: string, newText: string) => {
    setEchoes((prev) =>
      prev.map((echo) =>
        echo.id === id ? { ...echo, editedText: newText } : echo
      )
    );
  };

  const saveEcho = (id: string) => {
    console.log('Saved edit for echo:', id);
    // Here, send to backend or mark as finalized
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-indigo-500 shadow-lg">
      <h2 className="text-indigo-300 text-xl font-bold mb-4">📜 Lore Echo Editor</h2>
      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
        {echoes.map((echo) => (
          <div
            key={echo.id}
            className="bg-zinc-800 p-4 rounded-lg border border-zinc-700"
          >
            <div className="text-zinc-400 text-sm mb-1">
              {echo.author ? `Echo from ${echo.author}` : 'Anonymous Echo'}
            </div>
            <div className="text-zinc-200 italic mb-2">"{echo.originalText}"</div>
            <textarea
              value={echo.editedText}
              onChange={(e) => updateEditedText(echo.id, e.target.value)}
              placeholder="Propose an edit or interpretation..."
              className="w-full p-2 rounded-md bg-zinc-700 text-zinc-100 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
            />
            <button
              onClick={() => saveEcho(echo.id)}
              className="mt-2 px-4 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              Save Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GauntletLoreEchoEditor;
