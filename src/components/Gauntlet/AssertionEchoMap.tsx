// src/components/Gauntlet/AssertionEchoMap.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type AssertionEchoMapProps = {
  assertions: {
    id: string;
    text: string;
    intensity: number; // 0 to 1
    echoStrength: number; // 0 to 1
  }[];
};

export default function AssertionEchoMap({ assertions }: AssertionEchoMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation(assertions)
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => 20 + d.intensity * 40))
      .stop();

    for (let i = 0; i < 120; i++) simulation.tick();

    svg
      .attr('width', width)
      .attr('height', height)
      .style('background', '#0b0b0c')
      .style('border', '1px solid #333')
      .style('borderRadius', '12px');

    svg
      .selectAll('circle')
      .data(assertions)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y)
      .attr('r', (d) => 10 + d.intensity * 20)
      .attr('fill', (d) =>
        d3.interpolatePlasma(d.echoStrength)
      )
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.3)
      .attr('opacity', 0.85)
      .append('title')
      .text((d) => d.text);

    svg
      .selectAll('text')
      .data(assertions)
      .enter()
      .append('text')
      .attr('x', (d: any) => d.x)
      .attr('y', (d: any) => d.y)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text((d) => '📡')
      .attr('font-size', '16px')
      .attr('fill', '#ffffffbb');
  }, [assertions]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 mb-10">
      <svg ref={svgRef}></svg>
    </div>
  );
}
