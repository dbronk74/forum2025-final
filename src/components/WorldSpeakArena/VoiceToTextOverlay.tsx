import React from 'react';

const VoiceToTextOverlay: React.FC = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-black/70 text-white text-sm rounded-lg p-4 z-40">
      <p className="italic">
        [Voice-to-text feed]: “If we examine the premise more closely, we find...”
      </p>
    </div>
  );
};

export default VoiceToTextOverlay;
