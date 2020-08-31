function numIdenticalPairs(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            var mapping = hashMap[nums[i]];
            mapping.count = mapping.count + mapping.inc;
            mapping.inc++;
        }
        else {
            hashMap[nums[i]] = { count: 0, inc: 1 };
        }
    }
    return Object.keys(hashMap).reduce(function (acc, key) {
        return acc + hashMap[key].count;
    }, 0);
}
console.time('runtime');
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(numIdenticalPairs([1, 2, 3]));
console.timeEnd('runtime');
console.log();
