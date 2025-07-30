import React, { useEffect, useState } from 'react';

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

const ArenaTimekeeperOverlay: React.FC = () => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded shadow-lg text-sm font-mono z-50">
      ⏱ Debate Timer: {formatTime(elapsed)}
    </div>
  );
};

export default ArenaTimekeeperOverlay;
