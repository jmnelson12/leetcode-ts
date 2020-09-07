// difficulty: easy
// link: https://leetcode.com/problems/two-sum

/*
  Example 1:
  ------------------------
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  ------------------------
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  ------------------------
  Input: nums = [3,3], target = 6
  Output: [0,1]

  Constraints:
  ------------------------
    * 2 <= nums.length <= 105
    * -109 <= nums[i] <= 109
    * -109 <= target <= 109
    * Only one valid answer exists.

*/

function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target - nums[i])) {
      return [i, hashMap.get(target - nums[i])]
    }

    hashMap.set(nums[i], i)
  }

  return [0, 0]
}

console.time('runtime')
console.log(twoSum([2, 7, 11, 15], 9))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(twoSum([3, 2, 4], 6))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(twoSum([3, 3], 6))
console.timeEnd('runtime')
console.log()
