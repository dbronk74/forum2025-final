import React from 'react';
import CodexLoreGlyphSpark from './CodexLoreGlyphSpark';

interface CodexLoreGlyphTrailProps {
  count?: number;
  areaSize?: number;
  color?: string;
  size?: number;
}

const CodexLoreGlyphTrail: React.FC<CodexLoreGlyphTrailProps> = ({
  count = 12,
  areaSize = 200,
  color = 'rgba(173, 216, 230, 0.7)', // light blue glow
  size = 6,
}) => {
  const sparks = Array.from({ length: count }, (_, i) => (
    <CodexLoreGlyphSpark
      key={i}
      delay={i * 0.3}
      color={color}
      size={size}
    />
  ));

  return (
    <div
      className="relative pointer-events-none"
      style={{
        width: `${areaSize}px`,
        height: `${areaSize}px`,
      }}
    >
      {sparks}
    </div>
  );
};

export default CodexLoreGlyphTrail;
