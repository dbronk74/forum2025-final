// src/components/InnerTemple/LoreEchoTooltip.jsx

import React from 'react';

const LoreEchoTooltip = ({ content, position }) => {
  // position: { x: number, y: number }
  const style = {
    position: 'absolute',
    top: position?.y || 0,
    left: position?.x || 0,
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    maxWidth: '240px',
    fontSize: '0.875rem',
    zIndex: 1000,
    pointerEvents: 'none',
    transform: 'translate(-50%, -100%)',
    whiteSpace: 'normal',
  };

  if (!content) return null;

  return <div style={style} role="tooltip">{content}</div>;
};

export default LoreEchoTooltip;
