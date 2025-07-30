// src/components/InnerTemple/EngagementTrajectoryGraph.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface EngagementDataPoint {
  timestamp: Date;
  engagement: number; // 0 to 100
}

interface EngagementTrajectoryGraphProps {
  data: EngagementDataPoint[];
}

const EngagementTrajectoryGraph: React.FC<EngagementTrajectoryGraphProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const parseTime = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ');

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.timestamp) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    const line = d3
      .line<EngagementDataPoint>()
      .x((d) => x(d.timestamp))
      .y((d) => y(d.engagement))
      .curve(d3.curveMonotoneX);

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(6).tickSizeOuter(0))
      .selectAll('text')
      .attr('fill', '#ccc');

    // Y Axis
    g.append('g')
      .call(d3.axisLeft(y).ticks(5))
      .selectAll('text')
      .attr('fill', '#ccc');

    // Line path
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#4ade80')
      .attr('stroke-width', 3)
      .attr('d', line);

    // Dots
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d.timestamp))
      .attr('cy', (d) => y(d.engagement))
      .attr('r', 4)
      .attr('fill', '#22c55e')
      .attr('stroke', '#166534')
      .attr('stroke-width', 1.5);
  }, [data]);

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 p-4 rounded-lg shadow-lg mt-6">
      <h3 className="text-white font-semibold mb-4">Engagement Trajectory</h3>
      <svg ref={svgRef} />
    </div>
  );
};

export default EngagementTrajectoryGraph;
