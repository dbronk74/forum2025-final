// WorldSpeakArena/EngagementMomentumGraph.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const EngagementMomentumGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 200;

    const data = Array.from({ length: 30 }, (_, i) => ({
      time: i,
      value: Math.sin(i / 2) + Math.random() * 0.5,
    }));

    const xScale = d3.scaleLinear().domain([0, 29]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-2, 2]).range([height, 0]);

    const line = d3.line<any>()
      .x((d) => xScale(d.time))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#4ade80')
      .attr('stroke-width', 2)
      .attr('d', line as any);
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
      <h2 className="text-white text-lg mb-2">Engagement Momentum</h2>
      <svg ref={svgRef} width={400} height={200}></svg>
    </div>
  );
};

export default EngagementMomentumGraph;
