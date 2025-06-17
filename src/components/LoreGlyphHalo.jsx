import React from 'react';

export default function LoreGlyphHalo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 animate-spinSlow">
        <img
          src="/images/shared/lore-glyph-halo.png"
          alt="Lore Glyph Halo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
