import React from 'react';
import { ScrollText, LockKeyhole } from 'lucide-react';

const mockVaultEntries = [
  {
    id: 1,
    title: 'Celestial Doctrine Fragment',
    description: 'Recovered shard of the Verse Path trials.',
    sealed: false,
  },
  {
    id: 2,
    title: 'Echo of Founding Edict',
    description: 'An encrypted decree from the Council of Dawn.',
    sealed: true,
  },
  {
    id: 3,
    title: 'Glyph Protocol Record',
    description: 'Ancient instructional sequence for glyph calibration.',
    sealed: false,
  },
];

const ArchiviumVault: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-black rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-slate-700 mt-10">
      <h2 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
        <ScrollText className="w-6 h-6 text-amber-400" />
        Archivium Vault
      </h2>

      <ul className="space-y-4">
        {(mockVaultEntries ?? []).map((entry) => (
          <li
            key={entry.id}
            className={`border rounded-lg p-4 transition-all ${
              entry.sealed
                ? 'bg-slate-800 border-slate-700 opacity-70 cursor-not-allowed'
                : 'bg-slate-900 border-slate-600 hover:border-amber-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
              {entry.sealed && (
                <LockKeyhole className="w-5 h-5 text-red-500" title="Sealed Record" />
              )}
            </div>
            <p className="text-sm text-slate-400">{entry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiviumVault;
