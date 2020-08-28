function shuffle(nums, n) {
    var results = [];
    for (var i = 0; i < n; i++) {
        results.push(nums[i], nums[n + i]);
    }
    return results;
}
console.time('attempt 1');
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.timeEnd('attempt 1');
console.log();
console.time('attempt 2');
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.timeEnd('attempt 2');
console.log();
console.time('attempt 3');
console.log(shuffle([1, 1, 2, 2], 2));
console.timeEnd('attempt 3');
console.log();
function shuffle2(nums, n) {
    return nums;
}
