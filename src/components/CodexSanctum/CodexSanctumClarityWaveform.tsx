import React, { useEffect, useState } from 'react';

const CodexSanctumClarityWaveform: React.FC = () => {
  const [waveData, setWaveData] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = Array.from({ length: 60 }, () =>
        Math.floor(Math.random() * 40) + 10
      );
      setWaveData(newData);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl shadow-lg border border-purple-700 w-full max-w-3xl mx-auto">
      <h2 className="text-xl text-purple-300 font-bold mb-4 text-center">
        Codex Sanctum: Clarity Waveform
      </h2>

      <div className="flex items-end h-40 overflow-hidden space-x-[2px] px-1 bg-black border border-zinc-700 rounded">
        {(waveData ?? []).map((height, index) => (
          <div
            key={index}
            className="w-[4px] bg-purple-500 rounded-t"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexSanctumClarityWaveform;
