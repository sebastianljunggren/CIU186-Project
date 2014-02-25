jQuery(function () {
    var svg = d3.select('#canvas')
        .append('svg:svg')
        .attr('width', 800)
        .attr('height', 800);
    var circle = svg.append('circle')
        .attr('cx', 400)
        .attr('cy', 400)
        .attr('r', 350)
        .style('fill', 'none')
        .style('stroke', 'blue')
        .style('stroke-width', 10);
    circle.transition()
        .duration(1000)
        .attr('r', 100);
});