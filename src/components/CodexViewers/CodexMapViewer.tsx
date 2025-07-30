import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface CodexNode {
  id: string;
  label: string;
  group: number;
}

interface CodexLink {
  source: string;
  target: string;
  value: number;
}

const CodexMapViewer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const nodes: CodexNode[] = [
      { id: 'truth', label: 'Truth', group: 1 },
      { id: 'wisdom', label: 'Wisdom', group: 2 },
      { id: 'mythos', label: 'Mythos', group: 3 },
      { id: 'doubt', label: 'Doubt', group: 4 },
      { id: 'faith', label: 'Faith', group: 5 },
    ];

    const links: CodexLink[] = [
      { source: 'truth', target: 'wisdom', value: 1 },
      { source: 'truth', target: 'faith', value: 1 },
      { source: 'wisdom', target: 'mythos', value: 1 },
      { source: 'mythos', target: 'doubt', value: 1 },
      { source: 'faith', target: 'doubt', value: 1 },
    ];

    const width = 600;
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear before render

    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        'link',
        d3.forceLink(links).id((d: any) => d.id).distance(120)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('stroke', '#777')
      .attr('stroke-opacity', 0.4)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', (d) => Math.sqrt(d.value));

    const node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 12)
      .attr('fill', (d) => d3.schemeCategory10[d.group % 10])
      .call(
        d3
          .drag<SVGCircleElement, CodexNode>()
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
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .text((d) => d.label)
      .attr('fill', '#ddd')
      .attr('font-size', 10);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);

      labels
        .attr('x', (d) => d.x!)
        .attr('y', (d) => d.y! + 20);
    });
  }, []);

  return (
    <div className="p-4 bg-zinc-900 border border-purple-800 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-purple-300 mb-2">Codex Idea Map</h3>
      <svg
        ref={svgRef}
        width={600}
        height={400}
        className="border border-zinc-700 rounded"
      />
    </div>
  );
};

export default CodexMapViewer;
