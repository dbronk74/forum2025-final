import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ArgumentHeatmapProps {
  data: number[][];
  width?: number;
  height?: number;
}

const ArgumentHeatmap: React.FC<ArgumentHeatmapProps> = ({
  data,
  width = 500,
  height = 300,
}) => {
  const heatmapRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (data && heatmapRef.current) {
      const svg = d3.select(heatmapRef.current);
      svg.selectAll('*').remove();

      const numRows = data.length;
      const numCols = data[0]?.length || 0;
      const cellWidth = width / numCols;
      const cellHeight = height / numRows;

      const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)
        .domain([0, d3.max(data.flat()) || 1]);

      svg
        .attr('width', width)
        .attr('height', height)
        .selectAll('rect')
        .data(data.flat())
        .enter()
        .append('rect')
        .attr('x', (_, i) => (i % numCols) * cellWidth)
        .attr('y', (_, i) => Math.floor(i / numCols) * cellHeight)
        .attr('width', cellWidth)
        .attr('height', cellHeight)
        .attr('fill', d => colorScale(d))
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 1);

      // Optional: add interactivity (tooltip example)
      svg.selectAll('rect')
        .on('mouseover', (event, d) => {
          const tooltip = svg.append('text')
            .attr('id', 'tooltip')
            .attr('x', event.offsetX + 10)
            .attr('y', event.offsetY - 10)
            .attr('fill', '#000000')
            .attr('font-size', '12px')
            .text(d.toFixed(2));
        })
        .on('mouseout', () => {
          svg.select('#tooltip').remove();
        });
    }
  }, [data, height, width]);

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 rounded-xl shadow-md">
      <svg ref={heatmapRef} className="rounded-lg overflow-hidden" />
    </div>
  );
};

export default ArgumentHeatmap;
