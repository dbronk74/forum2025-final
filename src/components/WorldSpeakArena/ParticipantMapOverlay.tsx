import React from 'react';

const ParticipantMapOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 z-40 pointer-events-none">
      <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded shadow-lg text-sm max-w-xs">
        Participant Movement Map Overlay
        <div className="mt-2 text-xs text-gray-300">
          Displays where each participant has focused their attention or shifted positions.
        </div>
      </div>
      {/* Placeholder map grid */}
      <svg className="w-full h-full opacity-25">
        <rect width="100%" height="100%" fill="black" />
        <g stroke="white" strokeWidth="0.5">
          {[...Array(20)].map((_, i) => (
            <line key={i} x1={i * 5 + '%'} y1="0" x2={i * 5 + '%'} y2="100%" />
          ))}
          {[...Array(20)].map((_, i) => (
            <line key={i + 100} x1="0" y1={i * 5 + '%'} x2="100%" y2={i * 5 + '%'} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default ParticipantMapOverlay;
