function containsNearbyDuplicate(nums, k) {
    var hashMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            var prevIndex = hashMap.get(nums[i]);
            if (i - prevIndex <= k)
                return true;
        }
        hashMap.set(nums[i], i);
    }
    return false;
}
console.time('runtime');
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.timeEnd('runtime');
console.log();
