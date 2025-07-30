// src/components/InnerTemple/SelfInquiryMap.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface InquiryNode {
  id: string;
  label: string;
  connections: string[];
}

interface SelfInquiryMapProps {
  nodes: InquiryNode[];
}

const SelfInquiryMap: React.FC<SelfInquiryMapProps> = ({ nodes }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 700;
    const height = 500;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        'link',
        d3
          .forceLink()
          .id((d: any) => d.id)
          .distance(120)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Create links data
    const links = [];
    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        links.push({ source: node.id, target: targetId });
      });
    });

    const link = svg
      .append('g')
      .attr('stroke', '#bbb')
      .attr('stroke-opacity', 0.7)
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 2);

    const node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 18)
      .attr('fill', '#7c3aed')
      .call(
        d3
          .drag()
          .on('start', (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d: any) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    const labels = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text((d) => d.label)
      .attr('font-size', 12)
      .attr('fill', '#ddd')
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('pointer-events', 'none');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

      labels.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-zinc-900 rounded-lg shadow-lg mt-6">
      <h3 className="text-white text-lg font-semibold mb-4">Self Inquiry Map</h3>
      <svg ref={svgRef} width="700" height="500" />
    </div>
  );
};

export default SelfInquiryMap;
