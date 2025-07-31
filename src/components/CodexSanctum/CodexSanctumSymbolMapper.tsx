import React, { useEffect, useState } from 'react';

const symbols = ['✶', '⟁', '⧫', '⚶', '☌', '⟡', '✷', '⧉', '☍', '⫷'];

const generateSymbolGrid = (rows: number, cols: number): string[][] => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      symbols[Math.floor(Math.random() * symbols.length)]
    )
  );
};

const CodexSanctumSymbolMapper: React.FC = () => {
  const [grid, setGrid] = useState<string[][]>(generateSymbolGrid(6, 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(generateSymbolGrid(6, 10));
    }, 6000); // Refresh symbols every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-purple-900 to-black rounded-xl border border-purple-700 shadow-lg p-4">
      <div className="text-purple-300 text-sm mb-3 tracking-widest font-mono">
        SYMBOL MAPPING ARRAY
      </div>
      <div className="grid grid-cols-10 gap-2">
        {(grid ?? []).map((row, rowIndex) =>
          (row ?? []).map((symbol, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center w-8 h-8 bg-zinc-800 rounded shadow text-purple-100 text-lg hover:bg-purple-700 hover:text-white transition-all duration-300"
            >
              {symbol}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CodexSanctumSymbolMapper;
