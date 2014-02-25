var width = jQuery(window).width();
var height = jQuery(window).height();
var screens = new Array();
var screenPadding = 35;
var screenWidth = width / grid.x;
var screenHeight = height / grid.y;
var innerScreenWidth = screenWidth- screenPadding * 2;
var innerScreenHeight = screenHeight -screenPadding * 2;
var boundingBoxWidth = innerScreenWidth - screenPadding * 6;
var boundingBoxHeight = innerScreenHeight - screenPadding * 6;
var xGrid = 40;
var yGrid = 30;
var timeStep = 1000;

jQuery(function () {
    var svg = d3.select('#canvas')
        .append('svg:svg')
        .attr('width', width)
        .attr('height', height);
    svg.append('rect')
        .attr('width', width)
        .attr('height', height);
    for(var x = 0; x < grid.x; x++) {
        screens[x] = new Array();
        for(var y = 0; y < grid.y; y++) {
            screens[x][y] = {
                x: x * width / grid.x,
                y: y * height / grid.y,
                markerX: routes[x][y][0].x,
                markerY: routes[x][y][0].y,
            };
            svg.append('rect')
                .attr('x', screens[x][y].x + screenPadding)
                .attr('y', screens[x][y].y + screenPadding)
                .attr('width', innerScreenWidth)
                .attr('height', innerScreenHeight)
                .style('fill', 'white');
            svg.append('rect')
                .attr('x', getXFromGrid(screens[x][y], 10))
                .attr('y', getYFromGrid(screens[x][y], 5))
                .attr('width', getXWidthFromGrid(screens[x][y], 20))
                .attr('height', getYHeightFromGrid(screens[x][y], 20))
                .style('fill', 'transparent')
                .style('stroke', 'red')
                .style('stroke-width', 3)
                .style('stroke-dasharray', '10,5');
            screens[x][y].marker = svg.append('circle')
                .attr('cx', getXFromGrid(screens[x][y], screens[x][y].markerX))
                .attr('cy', getYFromGrid(screens[x][y], screens[x][y].markerY))
                .attr('r', 20)
                .style('fill', 'red')
                .style('stroke', 'black')
                .style('stroke-width', 3);
        }
    }
    var circle = svg.append('circle')
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .attr('r', 350)
        .style('fill', 'transparent')
        .style('stroke', 'black')
        .style('stroke-width', 10);
    circle.transition()
        .duration(1000)
        .attr('r', 100)
        .style('stroke-width', 5);

    step(1);
});

function step(stepNum) {
    window.setTimeout(function () {
        for(var x = 0; x < grid.x; x++) {
            for(var y = 0; y < grid.y; y++) {
                var screen = screens[x][y];
                var newPos = routes[x][y][stepNum];
                screen.markerX = newPos.x;
                screen.markerY = newPos.y;
                screen.marker.transition()
                    .attr('cx', getXFromGrid(screen, screen.markerX))
                    .attr('cy', getYFromGrid(screen, screen.markerY));
            }
        }
        if (stepNum < iterations) {
            step(stepNum + 1);
        }
        
    },timeStep);
}

function getXFromGrid(screen, x) {
    return x / xGrid * innerScreenWidth + screen.x + screenPadding;
}

function getYFromGrid(screen, y) {
    return y / yGrid * innerScreenHeight + screen.y + screenPadding;
}

function getXWidthFromGrid(screen, x) {
    return x / xGrid * innerScreenWidth;
}

function getYHeightFromGrid(screen, y) {
    return y / yGrid * innerScreenHeight;
}