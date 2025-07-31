import React, { useState } from 'react';

interface Shard {
  id: number;
  name: string;
  essence: string;
  bound: boolean;
}

const GauntletLoreSanctuaryShardforge: React.FC = () => {
  const [shards, setShards] = useState<Shard[]>([]);
  const [name, setName] = useState('');
  const [essence, setEssence] = useState('');
  const [shardId, setShardId] = useState(1);

  const forgeShard = () => {
    if (!name || !essence) return;
    const newShard: Shard = {
      id: shardId,
      name,
      essence,
      bound: false,
    };
    setShards((prev) => [...prev, newShard]);
    setShardId((id) => id + 1);
    setName('');
    setEssence('');
  };

  const bindShard = (id: number) => {
    setShards((prev) =>
      (prev ?? []).map((shard) =>
        shard.id === id ? { ...shard, bound: true } : shard
      )
    );
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-indigo-500 shadow-xl">
      <h2 className="text-indigo-300 text-2xl font-bold mb-4">🧩 Shardforge: Lore Sanctuary</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Shard Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-400"
        />
        <input
          type="text"
          placeholder="Essence Description"
          value={essence}
          onChange={(e) => setEssence(e.target.value)}
          className="p-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-400"
        />
      </div>

      <button
        onClick={forgeShard}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded mb-6"
      >
        Forge Lore Shard
      </button>

      {shards.length > 0 && (
        <div>
          <h3 className="text-indigo-200 font-semibold mb-3">Forged Shards</h3>
          <ul className="space-y-3">
            {(shards ?? []).map((shard) => (
              <li
                key={shard.id}
                className="p-4 bg-zinc-800 border border-zinc-700 rounded shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-zinc-100 font-bold">{shard.name}</p>
                    <p className="text-zinc-400 text-sm">{shard.essence}</p>
                    {shard.bound && (
                      <p className="text-green-400 mt-1 text-xs">🔗 Bound to archive</p>
                    )}
                  </div>
                  {!shard.bound && (
                    <button
                      onClick={() => bindShard(shard.id)}
                      className="text-sm bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Bind
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GauntletLoreSanctuaryShardforge;
