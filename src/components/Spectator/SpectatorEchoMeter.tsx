import React from 'react';

const SpectatorEchoMeter: React.FC = () => {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-900 to-indigo-800 text-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Spectator Echo Meter</h3>
      <p className="text-sm">
        This meter visualizes the lingering resonance of audience reactions to particular moments, tracking applause,
        silence, or abrupt drops in sentiment across the debate timeline.
      </p>
    </div>
  );
};

export default SpectatorEchoMeter;
