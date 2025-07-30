import React from 'react';

const mockZones = [
  { name: 'Gauntlet', x: '20%', y: '30%' },
  { name: 'Oracle', x: '60%', y: '50%' },
  { name: 'RoundTable', x: '40%', y: '75%' },
  { name: 'Compass', x: '80%', y: '20%' },
];

const SiteRadarMap: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 w-56 h-56 bg-gray-900 border-2 border-white rounded-lg p-2 shadow-lg z-50">
      <h3 className="text-white text-xs font-bold mb-1">Site Radar Map</h3>
      <div className="relative w-full h-full bg-black">
        {mockZones.map((zone, index) => (
          <div
            key={index}
            className="absolute bg-blue-400 text-white text-[10px] px-1 py-0.5 rounded shadow"
            style={{
              left: zone.x,
              top: zone.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {zone.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteRadarMap;
