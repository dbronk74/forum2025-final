import React, { useEffect, useRef } from 'react';

const loreWords = [
  'Truth',
  'Trial',
  'Resonance',
  'Rebuttal',
  'Ascension',
  'Judgment',
  'Echo',
  'Pulse',
  'Sigil',
  'Awakening',
];

export default function CodexSanctumLoreRibbon() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let offset = 0;

    const scroll = () => {
      if (!container) return;
      offset -= 0.5;
      container.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) >= container.scrollWidth / 2) offset = 0;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-10 bg-gradient-to-r from-indigo-800 via-black to-indigo-800 border-y border-indigo-600 shadow-inner z-10">
      <div
        ref={containerRef}
        className="absolute whitespace-nowrap flex space-x-8 text-indigo-300 font-mono text-sm uppercase px-4"
      >
        {[...loreWords, ...loreWords].map((word, i) => (
          <span key={i} className="tracking-widest">
            ✦ {word}
          </span>
        ))}
      </div>
    </div>
  );
}
