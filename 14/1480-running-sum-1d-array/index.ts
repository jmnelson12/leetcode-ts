// difficulty: easy
// link: https://leetcode.com/problems/running-sum-of-1d-array/

/*
  Example 1:
  ------------------------
  Input: nums = [1,2,3,4]
  Output: [1,3,6,10]
  Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

   Example 2:
  ------------------------
  Input: nums = [1,1,1,1,1]
  Output: [1,2,3,4,5]
  Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

  Example 3:
  ------------------------
  Input: nums = [3,1,2,10,1]
  Output: [3,4,6,16,17]


  Constraints:
  ------------------------
    *  1 <= nums.length <= 1000
    * -10^6 <= nums[i] <= 10^6

*/

function runningSum(nums: number[]): number[] {
  if (nums.length === 0) return []
  if (nums.length === 1) return nums

  const results = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    results.push(results[i - 1] + nums[i])
  }

  return results
}

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))
