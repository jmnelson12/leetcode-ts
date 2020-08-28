function runningSum(nums) {
    if (nums.length === 0)
        return [];
    if (nums.length === 1)
        return nums;
    var results = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        results.push(results[i - 1] + nums[i]);
    }
    return results;
}
console.time('attempt 1');
console.log(runningSum([1, 2, 3, 4]));
console.timeEnd('attempt 1');
console.log();
console.time('attempt 2');
console.log(runningSum([1, 1, 1, 1, 1]));
console.timeEnd('attempt 2');
console.log();
console.time('attempt 3');
console.log(runningSum([3, 1, 2, 10, 1]));
console.timeEnd('attempt 3');
console.log();
