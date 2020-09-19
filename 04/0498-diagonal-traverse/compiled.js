function findDiagonalOrder(matrix) {
    if (!matrix.length)
        return [];
    var i = matrix.length;
    var j = matrix[0].length;
    var result = [];
    var row = 0;
    var col = 0;
    var dir = 1;
    for (var y = 0; y < i * j; y++) {
        result.push(matrix[row][col]);
        row -= dir;
        col += dir;
        if (row >= i) {
            row = i - 1;
            col += 2;
            dir = -dir;
        }
        if (col >= j) {
            col = j - 1;
            row += 2;
            dir = -dir;
        }
        if (row < 0) {
            row = 0;
            dir = -dir;
        }
        if (col < 0) {
            col = 0;
            dir = -dir;
        }
    }
    return result;
}
console.time('runtime');
console.log(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(findDiagonalOrder([
    [9, 8, 7],
    [6, 5, 4],
]));
console.timeEnd('runtime');
console.log();
