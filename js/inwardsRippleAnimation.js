var animDuration = 2000;
var delay = 1000;

function animate(screen) {
    var circle = screen.markerGroup.append('circle')
        .attr('r', width)
        .style('fill', 'transparent')
        .style('stroke', 'black')
        .style('stroke-width', 10)
        .style('opacity', 0.01)
        .style('pointer-events', 'none');
    circle.transition()
        .attr('r', 15)
        .style('stroke-width', 3)
        .style('opacity', 0.6)
        .duration(animDuration)
        .remove();
    if(animating) {
        setTimeout(function() {
            animate(screen);
        }, delay)
    }

}