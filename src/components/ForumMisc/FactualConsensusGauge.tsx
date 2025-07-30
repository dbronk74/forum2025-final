// src/components/ForumMisc/FactualConsensusGauge.tsx

import React, { useEffect, useRef, useState } from 'react';

interface FactualConsensusGaugeProps {
  consensus: number; // Value from 0 to 100
}

const FactualConsensusGauge: React.FC<FactualConsensusGaugeProps> = ({ consensus }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let start = 0;
    const end = Math.min(Math.max(consensus, 0), 100); // Clamp between 0–100
    const duration = 800;
    const stepTime = 10;
    const increment = (end - start) / (duration / stepTime);

    const animate = () => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(Math.round(start));
    };

    const timer = setInterval(animate, stepTime);

    return () => clearInterval(timer);
  }, [consensus]);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (displayValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#4B5563"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          ref={circleRef}
          stroke="#10B981"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
        />
      </svg>
      <span className="text-sm font-semibold text-white">
        Factual Consensus: <span className="text-green-400">{displayValue}%</span>
      </span>
    </div>
  );
};

export default FactualConsensusGauge;
