var width = jQuery(window).width();
var height = jQuery(window).height();
var screens = new Array();
var screenPadding = 35;
var screenWidth = width / grid.x;
var screenHeight = screenWidth * 3 / 4;
var innerScreenWidth = screenWidth- screenPadding * 2;
var innerScreenHeight = screenHeight -screenPadding * 2;
var boundingBoxWidth = innerScreenWidth - screenPadding * 6;
var boundingBoxHeight = innerScreenHeight - screenPadding * 6;
var topSpace = height - screenHeight * grid.y;
var xGrid = 40;
var yGrid = 30;
var timeStep = 1000;
var svg;

jQuery(function () {
    svg = d3.select('#canvas')
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
                y: y * screenHeight + topSpace,
                markerX: routes[x][y][0].x,
                markerY: routes[x][y][0].y,
            }
            var screen = screens[x][y];
            svg.append('rect')
                .attr('x', screen.x + screenPadding)
                .attr('y', screen.y + screenPadding)
                .attr('width', innerScreenWidth)
                .attr('height', innerScreenHeight)
                .style('fill', 'white');
            svg.append('rect')
                .attr('x', getXFromGrid(screen, 10))
                .attr('y', getYFromGrid(screen, 5))
                .attr('width', getXWidthFromGrid(screen, 20))
                .attr('height', getYHeightFromGrid(screen, 20))
                .style('fill', 'transparent')
                .style('stroke', 'gray')
                .style('stroke-width', 3)
                .style('stroke-dasharray', '10,5');
            screen.markerGroup = svg.append('g')
                .attr('transform', 'translate(' + getXFromGrid(screen, screen.markerX) + ',' + getYFromGrid(screen, screen.markerY) + ')');
            screen.marker = screen.markerGroup.append('circle')
                .attr('r', 15)
                .attr('cx', 0)
                .attr('cy', 0)
                .style('fill', 'green')
                .style('stroke', 'black')
                .style('stroke-width', 3);
        }
    }
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
                screen.markerGroup.transition()
                    .attr('transform', 'translate(' + getXFromGrid(screen, screen.markerX) + ',' + getYFromGrid(screen, screen.markerY) + ')');
            }
        }
        if (stepNum == startAnimatingStep) {
            animate(screens[animatedScreen.x][animatedScreen.y]);
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