import React from 'react';

interface GauntletResonanceMeterProps {
  resonanceLevel: number; // Value from 0 to 100
  label?: string;
}

const GauntletResonanceMeter: React.FC<GauntletResonanceMeterProps> = ({
  resonanceLevel,
  label = 'Resonance',
}) => {
  const radius = 45;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (resonanceLevel / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2e2e2e"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#resonanceGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.8s ease' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="resonanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f5af0" />
            <stop offset="100%" stopColor="#2cb67d" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="14"
          fill="#eaeaea"
        >
          {resonanceLevel}%
        </text>
      </svg>
      <div className="text-xs text-gray-300 uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default GauntletResonanceMeter;
