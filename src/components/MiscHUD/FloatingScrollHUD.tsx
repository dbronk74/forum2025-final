import React from 'react';

const FloatingScrollHUD: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 w-72 h-48 bg-black bg-opacity-70 text-white p-4 overflow-y-auto rounded-xl shadow-lg z-50">
      <h3 className="text-lg font-semibold mb-2">Live HUD Feed</h3>
      <ul className="space-y-1 text-sm">
        <li>🧠 AI observing debate dynamics...</li>
        <li>🗣️ Speaker: @PhilosopherKing</li>
        <li>📈 Sentiment spike detected</li>
        <li>📌 Fact flagged by Oracle</li>
        <li>💬 Audience pulse synced</li>
        <li>🔁 Rebuttal thread forming</li>
      </ul>
    </div>
  );
};

export default FloatingScrollHUD;
