function merge(nums1, m, nums2, n) {
    var size = m + n - 1;
    m--;
    n--;
    while (n >= 0) {
        nums1[size--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
    }
    return nums1;
}
console.time('runtime');
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.timeEnd('runtime');
console.log();
