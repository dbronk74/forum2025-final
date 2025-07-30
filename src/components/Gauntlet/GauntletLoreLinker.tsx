import React, { useState } from 'react';

interface LoreNode {
  id: string;
  title: string;
  content: string;
}

const mockLoreEntries: LoreNode[] = [
  { id: 'a1', title: 'The Origin Flame', content: 'The flame that birthed all realms.' },
  { id: 'a2', title: 'The Hollow Rift', content: 'Where time fractures into memory and myth.' },
  { id: 'a3', title: 'Echo of the First Duel', content: 'Two voices clashed beneath the Sanctum sky.' },
  { id: 'a4', title: 'The Covenant Sigil', content: 'Symbol of unity among the fragmented factions.' },
];

const GauntletLoreLinker: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [links, setLinks] = useState<[string, string][]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else if (prev.length === 2) {
        return [id]; // Start a new link selection
      } else {
        return [...prev, id];
      }
    });
  };

  const createLink = () => {
    if (selectedIds.length === 2) {
      setLinks((prev) => [...prev, [selectedIds[0], selectedIds[1]]]);
      setSelectedIds([]);
    }
  };

  const getTitleById = (id: string) => {
    const entry = mockLoreEntries.find((item) => item.id === id);
    return entry ? entry.title : 'Unknown';
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-purple-500 shadow-lg">
      <h2 className="text-purple-300 text-xl font-bold mb-4">🔗 Lore Linker</h2>

      <div className="grid grid-cols-2 gap-4">
        {mockLoreEntries.map((entry) => (
          <div
            key={entry.id}
            onClick={() => toggleSelect(entry.id)}
            className={`cursor-pointer p-4 rounded-md border ${
              selectedIds.includes(entry.id)
                ? 'border-purple-400 bg-zinc-800'
                : 'border-zinc-700 bg-zinc-800 hover:border-purple-300'
            }`}
          >
            <div className="font-semibold text-zinc-200">{entry.title}</div>
            <div className="text-sm text-zinc-400 mt-1">{entry.content}</div>
          </div>
        ))}
      </div>

      <button
        onClick={createLink}
        disabled={selectedIds.length !== 2}
        className={`mt-4 px-4 py-2 text-sm rounded ${
          selectedIds.length === 2
            ? 'bg-purple-600 text-white hover:bg-purple-500'
            : 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
        }`}
      >
        Link Selected Lore Nodes
      </button>

      {links.length > 0 && (
        <div className="mt-6">
          <h3 className="text-purple-200 font-semibold mb-2">Linked Lore Threads:</h3>
          <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">
            {links.map(([id1, id2], index) => (
              <li key={index}>
                <strong>{getTitleById(id1)}</strong> ↔ <strong>{getTitleById(id2)}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GauntletLoreLinker;
