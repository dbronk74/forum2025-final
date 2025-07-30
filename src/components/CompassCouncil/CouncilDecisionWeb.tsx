import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DecisionNode {
  id: string;
  label: string;
  group: number;
}

interface DecisionLink {
  source: string;
  target: string;
  value: number;
}

const nodes: DecisionNode[] = [
  { id: 'Clarity', label: 'Clarity', group: 1 },
  { id: 'Empathy', label: 'Empathy', group: 2 },
  { id: 'Logic', label: 'Logic', group: 1 },
  { id: 'Tradition', label: 'Tradition', group: 3 },
  { id: 'Innovation', label: 'Innovation', group: 3 },
  { id: 'Consensus', label: 'Consensus', group: 2 },
];

const links: DecisionLink[] = [
  { source: 'Clarity', target: 'Logic', value: 2 },
  { source: 'Empathy', target: 'Consensus', value: 2 },
  { source: 'Tradition', target: 'Consensus', value: 1 },
  { source: 'Innovation', target: 'Logic', value: 1 },
  { source: 'Clarity', target: 'Consensus', value: 1 },
];

const CouncilDecisionWeb: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear previous renders

    const width = 400;
    const height = 400;

    const simulation = d3
      .forceSimulation(nodes as any)
      .force('link', d3.forceLink(links as any).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('stroke', '#6b7280')
      .attr('stroke-opacity', 0.7)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => Math.sqrt(d.value) * 2);

    const node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 14)
      .attr('fill', d => {
        if (d.group === 1) return '#6366f1';
        if (d.group === 2) return '#10b981';
        return '#f59e0b';
      })
      .call(
        d3
          .drag<SVGCircleElement, DecisionNode>()
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

    const label = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text(d => d.label)
      .attr('font-size', 10)
      .attr('fill', '#e5e7eb')
      .attr('text-anchor', 'middle')
      .attr('dy', 4);

    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node.attr('cx', d => (d as any).x).attr('cy', d => (d as any).y);
      label.attr('x', d => (d as any).x).attr('y', d => (d as any).y);
    });
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <svg ref={svgRef} width={400} height={400} className="bg-slate-900 rounded-xl shadow-md border border-indigo-800" />
    </div>
  );
};

export default CouncilDecisionWeb;
