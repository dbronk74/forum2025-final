// src/components/ForumMisc/TopicBiasRadar.tsx

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const biasData = [
  { topic: 'Politics', bias: 80 },
  { topic: 'Economics', bias: 65 },
  { topic: 'Science', bias: 20 },
  { topic: 'Religion', bias: 45 },
  { topic: 'History', bias: 55 },
  { topic: 'Culture', bias: 70 },
];

export default function TopicBiasRadar() {
  return (
    <div className="bg-zinc-900 border border-pink-500 rounded-xl p-4 shadow-lg w-full max-w-xl mx-auto">
      <h3 className="text-pink-300 font-semibold text-sm uppercase tracking-wide mb-2">
        Topic Bias Radar
      </h3>
      <p className="text-xs text-zinc-400 mb-3">
        Highlights perceived bias across thematic domains. Use to assess skew or coverage gaps.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={biasData}>
          <PolarGrid stroke="#555" />
          <PolarAngleAxis dataKey="topic" stroke="#ddd" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', border: '1px solid #999', color: '#fff' }}
            labelStyle={{ fontSize: 12 }}
          />
          <Radar
            name="Bias"
            dataKey="bias"
            stroke="#f472b6"
            fill="#f472b6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
