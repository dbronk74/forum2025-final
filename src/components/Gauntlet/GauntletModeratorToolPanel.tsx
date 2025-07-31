import React, { useState } from 'react';

const GauntletModeratorToolPanel: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [flaggedUsers, setFlaggedUsers] = useState<string[]>([]);
  const [userToFlag, setUserToFlag] = useState('');

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePause = () => setIsPaused(!isPaused);

  const flagUser = () => {
    if (userToFlag && !flaggedUsers.includes(userToFlag)) {
      setFlaggedUsers([...flaggedUsers, userToFlag]);
      setUserToFlag('');
    }
  };

  const resetTrial = () => {
    setIsMuted(false);
    setIsPaused(false);
    setFlaggedUsers([]);
  };

  return (
    <div className="bg-zinc-900 border border-purple-600 p-6 rounded-xl shadow-lg">
      <h2 className="text-purple-300 text-2xl font-bold mb-4">🛡️ Moderator Tool Panel</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={toggleMute}
          className={`py-2 px-4 rounded font-semibold ${
            isMuted ? 'bg-red-700' : 'bg-green-600'
          } text-white`}
        >
          {isMuted ? '🔇 Unmute Trial' : '🔊 Mute Trial'}
        </button>

        <button
          onClick={togglePause}
          className={`py-2 px-4 rounded font-semibold ${
            isPaused ? 'bg-yellow-600' : 'bg-blue-600'
          } text-white`}
        >
          {isPaused ? '▶️ Resume Trial' : '⏸ Pause Trial'}
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Flag user..."
          value={userToFlag}
          onChange={(e) => setUserToFlag(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400"
        />
        <button
          onClick={flagUser}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
        >
          🚩 Flag User
        </button>
      </div>

      {flaggedUsers.length > 0 && (
        <div className="mb-4">
          <h3 className="text-purple-200 font-semibold mb-2">Flagged Users</h3>
          <ul className="list-disc list-inside text-red-400">
            {(flaggedUsers ?? []).map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={resetTrial}
        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2 mt-4 rounded"
      >
        🔁 Reset Trial State
      </button>
    </div>
  );
};

export default GauntletModeratorToolPanel;
