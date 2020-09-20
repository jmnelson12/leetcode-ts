// difficulty: easy
// link: https://leetcode.com/problems/merge-sorted-array/

/*
  Example 1:
  ------------------------
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  Output: [1,2,2,3,5,6]


  Constraints:
  ------------------------
    * -10^9 <= nums1[i], nums2[i] <= 10^9
    * nums1.length == m + n
    * nums2.length == n

*/

function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let size = m + n - 1
  m--
  n--

  while (n >= 0) {
    nums1[size--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--]
  }

  return nums1
}

console.time('runtime')
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.timeEnd('runtime')
console.log()
