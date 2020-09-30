// difficulty: easy
// link: https://leetcode.com/problems/maximum-subarray/

/*
  Example 1:
  ------------------------
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.

  Example 2:
  ------------------------
  Input: nums = [1]
  Output: 1

  Example 3:
  ------------------------
  Input: nums = [-2147483647]
  Output: -2147483647


  Constraints:
  ------------------------
    * 1 <= nums.length <= 2 * 104
    * -231 <= nums[i] <= 231 - 1

*/

function maxSubArray(nums: number[]): number {
  let max = nums[0]
  let current = max

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i] + current, nums[i])
    max = Math.max(current, max)
  }

  return max
}

console.time('runtime')
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(maxSubArray([1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(maxSubArray([-2147483647]))
console.timeEnd('runtime')
console.log()
