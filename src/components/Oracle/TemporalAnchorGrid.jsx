import React from 'react';
export default function TemporalAnchorGrid() {
  const anchors = Array.from({ length: 9 }, (_, i) => `Anchor ${i + 1}`);
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-black/70 text-white rounded-lg">
      {(anchors ?? []).map((a, i) => (
        <div key={i} className="bg-purple-900 p-2 text-center rounded shadow">{a}</div>
      ))}
    </div>
  );
}