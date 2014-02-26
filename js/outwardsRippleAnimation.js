function animate(screen) {
    var circle = screen.markerGroup.append('circle')
        .attr('r', 25)
        .style('fill', 'transparent')
        .style('stroke', 'black')
        .style('stroke-width', 3)
        .style('opacity', 0.2);
    circle.transition()
        .duration(1000)
        .attr('r', width)
        .style('stroke-width', 10)
        .style('opacity', 0.01)
        .duration(7500)
        .remove();
    setTimeout(function() {
        animate(screen);
    }, 1000)

}