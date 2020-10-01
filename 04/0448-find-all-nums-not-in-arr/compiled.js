function findDisappearedNumbers(nums) {
    var output = [];
    for (var i = 0; i < nums.length; i++) {
        var num = Math.abs(nums[i]) - 1;
        if (nums[num] > 0)
            nums[num] = -nums[num];
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            output.push(i + 1);
    }
    return output;
}
console.time('runtime');
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.timeEnd('runtime');
console.log();
