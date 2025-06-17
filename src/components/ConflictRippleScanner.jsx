import React, { useEffect, useState } from 'react';
export default function ConflictRippleScanner() {
  const [ripples, setRipples] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setRipples(r => r + 1), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-4 bg-red-900 text-white rounded shadow">
      <h2 className="text-lg font-semibold">Conflict Ripples</h2>
      <p className="text-sm">Detected Ripples: {ripples}</p>
    </div>
  );
}