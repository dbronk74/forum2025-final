import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CodexSanctumLorePulseTracer = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('viewBox', '0 0 300 300')
      .style('width', '100%')
      .style('height', '200px');

    const renderPulses = () => {
      const pulses = d3.range(30).map(() => ({
        cx: Math.random() * 300,
        cy: Math.random() * 300,
        r: 4 + Math.random() * 6,
      }));

      const circles = svg.selectAll('circle').data(pulses, (_, i) => i.toString());

      circles.enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', 0)
        .attr('fill', 'url(#pulse-gradient)')
        .attr('opacity', 0.8)
        .transition()
        .duration(1500)
        .attr('r', d => d.r)
        .attr('opacity', 0.1)
        .remove();

      circles.exit().remove();
    };

    // Initial render
    renderPulses();

    // Refresh pulses every 2.5s
    const interval = setInterval(() => {
      renderPulses();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 rounded-xl shadow border border-purple-800 p-4 text-white">
      <h2 className="text-2xl font-bold text-purple-300 mb-2">Lore Pulse Tracer</h2>
      <p className="text-sm text-purple-100 italic mb-3">
        Visualizes symbolic pulses of Codex fragments in real time.
      </p>
      <div className="relative">
        <svg ref={svgRef}>
          <defs>
            <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="140" fill="none" stroke="#4c1d95" strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      </div>
    </div>
  );
};

export default CodexSanctumLorePulseTracer;
