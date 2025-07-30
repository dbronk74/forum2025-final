import React from "react";

const SanctumCouncilTorchbearerRoster = () => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Torchbearer Roster</h2>
      <p className="text-sm text-gray-300">
        This list contains all active Torchbearers entrusted with guiding the Council through critical ideation phases.
      </p>
      <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
        <li>Lucien Everflame – Lorekeeper</li>
        <li>Seraphine Voss – Compass Architect</li>
        <li>Malric Solvane – Arcane Interpreter</li>
      </ul>
    </div>
  );
};

export default SanctumCouncilTorchbearerRoster;
