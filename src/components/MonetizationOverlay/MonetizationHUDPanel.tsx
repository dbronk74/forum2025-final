// src/components/MonetizationOverlay/MonetizationHUDPanel.tsx

import React from 'react';

interface MonetizationHUDPanelProps {
  title?: string;
  children?: React.ReactNode;
}

const MonetizationHUDPanel: React.FC<MonetizationHUDPanelProps> = ({
  title = 'Monetization Panel',
  children,
}) => {
  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-full bg-black bg-opacity-90 border border-purple-600 rounded-lg shadow-lg p-4 z-50 text-white">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default MonetizationHUDPanel;
