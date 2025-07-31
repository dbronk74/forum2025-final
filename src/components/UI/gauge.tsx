// src/components/ui/gauge.tsx

import React from 'react';

interface GaugeProps {
  value: number; // Current value
  min?: number;  // Minimum value, default 0
  max?: number;  // Maximum value, default 100
  color?: string; // Stroke color
  label?: string; // Text label inside gauge
  strokeWidth?: number; // Thickness of gauge arc
  size?: number; // Width and height of SVG (square)
}

export const Gauge: React.FC<GaugeProps> = ({
  value,
  min = 0,
  max = 100,
  color = '#22c55e',
  label,
  strokeWidth = 12,
  size = 120,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = Math.min(Math.max(value, min), max);
  const progress = ((normalizedValue - min) / (max - min)) * circumference;

  return (
    <svg width={size} height={size} className="mx-auto block">
      <circle
        stroke="#444"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      {label && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize={size / 5}
          fill={color}
          fontWeight="bold"
        >
          {label}
        </text>
      )}
    </svg>
  );
};
