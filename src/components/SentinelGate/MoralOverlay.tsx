import React from 'react';

interface MoralOverlayProps {
  onAgree: () => void;
}

const MoralOverlay: React.FC<MoralOverlayProps> = ({ onAgree }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 text-white">
      <div className="p-8 bg-gray-900 rounded-lg text-center shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Before You Enter...</h2>
        <p className="mb-6">
          Do you agree to engage with respect, seek truth, and honor diverse perspectives?
        </p>
        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold transition"
          onClick={onAgree}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default MoralOverlay;
