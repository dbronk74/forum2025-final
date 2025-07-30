// src/components/Gauntlet/FactionSignalFlare.tsx

import React from 'react';
import { AlertTriangle } from 'lucide-react';

const FactionSignalFlare: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-600 to-orange-800 text-white px-4 py-3 rounded-lg shadow-lg max-w-md mx-auto flex items-center space-x-4">
      <AlertTriangle className="w-6 h-6 text-yellow-200 animate-bounce" />
      <div>
        <div className="font-bold text-sm uppercase tracking-wide">Signal Flare</div>
        <div className="text-xs text-yellow-100">An urgent ideological spike has been detected in faction chatter.</div>
      </div>
    </div>
  );
};

export default FactionSignalFlare;
