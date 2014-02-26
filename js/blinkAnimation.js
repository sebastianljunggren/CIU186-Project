var delay = 350;

function animate(screen) {
    
	blink(screen.marker, true);
    
    
}

function blink(marker, status) {
	if (status) {
		marker.style('fill', "red");
	}
	else {
		marker.style('fill', "green");
	}


	window.setTimeout(function () {
        blink(marker, !status);
    }, delay);
}