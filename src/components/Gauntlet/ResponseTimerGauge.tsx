// src/components/Gauntlet/ResponseTimerGauge.tsx

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ResponseTimerGaugeProps {
  duration: number; // in seconds
  isActive: boolean;
  onTimeout?: () => void;
}

const ResponseTimerGauge: React.FC<ResponseTimerGaugeProps> = ({ duration, isActive, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const controls = useAnimation();

  useEffect(() => {
    if (!isActive) return;

    setTimeLeft(duration);
    controls.start({ strokeDashoffset: 0, transition: { duration, ease: 'linear' } });

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(interval);
          onTimeout?.();
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, duration]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = ((duration - timeLeft) / duration) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg width="120" height="120" className="rotate-[-90deg]">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#1f2937"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          animate={controls}
        />
      </svg>
      <p className="mt-2 text-white font-mono text-sm">{timeLeft}s remaining</p>
    </div>
  );
};

export default ResponseTimerGauge;
