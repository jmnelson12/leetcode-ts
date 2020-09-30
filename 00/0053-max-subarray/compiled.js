function maxSubArray(nums) {
    var max = nums[0];
    var current = max;
    for (var i = 1; i < nums.length; i++) {
        current = Math.max(nums[i] + current, nums[i]);
        max = Math.max(current, max);
    }
    return max;
}
console.time('runtime');
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(maxSubArray([1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(maxSubArray([-2147483647]));
console.timeEnd('runtime');
console.log();
