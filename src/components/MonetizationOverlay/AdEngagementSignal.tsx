import React from "react";

const AdEngagementSignal = () => {
  return (
    <div className="bg-yellow-50 text-yellow-900 border border-yellow-400 p-4 rounded-lg shadow">
      <h3 className="font-bold text-md mb-1">Ad Engagement Signal</h3>
      <p className="text-sm">
        Users interacting with forum-sponsored content are displayed here in real-time.
      </p>
      <div className="mt-2 bg-yellow-100 p-2 rounded text-xs text-yellow-800 italic">
        [Signal Strength: Moderate] • [Last Interaction: 12s ago]
      </div>
    </div>
  );
};

export default AdEngagementSignal;
