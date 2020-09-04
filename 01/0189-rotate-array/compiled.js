function rotate1(nums, k) {
    var past = nums.splice(nums.length - k, k);
    for (var i = past.length - 1; i >= 0; i--) {
        nums.unshift(past[i]);
    }
    return nums;
}
console.time('runtime');
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(rotate1([-1, -100, 3, 99], 2));
console.timeEnd('runtime');
console.log();
