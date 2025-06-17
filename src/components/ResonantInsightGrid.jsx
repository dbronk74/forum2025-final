import React, { useEffect, useState } from 'react';

const generateGrid = (rows, cols) => {
  const grid = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push(Math.random());
    }
    grid.push(row);
  }
  return grid;
};

export default function ResonantInsightGrid({ rows = 6, cols = 12 }) {
  const [grid, setGrid] = useState(generateGrid(rows, cols));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(generateGrid(rows, cols));
    }, 1000);
    return () => clearInterval(interval);
  }, [rows, cols]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 p-2 flex justify-center pointer-events-none">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {grid.flat().map((intensity, idx) => (
          <div
            key={idx}
            className="w-3 h-3 rounded-full transition duration-500"
            style={{
              backgroundColor: `rgba(147, 197, 253, ${intensity})`,
              boxShadow: `0 0 6px rgba(147, 197, 253, ${intensity})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
