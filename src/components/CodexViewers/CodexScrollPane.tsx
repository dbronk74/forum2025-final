import React from 'react';
import './CodexScrollPane.css'; // Optional external styles if you use textures or scrollbars

interface CodexScrollPaneProps {
  title?: string;
  children: React.ReactNode;
}

const CodexScrollPane: React.FC<CodexScrollPaneProps> = ({ title, children }) => {
  return (
    <div className="relative bg-gradient-to-br from-amber-100 to-yellow-50 border-4 border-yellow-700 rounded-xl shadow-xl overflow-hidden max-h-[600px] w-full">
      {title && (
        <div className="bg-yellow-200 border-b-2 border-yellow-700 text-yellow-900 text-lg font-bold px-4 py-2 shadow-inner">
          {title}
        </div>
      )}
      <div className="scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-yellow-100 p-6 overflow-y-auto text-gray-800 font-serif leading-relaxed text-base max-h-[560px]">
        {children}
      </div>
    </div>
  );
};

export default CodexScrollPane;
