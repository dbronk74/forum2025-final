import React from 'react';

const tips = [
  "💡 Tip: Hover over usernames to view profiles.",
  "🌀 Use the Codex wheel to explore layered arguments.",
  "🎯 Double-tap a statement to challenge it in The Gauntlet.",
  "📜 Press 'Scroll HUD' to log your own notes live.",
  "🔊 Enable voice mode for real-time AI insight narration.",
];

const ForumOverlayTips: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-indigo-900 bg-opacity-80 text-white px-6 py-3 rounded-full shadow-md z-40 animate-bounce">
      <p className="text-sm font-medium">{tips[Math.floor(Math.random() * tips.length)]}</p>
    </div>
  );
};

export default ForumOverlayTips;
