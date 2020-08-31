function singleNumber(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]]++;
        }
        else {
            hashMap[nums[i]] = 0;
        }
    }
    for (var i in hashMap) {
        if (hashMap[i] === 0)
            return Number(i);
    }
    return 0;
}
console.time('runtime');
console.log(singleNumber([2, 2, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(singleNumber([4, 1, 2, 1, 2]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(singleNumber([-1, -1, -2]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(singleNumber([0]));
console.timeEnd('runtime');
console.log();
