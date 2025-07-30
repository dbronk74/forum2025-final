// SanctumSignalDebugger.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const debugSignals = [
  { id: 1, label: 'Resonance Drift', status: 'Stable' },
  { id: 2, label: 'Echo Delay', status: 'Lag Detected' },
  { id: 3, label: 'Sigil Sync', status: 'Aligned' },
  { id: 4, label: 'Harmonic Loopback', status: 'Inverted' },
];

const SanctumSignalDebugger: React.FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const runDiagnostics = () => {
    const newLog = debugSignals.map(signal =>
      `[${signal.label}] → Status: ${signal.status}`
    );
    setLog(newLog);
  };

  return (
    <motion.div
      className="bg-slate-800 text-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-center mb-4">Signal Debugger</h2>
      <button
        onClick={runDiagnostics}
        className="bg-slate-600 hover:bg-slate-500 px-4 py-2 rounded mb-4 w-full"
      >
        Run Diagnostics
      </button>
      <div className="bg-slate-700 p-3 rounded h-40 overflow-y-auto text-sm font-mono">
        {log.length === 0 ? (
          <p className="text-slate-400">No diagnostics run yet.</p>
        ) : (
          log.map((entry, idx) => <p key={idx}>{entry}</p>)
        )}
      </div>
    </motion.div>
  );
};

export default SanctumSignalDebugger;
