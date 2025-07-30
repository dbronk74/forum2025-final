import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface RebuttalData {
  time: number;
  intensity: number;
}

const mockData: RebuttalData[] = Array.from({ length: 30 }, (_, i) => ({
  time: i,
  intensity: Math.random(),
}));

const ArenaRebuttalHeatmap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 200;
    svg.attr('width', width).attr('height', height);

    const x = d3.scaleLinear().domain([0, mockData.length]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    const colorScale = d3.scaleSequential(d3.interpolateOrRd).domain([0, 1]);

    svg.selectAll('rect')
      .data(mockData)
      .join('rect')
      .attr('x', (_, i) => x(i))
      .attr('y', d => y(d.intensity))
      .attr('width', width / mockData.length)
      .attr('height', d => height - y(d.intensity))
      .attr('fill', d => colorScale(d.intensity));
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-bold mb-2 text-zinc-800 dark:text-zinc-100">Rebuttal Intensity Heatmap</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ArenaRebuttalHeatmap;
