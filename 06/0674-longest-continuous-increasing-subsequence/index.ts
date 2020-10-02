// difficulty: easy
// link: https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/*
  Example 1:
  ------------------------
  Input: [1,3,5,4,7]
  Output: 3
  Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
  Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.

  Example 2:
  ------------------------
  Input: [2,2,2,2,2]
  Output: 1
  Explanation: The longest continuous increasing subsequence is [2], its length is 1.


  Constraints:
  ------------------------
    * Length of the array will not exceed 10,000

*/

function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) return 0

  let longest = 0
  let current = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      current++
    } else {
      longest = Math.max(current + 1, longest)
      current = 0
    }
  }

  return longest
}

console.time('runtime')
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
console.timeEnd('runtime')
console.log()