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


	window.setTimeout(function () {
        blink(marker, !status);
    }, delay);
}