import React from 'react';

interface BranchHubLayoutProps {
  title: string;
  description: string;
  branchKey: string;
  children?: React.ReactNode;
}

const BranchHubLayout: React.FC<BranchHubLayoutProps> = ({
  title,
  description,
  branchKey,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide">{title}</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{description}</p>
      </header>
      <main className="max-w-6xl mx-auto space-y-8">
        {children}
      </main>
    </div>
  );
};

export default BranchHubLayout;
