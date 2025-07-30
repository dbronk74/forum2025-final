import React, { useEffect, useRef, useState } from 'react';

const sampleVerses = [
  "Whispers drift through starlit glyphs.",
  "Truth coils in silent symmetry.",
  "Beyond time, the echoes bloom.",
  "Each tether hums the pulse of lore.",
  "Fates entwine within sacred geometry.",
  "The veil glows with forgotten names.",
  "Chronicles breathe in spectral light.",
  "Sigils awaken the deep unknown.",
  "Thoughts rise like dawn-lit smoke.",
  "Memory cascades through the Codex."
];

interface FountainVerse {
  id: number;
  text: string;
  top: number;
  left: number;
  opacity: number;
  speed: number;
}

const CodexSanctumVerseFountain: React.FC = () => {
  const [verses, setVerses] = useState<FountainVerse[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const bounds = containerRef.current.getBoundingClientRect();

      const newVerse: FountainVerse = {
        id: nextId.current++,
        text: sampleVerses[Math.floor(Math.random() * sampleVerses.length)],
        top: 0,
        left: Math.random() * (bounds.width - 200),
        opacity: 1,
        speed: 0.3 + Math.random() * 0.7
      };

      setVerses(prev => [...prev, newVerse]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animation = () => {
      setVerses(prev =>
        prev
          .map(v => ({ ...v, top: v.top + v.speed, opacity: v.opacity - 0.002 }))
          .filter(v => v.opacity > 0)
      );
      requestAnimationFrame(animation);
    };
    animation();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-800 border border-purple-700 rounded-xl shadow-inner"
    >
      {verses.map(verse => (
        <div
          key={verse.id}
          className="absolute text-purple-300 text-sm font-mono pointer-events-none"
          style={{
            top: verse.top,
            left: verse.left,
            opacity: verse.opacity,
            transition: 'opacity 0.2s linear',
            whiteSpace: 'nowrap'
          }}
        >
          {verse.text}
        </div>
      ))}
      <div className="absolute top-2 left-4 text-xs text-purple-400 tracking-widest font-semibold">
        VERSE FOUNTAIN
      </div>
    </div>
  );
};

export default CodexSanctumVerseFountain;
