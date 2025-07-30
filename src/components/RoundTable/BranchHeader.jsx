import React from "react";

function BranchHeader({ title }) {
  return (
    <header className="bg-black text-white text-center py-4 border-b border-gray-700">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}

export default BranchHeader;