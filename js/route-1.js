var grid = {x: 3, y: 2};
var routes = new Array();
for(var x = 0; x < grid.x; x++) {
    routes[x] = new Array();
}
routes[0][0] = [
    {x: 10, y: 10},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];
routes[0][1] = [
    {x: 5, y: 25},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];
routes[1][0] = [
    {x: 25, y: 22},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];
routes[1][1] = [
    {x: 11, y: 9},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];
routes[2][0] = [
    {x: 3, y: 25},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];
routes[2][1] = [
    {x: 10, y: 10},
    {x: 11, y: 10},
    {x: 12, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8}
];