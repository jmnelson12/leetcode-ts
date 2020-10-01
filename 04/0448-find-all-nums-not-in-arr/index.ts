// difficulty: easy
// link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/*
  Example 1:
  ------------------------
  Input:
  [4,3,2,7,8,2,3,1]

  Output:
  [5,6]


  Constraints:
  ------------------------
    * 1 ≤ a[i] ≤ n (n = size of array)
*/

function findDisappearedNumbers(nums: number[]): number[] {
  let output: number[] = []

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]) - 1
    if (nums[num] > 0) nums[num] = -nums[num]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) output.push(i + 1)
  }

  return output
}

console.time('runtime')
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.timeEnd('runtime')
console.log()
