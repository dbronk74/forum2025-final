import React, { useEffect, useState } from 'react';

interface MomentumData {
  leader: 'Challenger' | 'Defender' | null;
  intensity: number; // 0 to 100
  burstDetected: boolean;
}

const GauntletMomentumHUD: React.FC = () => {
  const [momentum, setMomentum] = useState<MomentumData>({
    leader: null,
    intensity: 0,
    burstDetected: false,
  });

  // Mocking live momentum updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newLeader = Math.random() > 0.5 ? 'Challenger' : 'Defender';
      const newIntensity = Math.floor(Math.random() * 101);
      const burstDetected = newIntensity > 80;

      setMomentum({
        leader: newLeader,
        intensity: newIntensity,
        burstDetected,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getBarColor = () => {
    if (momentum.intensity > 80) return 'bg-red-600';
    if (momentum.intensity > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-zinc-900 border border-purple-700 p-4 rounded-lg w-full max-w-md shadow-md">
      <h3 className="text-purple-300 text-lg font-semibold mb-2">⚡ Gauntlet Momentum HUD</h3>

      <div className="text-white mb-2">
        <span className="font-medium">Current Lead:</span>{' '}
        <span className={momentum.leader === 'Challenger' ? 'text-cyan-400' : 'text-orange-400'}>
          {momentum.leader || 'None'}
        </span>
      </div>

      <div className="relative h-6 bg-zinc-800 rounded-full overflow-hidden mb-2">
        <div
          className={`${getBarColor()} h-full transition-all duration-500`}
          style={{ width: `${momentum.intensity}%` }}
        />
      </div>

      <div className="text-sm text-zinc-300">
        Momentum Intensity: <span className="text-white font-semibold">{momentum.intensity}%</span>
      </div>

      {momentum.burstDetected && (
        <div className="mt-2 text-red-400 font-bold animate-pulse">
          🚨 Momentum Burst Detected!
        </div>
      )}
    </div>
  );
};

export default GauntletMomentumHUD;
