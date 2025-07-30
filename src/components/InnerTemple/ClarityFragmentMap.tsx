// src/components/InnerTemple/ClarityFragmentMap.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Fragment {
  id: string;
  label: string;
  clarity: number; // 0-100
  x?: number;
  y?: number;
}

interface ClarityFragmentMapProps {
  fragments: Fragment[];
}

const ClarityFragmentMap: React.FC<ClarityFragmentMapProps> = ({ fragments }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation(fragments as any)
      .force('charge', d3.forceManyBody().strength(-60))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => 20 + (d.clarity / 5)))
      .stop();

    for (let i = 0; i < 150; i++) simulation.tick();

    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 100]);

    svg
      .attr('width', width)
      .attr('height', height)
      .style('background', '#121212');

    const nodes = svg.selectAll('circle')
      .data(fragments)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y)
      .attr('r', (d) => 15 + d.clarity / 5)
      .attr('fill', (d) => colorScale(d.clarity))
      .attr('stroke', '#88aaff')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.85);

    svg.selectAll('text')
      .data(fragments)
      .enter()
      .append('text')
      .attr('x', (d: any) => d.x)
      .attr('y', (d: any) => d.y + 4)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ddd')
      .style('pointer-events', 'none')
      .style('font-size', '10px')
      .text((d) => d.label);

  }, [fragments]);

  return (
    <div className="max-w-3xl mx-auto my-6 p-4 bg-zinc-900 rounded-lg shadow-lg">
      <h3 className="text-white text-lg font-semibold mb-4">Clarity Fragment Map</h3>
      <svg ref={svgRef} />
    </div>
  );
};

export default ClarityFragmentMap;
