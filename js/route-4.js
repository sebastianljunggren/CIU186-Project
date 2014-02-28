var grid = {x: 3, y: 2};
var routes = new Array();
var iterations = 160;
var startAnimatingStep = 139;
var animatedScreen = {x: 2, y: 0};
for(var x = 0; x < grid.x; x++) {
    routes[x] = new Array();
}
routes[2][1] = [
    // Middle to right 1
    {x: 27, y: 20},
    {x: 27, y: 22},
    {x: 19, y: 18},
    {x: 23, y: 17},
    {x: 20, y: 15},
    {x: 21, y: 22},
    {x: 26, y: 19},
    {x: 21, y: 18},
    {x: 25, y: 15},
    {x: 20, y: 15},
    // Right to right 2
    {x: 25, y: 15},
    {x: 16, y: 12},
    {x: 25, y: 15},
    {x: 18, y: 13},
    {x: 18, y: 12},
    {x: 15, y: 8},
    {x: 19, y: 15},
    {x: 20, y: 12},
    {x: 18, y: 10},
    {x: 16, y: 15},
    // Right to middle 1
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 25, y: 15},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 14, y: 18},
    {x: 20, y: 15},
    {x: 17, y: 10},
     // Middle to middle 2
    {x: 23, y: 20},
    {x: 19, y: 8},
    {x: 20, y: 18},
    {x: 16, y: 10},
    {x: 18, y: 10},
    {x: 21, y: 22},
    {x: 13, y: 12},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 17, y: 15},
    // Middle to right 1
    {x: 27, y: 22},
    {x: 21, y: 22},
    {x: 26, y: 19},
    {x: 25, y: 15},
    {x: 27, y: 20},
    {x: 19, y: 18},
    {x: 23, y: 17},
    {x: 21, y: 18},
    {x: 20, y: 15},
    {x: 20, y: 15},
    // Right to right 2
    {x: 18, y: 13},
    {x: 19, y: 15},
    {x: 16, y: 15},
    {x: 20, y: 12},
    {x: 18, y: 12},
    {x: 25, y: 15},
    {x: 18, y: 10},
    {x: 16, y: 12},
    {x: 25, y: 15},
    {x: 15, y: 8},
    // Right to middle 1
    {x: 18, y: 9},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 20, y: 15},
    {x: 25, y: 10},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 22, y: 10},
     // Middle to middle 2
    {x: 20, y: 15},
    {x: 23, y: 20},
    {x: 17, y: 15},
    {x: 16, y: 10},
    {x: 13, y: 12},
    {x: 20, y: 15},
    {x: 21, y: 22},
    {x: 19, y: 8},
    {x: 20, y: 18},
    {x: 18, y: 10},
    // Middle to right 1
    {x: 27, y: 22},
    {x: 19, y: 18},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 27, y: 20},
    {x: 25, y: 15},
    {x: 26, y: 19},
    {x: 21, y: 18},
    {x: 21, y: 22},
    {x: 23, y: 17},
    // Right to right 2
    {x: 15, y: 8},
    {x: 25, y: 15},
    {x: 16, y: 12},
    {x: 18, y: 12},
    {x: 18, y: 10},
    {x: 18, y: 13},
    {x: 19, y: 15},
    {x: 25, y: 15},
    {x: 16, y: 15},
    {x: 20, y: 12},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 17, y: 10},
    {x: 20, y: 15},
    {x: 18, y: 19},
    {x: 14, y: 18},
    {x: 18, y: 9},
    {x: 16, y: 16},
    {x: 21, y: 16},
    {x: 22, y: 10},
    {x: 25, y: 10},
     // Middle to middle 2
    {x: 20, y: 18},
    {x: 16, y: 10},
    {x: 23, y: 20},
    {x: 18, y: 10},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 19, y: 8},
    {x: 21, y: 22},
    {x: 13, y: 12},
    {x: 17, y: 15},
    // Middle to right 1
    {x: 25, y: 15},
    {x: 20, y: 15},
    {x: 26, y: 19},
    {x: 21, y: 18},
    {x: 27, y: 22},
    {x: 19, y: 18},
    {x: 23, y: 17},
    {x: 27, y: 20},
    {x: 20, y: 15},
    {x: 21, y: 22},
    // Right to right 2
    {x: 18, y: 13},
    {x: 25, y: 15},
    {x: 15, y: 8},
    {x: 16, y: 15},
    {x: 19, y: 15},
    {x: 16, y: 12},
    {x: 18, y: 12},
    {x: 25, y: 15},
    {x: 18, y: 10},
    {x: 20, y: 12},
    // Right to middle 1
    {x: 16, y: 16},
    {x: 25, y: 10},
    {x: 20, y: 15},
    {x: 17, y: 10},
    {x: 18, y: 19},
    {x: 14, y: 18},
    {x: 25, y: 15},
    {x: 21, y: 16},
    {x: 18, y: 9},
    {x: 22, y: 10},
     // Middle to middle 2
    {x: 21, y: 22},
    {x: 19, y: 8},
    {x: 20, y: 18},
    {x: 23, y: 20},
    {x: 18, y: 10},
    {x: 16, y: 10},
    {x: 17, y: 15},
    {x: 20, y: 15},
    {x: 13, y: 12},
    {x: 20, y: 15},
];
routes[1][1] = [
    // Left to middle 1
    {x: 15, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 18, y: 10},
    {x: 20, y: 15},
    {x: 18, y: 9},
    {x: 16, y: 16},
    {x: 17, y: 10},
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 23, y: 15},
    {x: 25, y: 13},
    {x: 20, y: 15},
    {x: 25, y: 18},
    {x: 19, y: 10},
    {x: 21, y: 10},
    {x: 15, y: 12},
    // Middle to middle 2
    {x: 19, y: 8},
    {x: 13, y: 12},
    {x: 16, y: 10},
    {x: 20, y: 15},
    {x: 18, y: 10},
    {x: 21, y: 22},
    {x: 23, y: 20},
    {x: 20, y: 15},
    {x: 20, y: 18},
    {x: 17, y: 15},
    // Middle to left 1
    {x: 15, y: 15},
    {x: 16, y: 8},
    {x: 17, y: 9},
    {x: 20, y: 15},
    {x: 24, y: 11},
    {x: 23, y: 16},
    {x: 19, y: 10},
    {x: 22, y: 10},
    {x: 21, y: 12},
    {x: 24, y: 9},
    // Left to left 2
    {x: 13, y: 12},
    {x: 13, y: 12},
    {x: 15, y: 15},
    {x: 13, y: 8},
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 15, y: 15},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    // Left to middle 1
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 15, y: 15},
    {x: 17, y: 10},
    {x: 21, y: 16},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 18, y: 10},
    {x: 14, y: 18},
    {x: 20, y: 15},
    // Middle to middle 1
    {x: 25, y: 18},
    {x: 15, y: 12},
    {x: 23, y: 15},
    {x: 19, y: 10},
    {x: 19, y: 18},
    {x: 25, y: 13},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 21, y: 18},
    {x: 21, y: 10},
    // Middle to middle 2
    {x: 20, y: 18},
    {x: 21, y: 22},
    {x: 23, y: 20},
    {x: 13, y: 12},
    {x: 16, y: 10},
    {x: 17, y: 15},
    {x: 18, y: 10},
    {x: 19, y: 8},
    {x: 20, y: 15},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 15, y: 15},
    {x: 20, y: 15},
    {x: 22, y: 10},
    {x: 17, y: 9},
    {x: 23, y: 16},
    {x: 24, y: 9},
    {x: 16, y: 8},
    {x: 19, y: 10},
    {x: 24, y: 11},
    {x: 21, y: 12},
    // Left to left 2
    {x: 13, y: 8},
    {x: 15, y: 15},
    {x: 14, y: 10},
    {x: 13, y: 12},
    {x: 13, y: 12},
    {x: 15, y: 15},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 11},
    {x: 13, y: 10},
        // Left to middle 1
    {x: 21, y: 16},
    {x: 18, y: 10},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 20, y: 15},
    {x: 15, y: 15},
    {x: 14, y: 18},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 16, y: 16},
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 23, y: 15},
    {x: 19, y: 10},
    {x: 21, y: 18},
    {x: 21, y: 10},
    {x: 20, y: 15},
    {x: 15, y: 12},
    {x: 25, y: 18},
    {x: 25, y: 13},
    {x: 19, y: 18},
    // Middle to middle 2
    {x: 20, y: 18},
    {x: 19, y: 8},
    {x: 17, y: 15},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 13, y: 12},
    {x: 18, y: 10},
    {x: 23, y: 20},
    {x: 16, y: 10},
    {x: 21, y: 22},
    // Middle to left 1
    {x: 21, y: 12},
    {x: 23, y: 16},
    {x: 15, y: 15},
    {x: 22, y: 10},
    {x: 16, y: 8},
    {x: 17, y: 9},
    {x: 20, y: 15},
    {x: 24, y: 11},
    {x: 19, y: 10},
    {x: 24, y: 9},
    // Left to left 2
    {x: 15, y: 15},
    {x: 15, y: 15},
    {x: 13, y: 10},
    {x: 13, y: 8},
    {x: 13, y: 9},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 14, y: 10},
    {x: 13, y: 12},
    {x: 13, y: 10},
        // Left to middle 1
    {x: 15, y: 15},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 18, y: 9},
    {x: 21, y: 16},
    {x: 18, y: 10},
    {x: 20, y: 15},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 17, y: 10},
];
routes[2][0] = [
    // Right to middle 1
    {x: 21, y: 16},
    {x: 25, y: 15},
    {x: 20, y: 15},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 14, y: 18},
    {x: 25, y: 10},
    {x: 22, y: 10},
    {x: 17, y: 10},
    // Middle to right 1
    {x: 21, y: 22},
    {x: 19, y: 18},
    {x: 26, y: 19},
    {x: 27, y: 20},
    {x: 20, y: 15},
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 20, y: 15},
    {x: 21, y: 18},
    {x: 23, y: 17},
    // Middle to middle 2
    {x: 17, y: 15},
    {x: 20, y: 18},
    {x: 23, y: 20},
    {x: 21, y: 22},
    {x: 13, y: 12},
    {x: 16, y: 10},
    {x: 18, y: 10},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 19, y: 8},
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 15, y: 12},
    {x: 25, y: 13},
    {x: 20, y: 15},
    {x: 21, y: 18},
    {x: 25, y: 18},
    {x: 23, y: 15},
    {x: 21, y: 10},
    {x: 19, y: 10},
    {x: 19, y: 18},
    // Right to right 2
    {x: 15, y: 8},
    {x: 16, y: 15},
    {x: 18, y: 13},
    {x: 16, y: 12},
    {x: 18, y: 10},
    {x: 25, y: 15},
    {x: 25, y: 15},
    {x: 18, y: 12},
    {x: 20, y: 12},
    {x: 19, y: 15},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 20, y: 15},
    {x: 17, y: 9},
    {x: 16, y: 8},
    {x: 24, y: 9},
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 21, y: 12},
    {x: 24, y: 11},
    {x: 22, y: 10},
    {x: 15, y: 15},
    // Left to left 2
    {x: 13, y: 10},
    {x: 14, y: 10},
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 13, y: 9},
    {x: 13, y: 12},
    {x: 13, y: 10},
    {x: 13, y: 8},
    {x: 13, y: 11},
    {x: 15, y: 15},
    // Left to left 1
    {x: 13, y: 16},
    {x: 15, y: 15},
    {x: 15, y: 15},
    {x: 16, y: 16},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 20, y: 10},
    {x: 14, y: 18},
    {x: 18, y: 19},
    {x: 18, y: 9},
    // Left to left 1
    {x: 18, y: 9},
    {x: 17, y: 10},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 13, y: 16},
    {x: 15, y: 15},
    {x: 18, y: 19},
    {x: 15, y: 15},
    {x: 21, y: 16},
    {x: 20, y: 10},
    // Left to left 1
    {x: 16, y: 16},
    {x: 17, y: 10},
    {x: 13, y: 16},
    {x: 14, y: 18},
    {x: 21, y: 16},
    {x: 18, y: 9},
    {x: 15, y: 15},
    {x: 18, y: 19},
    {x: 20, y: 10},
    {x: 15, y: 15},
    // Left to middle 1
    {x: 15, y: 15},
    {x: 18, y: 10},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 17, y: 10},
    {x: 21, y: 16},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 20, y: 15},
    // Middle to middle 2
    {x: 18, y: 10},
    {x: 16, y: 10},
    {x: 20, y: 18},
    {x: 17, y: 15},
    {x: 13, y: 12},
    {x: 21, y: 22},
    {x: 20, y: 15},
    {x: 19, y: 8},
    {x: 23, y: 20},
    {x: 20, y: 15},
    // Middle to outside left 1
    // 20, 15 to 8, 11
    {x: 20, y: 15},
    {x: 25, y: 16},
    {x: 21, y: 17},
    {x: 22, y: 18},
    {x: 22, y: 19},
    {x: 22, y: 19},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 15, y: 12},
    {x: 8, y: 11},
    // Outside left to outside left 2
    // 8, 11 to 8, 11
    {x: 3, y: 15},
    {x: 8, y: 11},
    {x: 3, y: 14},
    {x: 4, y: 12},
    {x: 7, y: 10},
    {x: 8, y: 11},
    {x: 5, y: 13},
    {x: 5, y: 22},
    {x: 5, y: 13},
    {x: 5, y: 9},
    // Outside left to outside left 1
    // 8, 11 to 8, 11
    {x: 6, y: 12},
    {x: 1, y: 25},
    {x: 3, y: 24},
    {x: 6, y: 10},
    {x: 7, y: 19},
    {x: 4, y: 22},
    {x: 7, y: 10},
    {x: 6, y: 13},
    {x: 8, y: 11},
    {x: 8, y: 11},
    // Outside left to outside left 2
    // 8, 11 to 8, 11
    {x: 5, y: 13},
    {x: 5, y: 9},
    {x: 3, y: 15},
    {x: 8, y: 11},
    {x: 3, y: 14},
    {x: 7, y: 10},
    {x: 5, y: 22},
    {x: 8, y: 11},
    {x: 4, y: 12},
    {x: 5, y: 13},

];
routes[1][0] = [
    // Right to right 1
    {x: 27, y: 22},
    {x: 18, y: 16},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 25, y: 20},
    {x: 21, y: 19},
    {x: 27, y: 20},
    {x: 25, y: 15},
    {x: 25, y: 15},
    {x: 19, y: 14},
    // Right to right 1
    {x: 25, y: 15},
    {x: 21, y: 19},
    {x: 26, y: 19},
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 27, y: 20},
    {x: 19, y: 14},
    {x: 18, y: 16},
    {x: 23, y: 17},
    {x: 25, y: 20},
    // Right to right 1
    {x: 25, y: 15},
    {x: 25, y: 20},
    {x: 27, y: 22},
    {x: 21, y: 19},
    {x: 25, y: 15},
    {x: 18, y: 16},
    {x: 27, y: 20},
    {x: 19, y: 14},
    {x: 23, y: 17},
    {x: 26, y: 19},
    // Right to right 1
    {x: 25, y: 15},
    {x: 19, y: 14},
    {x: 27, y: 22},
    {x: 21, y: 19},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 27, y: 20},
    {x: 25, y: 20},
    {x: 18, y: 16},
    {x: 25, y: 15},
    // Right to right 1
    {x: 18, y: 16},
    {x: 27, y: 22},
    {x: 26, y: 19},
    {x: 23, y: 17},
    {x: 21, y: 19},
    {x: 27, y: 20},
    {x: 25, y: 15},
    {x: 25, y: 20},
    {x: 25, y: 15},
    {x: 19, y: 14},
    // Right to right 1
    {x: 26, y: 19},
    {x: 21, y: 19},
    {x: 27, y: 22},
    {x: 25, y: 20},
    {x: 27, y: 20},
    {x: 19, y: 14},
    {x: 25, y: 15},
    {x: 23, y: 17},
    {x: 25, y: 15},
    {x: 18, y: 16},
    // Right to right 1
    {x: 27, y: 20},
    {x: 19, y: 14},
    {x: 25, y: 15},
    {x: 26, y: 19},
    {x: 21, y: 19},
    {x: 25, y: 20},
    {x: 18, y: 16},
    {x: 25, y: 15},
    {x: 23, y: 17},
    {x: 27, y: 22},
    // Right to right 1
    {x: 27, y: 20},
    {x: 26, y: 19},
    {x: 27, y: 22},
    {x: 21, y: 19},
    {x: 25, y: 20},
    {x: 23, y: 17},
    {x: 18, y: 16},
    {x: 19, y: 14},
    {x: 25, y: 15},
    {x: 25, y: 15},
    // Right to right 1
    {x: 26, y: 19},
    {x: 23, y: 17},
    {x: 27, y: 20},
    {x: 25, y: 15},
    {x: 18, y: 16},
    {x: 21, y: 19},
    {x: 19, y: 14},
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 25, y: 20},
    // Right to right 1
    {x: 21, y: 19},
    {x: 25, y: 20},
    {x: 26, y: 19},
    {x: 23, y: 17},
    {x: 25, y: 15},
    {x: 18, y: 16},
    {x: 19, y: 14},
    {x: 25, y: 15},
    {x: 27, y: 22},
    {x: 27, y: 20},
    // Right to right 1
    {x: 19, y: 14},
    {x: 25, y: 15},
    {x: 27, y: 20},
    {x: 25, y: 20},
    {x: 23, y: 17},
    {x: 18, y: 16},
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 21, y: 19},
    {x: 26, y: 19},
    // Right to right 1
    {x: 18, y: 16},
    {x: 27, y: 22},
    {x: 23, y: 17},
    {x: 25, y: 15},
    {x: 25, y: 20},
    {x: 19, y: 14},
    {x: 27, y: 20},
    {x: 21, y: 19},
    {x: 25, y: 15},
    {x: 26, y: 19},
    // Right to right 1
    {x: 26, y: 19},
    {x: 19, y: 14},
    {x: 23, y: 17},
    {x: 25, y: 15},
    {x: 27, y: 20},
    {x: 27, y: 22},
    {x: 21, y: 19},
    {x: 25, y: 15},
    {x: 25, y: 20},
    {x: 18, y: 16},
    // Right to right 1
    {x: 23, y: 17},
    {x: 27, y: 20},
    {x: 25, y: 15},
    {x: 19, y: 14},
    {x: 21, y: 19},
    {x: 25, y: 15},
    {x: 18, y: 16},
    {x: 26, y: 19},
    {x: 27, y: 22},
    {x: 25, y: 20},
    // Right to right 1
    {x: 21, y: 19},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 25, y: 15},
    {x: 25, y: 15},
    {x: 19, y: 14},
    {x: 25, y: 20},
    {x: 18, y: 16},
    {x: 27, y: 22},
    {x: 27, y: 20},
    // Right to right 1
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 25, y: 20},
    {x: 21, y: 19},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 19, y: 14},
    {x: 18, y: 16},
    {x: 25, y: 15},
    {x: 27, y: 20},
];
routes[0][1] = [
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 25, y: 13},
    {x: 21, y: 10},
    {x: 19, y: 10},
    {x: 15, y: 12},
    {x: 25, y: 18},
    {x: 23, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 20, y: 15},
    {x: 17, y: 9},
    {x: 16, y: 8},
    {x: 24, y: 9},
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 21, y: 12},
    {x: 24, y: 11},
    {x: 22, y: 10},
    {x: 15, y: 15},
    // Left to middle 1
    {x: 15, y: 15},
    {x: 18, y: 10},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 17, y: 10},
    {x: 21, y: 16},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 20, y: 15},
    // Left to middle 1
    {x: 15, y: 15},
    {x: 18, y: 10},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 17, y: 10},
    {x: 21, y: 16},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 20, y: 15},
    // Left to left 2
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8},
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 12},
    {x: 15, y: 15},
    // Left to left 2
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 15, y: 15},
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 11},
    {x: 13, y: 9},
    {x: 13, y: 8},
    {x: 13, y: 12},
    // Left to middle 1
    {x: 15, y: 15},
    {x: 18, y: 10},
    {x: 16, y: 16},
    {x: 18, y: 9},
    {x: 17, y: 10},
    {x: 21, y: 16},
    {x: 18, y: 19},
    {x: 16, y: 16},
    {x: 14, y: 18},
    {x: 20, y: 15},
    // Middle to right 1
    {x: 20, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 20, y: 15},
    {x: 21, y: 22},
    {x: 27, y: 22},
    {x: 27, y: 20},
    {x: 26, y: 19},
    {x: 23, y: 17},
    {x: 25, y: 15},
    // Right to right 1
    {x: 25, y: 15},
    {x: 19, y: 14},
    {x: 18, y: 16},
    {x: 21, y: 19},
    {x: 25, y: 20},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 27, y: 20},
    {x: 27, y: 22},
    {x: 25, y: 15},
    // Right to right 2
    {x: 25, y: 15},
    {x: 18, y: 12},
    {x: 16, y: 15},
    {x: 18, y: 13},
    {x: 19, y: 15},
    {x: 16, y: 12},
    {x: 15, y: 8},
    {x: 18, y: 10},
    {x: 20, y: 12},
    {x: 25, y: 15},
    // Right to right 2
    {x: 15, y: 8},
    {x: 16, y: 12},
    {x: 18, y: 12},
    {x: 18, y: 10},
    {x: 16, y: 15},
    {x: 18, y: 13},
    {x: 25, y: 15},
    {x: 19, y: 15},
    {x: 25, y: 15},
    {x: 20, y: 12},
    // Right to right 2
    {x: 25, y: 15},
    {x: 19, y: 15},
    {x: 18, y: 12},
    {x: 18, y: 13},
    {x: 15, y: 8},
    {x: 20, y: 12},
    {x: 16, y: 15},
    {x: 25, y: 15},
    {x: 16, y: 12},
    {x: 18, y: 10},
    // Right to right 2
    {x: 18, y: 12},
    {x: 15, y: 8},
    {x: 25, y: 15},
    {x: 18, y: 13},
    {x: 16, y: 15},
    {x: 19, y: 15},
    {x: 25, y: 15},
    {x: 20, y: 12},
    {x: 16, y: 12},
    {x: 18, y: 10},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 20, y: 15},
    {x: 17, y: 9},
    {x: 16, y: 8},
    {x: 24, y: 9},
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 21, y: 12},
    {x: 24, y: 11},
    {x: 22, y: 10},
    {x: 15, y: 15},
    // Left to left 2
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8},
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 12},
    {x: 15, y: 15},
    // Left to left 2
    {x: 15, y: 15},
    {x: 13, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 8},
    {x: 15, y: 15},
    {x: 14, y: 10},
    {x: 13, y: 12},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 9},
    // Left to left 2
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 10},
    {x: 13, y: 9},
    {x: 13, y: 8},
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 12},
    {x: 15, y: 15},
    // Left to left 2
    {x: 14, y: 10},
    {x: 13, y: 12},
    {x: 13, y: 10},
    {x: 15, y: 15},
    {x: 13, y: 12},
    {x: 13, y: 8},
    {x: 13, y: 9},
    {x: 15, y: 15},
    {x: 13, y: 10},
    {x: 13, y: 11},
    // Left to left 2
    {x: 14, y: 10},
    {x: 13, y: 10},
    {x: 13, y: 8},
    {x: 15, y: 15},
    {x: 15, y: 15},
    {x: 13, y: 9},
    {x: 13, y: 12},
    {x: 13, y: 11},
    {x: 13, y: 12},
    {x: 13, y: 10},

];
routes[0][0] = [
    // Middle to right 1
    {x: 27, y: 22},
    {x: 25, y: 15},
    {x: 26, y: 19},
    {x: 21, y: 18},
    {x: 19, y: 18},
    {x: 20, y: 15},
    {x: 27, y: 20},
    {x: 23, y: 17},
    {x: 21, y: 22},
    {x: 20, y: 15},
    // Middle to middle 2
    {x: 23, y: 20},
    {x: 20, y: 15},
    {x: 13, y: 12},
    {x: 19, y: 8},
    {x: 21, y: 22},
    {x: 20, y: 18},
    {x: 16, y: 10},
    {x: 18, y: 10},
    {x: 17, y: 15},
    {x: 20, y: 15},
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 25, y: 13},
    {x: 21, y: 10},
    {x: 19, y: 10},
    {x: 15, y: 12},
    {x: 25, y: 18},
    {x: 23, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 20, y: 15},
    // Right to right 2
    {x: 25, y: 15},
    {x: 18, y: 12},
    {x: 16, y: 15},
    {x: 18, y: 13},
    {x: 19, y: 15},
    {x: 16, y: 12},
    {x: 15, y: 8},
    {x: 18, y: 10},
    {x: 20, y: 12},
    {x: 25, y: 15},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 17, y: 9},
    {x: 22, y: 10},
    {x: 21, y: 12},
    {x: 16, y: 8},
    {x: 20, y: 15},
    {x: 24, y: 11},
    {x: 24, y: 9},
    {x: 15, y: 15},
    // Middle to right 1
    {x: 20, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 20, y: 15},
    {x: 21, y: 22},
    {x: 27, y: 22},
    {x: 27, y: 20},
    {x: 26, y: 19},
    {x: 23, y: 17},
    {x: 25, y: 15},
    // Middle to middle 2
    {x: 20, y: 15},
    {x: 18, y: 10},
    {x: 19, y: 8},
    {x: 16, y: 10},
    {x: 13, y: 12},
    {x: 17, y: 15},
    {x: 20, y: 18},
    {x: 23, y: 20},
    {x: 21, y: 22},
    {x: 20, y: 15},
    // Middle to middle 1
    {x: 25, y: 18},
    {x: 21, y: 18},
    {x: 21, y: 10},
    {x: 19, y: 18},
    {x: 23, y: 15},
    {x: 15, y: 12},
    {x: 20, y: 15},
    {x: 25, y: 13},
    {x: 19, y: 10},
    {x: 20, y: 15},
    // Right to right 2
    {x: 18, y: 12},
    {x: 16, y: 15},
    {x: 16, y: 12},
    {x: 19, y: 15},
    {x: 18, y: 10},
    {x: 25, y: 15},
    {x: 20, y: 12},
    {x: 25, y: 15},
    {x: 15, y: 8},
    {x: 18, y: 13},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 20, y: 15},
    {x: 17, y: 9},
    {x: 16, y: 8},
    {x: 24, y: 9},
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 21, y: 12},
    {x: 24, y: 11},
    {x: 22, y: 10},
    {x: 15, y: 15},
    // Middle to right 1
    {x: 27, y: 22},
    {x: 19, y: 18},
    {x: 25, y: 15},
    {x: 21, y: 22},
    {x: 20, y: 15},
    {x: 20, y: 15},
    {x: 23, y: 17},
    {x: 26, y: 19},
    {x: 21, y: 18},
    {x: 27, y: 20},
    // Middle to middle 2
    {x: 20, y: 15},
    {x: 18, y: 10},
    {x: 19, y: 8},
    {x: 16, y: 10},
    {x: 13, y: 12},
    {x: 17, y: 15},
    {x: 20, y: 18},
    {x: 23, y: 20},
    {x: 21, y: 22},
    {x: 20, y: 15},
    // Middle to middle 1
    {x: 20, y: 15},
    {x: 25, y: 13},
    {x: 21, y: 10},
    {x: 19, y: 10},
    {x: 15, y: 12},
    {x: 25, y: 18},
    {x: 23, y: 15},
    {x: 19, y: 18},
    {x: 21, y: 18},
    {x: 20, y: 15},
    // Right to right 2
    {x: 15, y: 8},
    {x: 18, y: 10},
    {x: 18, y: 12},
    {x: 20, y: 12},
    {x: 25, y: 15},
    {x: 16, y: 15},
    {x: 16, y: 12},
    {x: 18, y: 13},
    {x: 25, y: 15},
    {x: 19, y: 15},
    // Right to middle 1
    {x: 25, y: 15},
    {x: 14, y: 18},
    {x: 16, y: 16},
    {x: 18, y: 19},
    {x: 21, y: 16},
    {x: 17, y: 10},
    {x: 18, y: 9},
    {x: 22, y: 10},
    {x: 25, y: 10},
    {x: 20, y: 15},
    // Middle to left 1
    {x: 20, y: 15},
    {x: 17, y: 9},
    {x: 16, y: 8},
    {x: 24, y: 9},
    {x: 19, y: 10},
    {x: 23, y: 16},
    {x: 21, y: 12},
    {x: 24, y: 11},
    {x: 22, y: 10},
    {x: 15, y: 15},
    // Middle to right 1
    {x: 26, y: 19},
    {x: 25, y: 15},
    {x: 21, y: 18},
    {x: 20, y: 15},
    {x: 19, y: 18},
    {x: 20, y: 15},
    {x: 23, y: 17},
    {x: 21, y: 22},
    {x: 27, y: 22},
    {x: 27, y: 20},
    // Middle to middle 2
    {x: 20, y: 15},
    {x: 18, y: 10},
    {x: 19, y: 8},
    {x: 16, y: 10},
    {x: 13, y: 12},
    {x: 17, y: 15},
    {x: 20, y: 18},
    {x: 23, y: 20},
    {x: 21, y: 22},
    {x: 20, y: 15},
];