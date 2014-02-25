jQuery(function () {
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    var grid = {x: 3, y: 2};
    var screens = new Array();
    var screenPadding = 35;
    var innerScreenWidth = width / grid.x - screenPadding * 2;
    var innerScreenHeight = height / grid.y -screenPadding * 2;
    var boundingBoxWidth = innerScreenWidth - screenPadding * 6;
    var boundingBoxHeight = innerScreenHeight - screenPadding * 6;
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
            };
            svg.append('rect')
                .attr('x', screens[x][y].x + screenPadding)
                .attr('y', screens[x][y].y + screenPadding)
                .attr('width', innerScreenWidth)
                .attr('height', innerScreenHeight)
                .style('fill', 'white');
            svg.append('rect')
                .attr('x', screens[x][y].x + screenPadding * 4)
                .attr('y', screens[x][y].y + screenPadding * 4)
                .attr('width', boundingBoxWidth)
                .attr('height', boundingBoxHeight)
                .style('fill', 'transparent')
                .style('stroke', 'red')
                .style('stroke-width', 3)
                .style('stroke-dasharray', '10,5');
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
});