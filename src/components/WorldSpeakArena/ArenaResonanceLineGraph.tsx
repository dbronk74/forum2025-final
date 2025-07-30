import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ArenaResonanceLineGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 200;

    const data = d3.range(50).map((d) => ({
      x: d,
      y: Math.sin(d / 5) * 20 + 50 + Math.random() * 10,
    }));

    svg.selectAll('*').remove();

    svg
      .attr('width', width)
      .attr('height', height)
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#38bdf8')
      .attr('stroke-width', 2)
      .attr(
        'd',
        d3
          .line<{ x: number; y: number }>()
          .x((d) => d.x * 10)
          .y((d) => height - d.y)
          .curve(d3.curveBasis)
      );
  }, []);

  return (
    <div className="p-2 bg-black bg-opacity-70 rounded shadow-lg">
      <svg ref={svgRef}></svg>
      <div className="text-xs text-white mt-1">Arena Resonance Line Graph</div>
    </div>
  );
};

export default ArenaResonanceLineGraph;
