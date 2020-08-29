// difficulty: easy
// link: https://leetcode.com/problems/number-of-good-pairs/

/*
  Example 1:
  ------------------------
  Input: nums = [1,2,3,1,1,3]
  Output: 4
  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

  Example 2:
  ------------------------
  Input: nums = [1,1,1,1]
  Output: 6
  Explanation: Each pair in the array are good.


  Example 3:
  ------------------------
  Input: nums = [1,2,3]
  Output: 0


  Constraints:
  ------------------------
    * 1 <= nums.length <= 100
    * 1 <= nums[i] <= 100

*/
function numIdenticalPairs(nums: number[]): number {
  const hashMap: { [key: string]: { count: number; inc: number } } = {}

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      const mapping = hashMap[nums[i]]

      mapping.count = mapping.count + mapping.inc
      mapping.inc++
    } else {
      hashMap[nums[i]] = { count: 0, inc: 1 }
    }
  }

  return Object.keys(hashMap).reduce((acc, key) => {
    return acc + hashMap[key].count
  }, 0)
}

console.time('attempt 1')
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.timeEnd('attempt 1')
console.log()

console.time('attempt 2')
console.log(numIdenticalPairs([1, 1, 1, 1]))
console.timeEnd('attempt 2')
console.log()

console.time('attempt 3')
console.log(numIdenticalPairs([1, 2, 3]))
console.timeEnd('attempt 3')
console.log()
