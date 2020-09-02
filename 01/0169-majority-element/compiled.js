function majorityElement(nums) {
    var _a;
    var halfSize = nums.length / 2;
    var hashMap = (_a = {},
        _a[nums[0]] = 1,
        _a);
    for (var i = 1; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]]++;
            if (hashMap[nums[i]] > halfSize)
                return nums[i];
        }
        else {
            hashMap[nums[i]] = 1;
        }
    }
    return nums[0];
}
console.time('runtime');
console.log(majorityElement([3, 2, 3]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.timeEnd('runtime');
console.log();
