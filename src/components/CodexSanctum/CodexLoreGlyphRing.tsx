import React from 'react';
import CodexLoreGlyphOrb from './CodexLoreGlyphOrb';

interface CodexLoreGlyphRingProps {
  glyphs: string[]; // labels for each orb
  radius?: number; // radius of the ring in pixels
  size?: number; // orb size
  rotate?: boolean;
}

const CodexLoreGlyphRing: React.FC<CodexLoreGlyphRingProps> = ({
  glyphs,
  radius = 120,
  size = 48,
  rotate = false,
}) => {
  const center = radius + size;

  return (
    <div
      className="relative"
      style={{
        width: `${center * 2}px`,
        height: `${center * 2}px`,
      }}
    >
      {glyphs.map((label, index) => {
        const angle = (index / glyphs.length) * 2 * Math.PI;
        const x = center + radius * Math.cos(angle) - size / 2;
        const y = center + radius * Math.sin(angle) - size / 2;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transformOrigin: 'center',
            }}
          >
            <CodexLoreGlyphOrb label={label} size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default CodexLoreGlyphRing;
