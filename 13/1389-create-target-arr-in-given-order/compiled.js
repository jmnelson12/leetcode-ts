function createTargetArray(nums, index) {
    var target = [];
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var ind = index[i];
        target.splice(ind, 0, num);
    }
    return target;
}
console.time('runtime');
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(createTargetArray([1], [0]));
console.timeEnd('runtime');
console.log();
