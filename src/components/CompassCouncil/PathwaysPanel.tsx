import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PathwaysPanelProps {
  pathways: {
    id: string;
    label: string;
    from?: string; // parent node id
  }[];
}

const PathwaysPanel: React.FC<PathwaysPanelProps> = ({ pathways }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 500;

    const nodes = pathways.map((p) => ({ id: p.id, label: p.label }));
    const links = pathways
      .filter((p) => p.from)
      .map((p) => ({ source: p.from!, target: p.id }));

    const simulation = d3
      .forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#0f172a')
      .style('border-radius', '12px');

    svg.selectAll('*').remove(); // Clear previous

    const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#64748b')
      .attr('stroke-width', 1.5);

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', '#38bdf8')
      .call(
        d3
          .drag<SVGCircleElement, any>()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
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
      .text((d: any) => d.label)
      .attr('fill', '#e2e8f0')
      .attr('font-size', '0.75rem')
      .attr('text-anchor', 'middle')
      .attr('dy', '-1.2em');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
      labels.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
    });

    return () => simulation.stop();
  }, [pathways]);

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold text-slate-100 mb-3">Belief Pathways</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PathwaysPanel;
