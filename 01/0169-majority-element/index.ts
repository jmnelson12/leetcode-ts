// difficulty: easy
// link: https://leetcode.com/problems/majority-element/

/*
  Example 1:
  ------------------------
  Input: [3,2,3]
  Output: 3

  Example 2:
  ------------------------
  Input: [2,2,1,1,1,2,2]
  Output: 2

  Constraints:
  ------------------------
    * You may assume that the array is non-empty and the majority element always exist in the array.


*/

function majorityElement(nums: number[]): number {
  const halfSize = nums.length / 2
  const hashMap: { [key: string]: number } = {
    [nums[0]]: 1,
  }

  for (let i = 1; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]]++

      if (hashMap[nums[i]] > halfSize) return nums[i]
    } else {
      hashMap[nums[i]] = 1
    }
  }

  return nums[0]
}

console.time('runtime')
console.log(majorityElement([3, 2, 3]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.timeEnd('runtime')
console.log()
