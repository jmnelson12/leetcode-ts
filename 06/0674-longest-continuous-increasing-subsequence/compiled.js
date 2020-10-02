function findLengthOfLCIS(nums) {
    if (nums.length === 0)
        return 0;
    var longest = 0;
    var current = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            current++;
        }
        else {
            longest = Math.max(current + 1, longest);
            current = 0;
        }
    }
    return longest;
}
console.time('runtime');
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.timeEnd('runtime');
console.log();
