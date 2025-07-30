import React from 'react';

const ClaimAdRewardButton: React.FC = () => {
  const handleClick = () => {
    alert('Reward claimed! 🎉 (This would trigger real reward logic in production.)');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow"
    >
      🎁 Claim Ad Reward
    </button>
  );
};

export default ClaimAdRewardButton;
