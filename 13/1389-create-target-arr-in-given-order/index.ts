// difficulty: easy
// link: https://leetcode.com/problems/create-target-array-in-the-given-order/

/*
  Example 1:
  ------------------------
  Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
  Output: [0,4,1,3,2]
  Explanation:
  nums       index     target
  0            0        [0]
  1            1        [0,1]
  2            2        [0,1,2]
  3            2        [0,1,3,2]
  4            1        [0,4,1,3,2]

  Example 2:
  ------------------------
  Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
  Output: [0,1,2,3,4]
  Explanation:
  nums       index     target
  1            0        [1]
  2            1        [1,2]
  3            2        [1,2,3]
  4            3        [1,2,3,4]
  0            0        [0,1,2,3,4]

  Example 3:
  ------------------------
  Input: nums = [1], index = [0]
  Output: [1]


  Constraints:
  ------------------------
    * 1 <= nums.length, index.length <= 100
    * nums.length == index.length
    * 0 <= nums[i] <= 100
    * 0 <= index[i] <= i

*/

function createTargetArray(nums: number[], index: number[]): number[] {
  const target: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const ind = index[i]

    target.splice(ind, 0, num)
  }

  return target
}

console.time('runtime')
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(createTargetArray([1], [0]))
console.timeEnd('runtime')
console.log()
