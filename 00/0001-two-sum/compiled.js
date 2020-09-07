function twoSum(nums, target) {
    var hashMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.has(target - nums[i])) {
            return [i, hashMap.get(target - nums[i])];
        }
        hashMap.set(nums[i], i);
    }
    return [0, 0];
}
console.time('runtime');
console.log(twoSum([2, 7, 11, 15], 9));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(twoSum([3, 2, 4], 6));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(twoSum([3, 3], 6));
console.timeEnd('runtime');
console.log();
