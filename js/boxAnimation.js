var boxSize = 20;
var distance = 100;

function animate(screen) {
	
	for(var x = 0; x < grid.x; x++) {
        for(var y = 0; y < grid.y; y++) {
            var box = svg.append('rect')
                .attr('x', screens[x][y].x + screenPadding + innerScreenWidth / 2 - boxSize / 2)
                .attr('y', screens[x][y].y + screenPadding + innerScreenHeight / 2 - boxSize / 2)
                .attr('width', boxSize)
                .attr('height', boxSize)
                .style('stroke', 'black')
                .style('stroke-width', 3)
                .style('fill', 'black')
                .style('opacity', 0.8);

            var cx = getXFromGrid(screen, screen.markerX);
            var cy = getYFromGrid(screen, screen.markerY);
            //var cy = screen.markerGroup.attr('transform').translate.y;
            box.transition()
            	.duration(1000)
            	.attr('x', cx)
            	.attr('y', cy)
            	.remove();
         }
	}

	window.setTimeout(function(){
		animate(screen);
	}, 1300);


}