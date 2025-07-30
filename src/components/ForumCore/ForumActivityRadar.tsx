import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface RadarData {
  metric: string;
  score: number;
}

const sampleData: RadarData[] = [
  { metric: 'Clarity', score: 85 },
  { metric: 'Sentiment', score: 72 },
  { metric: 'Engagement', score: 90 },
  { metric: 'Logic', score: 78 },
  { metric: 'Responsiveness', score: 65 },
];

const ForumActivityRadar: React.FC<{ data?: RadarData[] }> = ({ data = sampleData }) => {
  return (
    <div className="w-full h-[360px] bg-black bg-opacity-50 rounded-xl p-4 shadow-inner">
      <h2 className="text-center text-xl font-bold text-purple-300 mb-2">
        Forum Activity Radar
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#4B5563" />
          <PolarAngleAxis dataKey="metric" stroke="#E5E7EB" fontSize={12} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#6B7280" />
          <Radar
            name="User Activity"
            dataKey="score"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForumActivityRadar;
