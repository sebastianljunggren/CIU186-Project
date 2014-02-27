var delay = 350;

function animate(screen) {
    
	blink(screen.marker, true);
    
    
}

function blink(marker, status) {
	if (status) {
		marker.transition().style('fill', "red");
	}
	else {
		marker.transition().style('fill', "gray");
	}
	if (animating) {
		window.setTimeout(function () {
        	blink(marker, !status);
    	}, delay);
	} else {
		// Restore to normal marker color
		marker.transition().style('fill', '#33CC33');
	}
}