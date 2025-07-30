import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const CodexSanctumPulseTracer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('viewBox', '0 0 300 300')
      .style('width', '100%')
      .style('height', '300px');

    const numPaths = 5;
    const pulseLines = Array.from({ length: numPaths }).map(() => {
      return d3.range(10).map((d) => ({
        x: d * 30 + Math.random() * 5,
        y: Math.random() * 200 + 50,
      }));
    });

    const lineGenerator = d3.line<{ x: number; y: number }>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCatmullRom.alpha(0.5));

    const pathSelection = svg.selectAll('path')
      .data(pulseLines)
      .join('path')
      .attr('d', d => lineGenerator(d)!)
      .attr('fill', 'none')
      .attr('stroke', 'violet')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.6);

    pathSelection
      .transition()
      .duration(4000)
      .ease(d3.easeSinInOut)
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr('stroke-opacity', 1)
      .transition()
      .duration(4000)
      .attr('stroke', 'violet')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.6)
      .on('end', function repeat() {
        d3.select(this).transition().duration(4000)
          .attr('stroke', 'white')
          .attr('stroke-width', 3)
          .attr('stroke-opacity', 1)
          .transition().duration(4000)
          .attr('stroke', 'violet')
          .attr('stroke-width', 2)
          .attr('stroke-opacity', 0.6)
          .on('end', repeat);
      });
  }, []);

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-purple-950 p-6 rounded-xl shadow-lg border border-purple-800 text-white">
      <h2 className="text-2xl font-bold text-purple-300 mb-2">Pulse Tracer</h2>
      <p className="text-sm italic text-purple-400 mb-4">
        Traces the symbolic pathways of Codex resonance in fluid motion.
      </p>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CodexSanctumPulseTracer;
