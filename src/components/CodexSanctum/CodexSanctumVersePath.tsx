import React, { useEffect, useRef, useState } from 'react';

const verseFragments = [
  "⟴ Awaken the silent orbit.",
  "⟴ Dreams spiral in codified bloom.",
  "⟴ Glyphs whisper the forgotten tune.",
  "⟴ Echoes bend beyond the veil.",
  "⟴ Light braids memory into myth.",
  "⟴ Threads converge on sacred ground.",
  "⟴ Fractals know no end nor origin.",
  "⟴ The breath of symbols never fades.",
];

interface VerseNode {
  id: number;
  text: string;
  angle: number;
  radius: number;
  opacity: number;
}

const CodexSanctumVersePath: React.FC = () => {
  const [nodes, setNodes] = useState<VerseNode[]>([]);
  const centerX = 200;
  const centerY = 150;
  const nextId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => [
        ...prev,
        {
          id: nextId.current++,
          text: verseFragments[Math.floor(Math.random() * verseFragments.length)],
          angle: 0,
          radius: 20,
          opacity: 1,
        },
      ]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setNodes(prev =>
        prev
          .map(n => ({
            ...n,
            angle: n.angle + 0.02,
            radius: n.radius + 0.4,
            opacity: Math.max(0, n.opacity - 0.003),
          }))
          .filter(n => n.opacity > 0)
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative w-[400px] h-[300px] bg-gradient-to-br from-zinc-950 to-zinc-900 border border-purple-700 rounded-xl shadow-inner overflow-hidden">
      <div className="absolute top-2 left-4 text-xs text-purple-400 tracking-widest font-semibold">
        VERSE PATHWAY
      </div>
      {nodes.map(node => {
        const x = centerX + node.radius * Math.cos(node.angle);
        const y = centerY + node.radius * Math.sin(node.angle);
        return (
          <div
            key={node.id}
            className="absolute text-purple-300 text-sm font-mono"
            style={{
              left: x,
              top: y,
              opacity: node.opacity,
              whiteSpace: 'nowrap',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {node.text}
          </div>
        );
      })}
    </div>
  );
};

export default CodexSanctumVersePath;
