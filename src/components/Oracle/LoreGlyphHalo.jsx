// src/components/InnerTemple/LoreGlyphHalo.jsx

import React from 'react';

const LoreGlyphHalo = ({ size = 100, color = '#7c3aed' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="select-none"
    >
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke={color}
        strokeWidth="4"
        opacity="0.5"
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="6"
            floodColor={color}
            floodOpacity="0.6"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LoreGlyphHalo;
