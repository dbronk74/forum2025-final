// src/components/InnerTemple/IntrospectionTimeline.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TimelineEvent {
  id: string;
  timestamp: Date;
  title: string;
  description: string;
}

interface IntrospectionTimelineProps {
  events: TimelineEvent[];
}

const IntrospectionTimeline: React.FC<IntrospectionTimelineProps> = ({ events }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const margin = { top: 40, right: 40, bottom: 40, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Sort events by timestamp
    const sortedEvents = events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

    const x = d3
      .scaleTime()
      .domain(d3.extent(sortedEvents, (d) => d.timestamp) as [Date, Date])
      .range([0, width]);

    // Timeline line
    g.append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', height / 2)
      .attr('y2', height / 2)
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);

    // Event groups
    const eventGroups = g
      .selectAll('g.event')
      .data(sortedEvents)
      .enter()
      .append('g')
      .attr('class', 'event')
      .attr('transform', (d) => `translate(${x(d.timestamp)}, ${height / 2})`);

    // Circles
    eventGroups
      .append('circle')
      .attr('r', 8)
      .attr('fill', '#7c3aed')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Labels
    eventGroups
      .append('text')
      .attr('y', -15)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ddd')
      .attr('font-size', 10)
      .text((d) => d.title);

    // Descriptions
    eventGroups
      .append('text')
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('fill', '#aaa')
      .attr('font-size', 8)
      .text((d) => d.description);

    // X-axis
    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(5))
      .selectAll('text')
      .attr('fill', '#ccc');
  }, [events]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-zinc-900 rounded-lg shadow-lg mt-6">
      <h3 className="text-white text-lg font-semibold mb-4">Introspection Timeline</h3>
      <svg ref={svgRef} />
    </div>
  );
};

export default IntrospectionTimeline;
