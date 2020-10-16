function getFirstNegNumIndex(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
function countNegatives(grid) {
    var count = 0;
    for (var i = 0; i < grid.length; i++) {
        var row = grid[i];
        var index = getFirstNegNumIndex(row);
        count += row.length - index;
    }
    return count;
}
console.time('runtime');
console.log(countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(countNegatives([
    [3, 2],
    [1, 0],
]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(countNegatives([
    [1, -1],
    [-1, -1],
]));
console.timeEnd('runtime');
console.log();
