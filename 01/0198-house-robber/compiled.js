function rob(nums) {
    if (nums.length === 0)
        return 0;
    var prev1 = 0;
    var prev2 = 0;
    for (var i = 0; i < nums.length; i++) {
        var temp = prev1;
        prev1 = Math.max(prev2 + nums[i], prev1);
        prev2 = temp;
    }
    return prev1;
}
function robWMemo(nums) {
    if (nums.length === 0)
        return 0;
    var memo = new Array(nums.length + 1);
    memo[0] = 0;
    memo[1] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
    }
    return memo[nums.length];
}
console.time('runtime');
console.log(rob([1, 2, 3, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(rob([2, 7, 9, 3, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(robWMemo([1, 2, 3, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(robWMemo([2, 7, 9, 3, 1]));
console.timeEnd('runtime');
console.log();
