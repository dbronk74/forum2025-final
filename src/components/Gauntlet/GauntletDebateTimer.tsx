import React from 'react';

interface GauntletDebateTimerProps {
  remainingTime: number;
  isActive: boolean;
  onTimeUp: () => void;
}

const GauntletDebateTimer: React.FC<GauntletDebateTimerProps> = ({
  remainingTime,
  isActive,
  onTimeUp,
}) => {
  React.useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(timer);
        onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, remainingTime, onTimeUp]);

  return (
    <div className="text-white text-xl font-bold p-2 bg-black/50 rounded">
      Time Remaining: {remainingTime}s
    </div>
  );
};

export default GauntletDebateTimer;
