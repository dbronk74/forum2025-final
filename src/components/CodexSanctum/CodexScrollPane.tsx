import React from 'react';

interface CodexScrollPaneProps {
  title?: string;
  content: string[];
  maxHeight?: string;
}

const CodexScrollPane: React.FC<CodexScrollPaneProps> = ({
  title = 'ARCANE SCROLL',
  content,
  maxHeight = '32rem',
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-zinc-950 to-black border border-violet-700 shadow-lg rounded-xl p-5 overflow-y-auto space-y-4`}
      style={{ maxHeight }}
    >
      <div className="text-sm text-violet-400 tracking-widest font-bold uppercase mb-2">
        {title}
      </div>

      {(content ?? []).map((entry, index) => (
        <div
          key={index}
          className="bg-zinc-900 border border-violet-800 p-3 rounded-md text-purple-100 font-serif text-sm leading-relaxed hover:scale-[1.01] transition-transform"
        >
          {entry}
        </div>
      ))}
    </div>
  );
};

export default CodexScrollPane;
