import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PrecisionScoreChartProps {
  score: number; // Expected to be between 0 and 100
}

const GauntletPrecisionScoreChart: React.FC<PrecisionScoreChartProps> = ({ score }) => {
  return (
    <div className="w-28 h-28 bg-black bg-opacity-60 rounded-full shadow-inner p-2">
      <CircularProgressbarWithChildren
        value={score}
        styles={buildStyles({
          pathColor: '#38bdf8',
          trailColor: '#1e293b',
          strokeLinecap: 'round'
        })}
      >
        <div className="text-center">
          <div className="text-xs text-sky-400 font-bold">Precision</div>
          <div className="text-lg text-white font-extrabold">{score}%</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default GauntletPrecisionScoreChart;
