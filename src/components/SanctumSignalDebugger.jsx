import React, { useEffect, useState } from 'react';

export default function SanctumSignalDebugger() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignals((prev) => {
        const next = [...prev, `Signal-${Date.now().toString().slice(-5)}`];
        return next.slice(-5);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/70 text-green-300 text-xs font-mono p-3 rounded-lg shadow-xl w-60">
      <div className="text-sm font-semibold text-white mb-1">Sanctum Debug Signals</div>
      <ul className="list-disc list-inside space-y-1">
        {signals.map((sig, i) => (
          <li key={i}>{sig}</li>
        ))}
      </ul>
    </div>
  );
}
